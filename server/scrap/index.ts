import {
  PrismaClient,
  Track,
  Prisma,
  Label,
  Genre,
  Artist,
} from '../generated/client';

import { BEATPORT_URL, GENRES, POINTERS } from './constants';
import { getTracksURL, writeFile, getFile } from './utils';
import { gotScraping } from 'got-scraping';
import fs from 'fs';
import { load } from 'cheerio';

const prisma = new PrismaClient();

const pagination = 1;
const TRACKS_PER_PAGE = 50;
const CURRENT_GENRE = GENRES.NU_DISCO;
const FILE_NAME_TRACKS = `${CURRENT_GENRE}-${TRACKS_PER_PAGE}-${pagination}`;

interface IScrapProps {
  url: string;
  fileName: string;
}

// Write a type for tracks included all their relations
type ITrack = Track & {
  genre: Genre;
  label: Label;
  artists: Artist[];
};

// This function will map the tracks from the body.
const mapTracksFromBody = (body: string): Prisma.TrackCreateInput[] => {
  const $ = load(body);
  const tracksObJ: Prisma.TrackCreateInput[] = $('.bucket-items')
    .children()
    .map((i: any, li: any) => {
      const title = $(li).find('.buk-track-primary-title').text();
      const beatportTrackId: string = $(li).attr('data-ec-id') || '';
      const remixed = $(li).find('.buk-track-remixed').text();
      const trackKey = $(li).find('.buk-track-key').text().replace(/\s/g, '');
      // Genre
      const genre = {
        name: $(li).find('.buk-track-genre > a').text(),
        beatportGenreId: $(li).find('.buk-track-genre > a').attr('data-genre'),
      };

      // Label
      const label = {
        name: $(li).find('.buk-track-labels').text().replace(/\s/g, ''),
        beatportLabelId: $(li).find('.buk-track-labels > a').attr('data-label'),
      };

      // Artists
      const artists = $(li)
        .find('.buk-track-artists > a')
        .toArray()
        .map((el: any) => {
          const obj = {
            name: $(el).text(),
            id: $(el).attr('data-artist'),
          };
          return obj;
        });

      return {
        title,
        beatportTrackId,
        key: trackKey,
        genre,
        label,
        artists,
        remixed,
      } as Prisma.TrackCreateInput;
    })
    .toArray();
  return tracksObJ;
};

const saveTrackPreviewMp3 = async (track: Track) =>
  prisma.track.update({
    where: {
      beatportTrackId: track.beatportTrackId ?? '',
    },
    data: {
      previewSong: track.previewSong,
    },
  });

const saveArtists = async (
  artists: Prisma.ArtistCreateInput[],
  beatportTrackId: string
) => {
  return prisma.track.update({
    where: {
      beatportTrackId,
    },
    data: {
      artists: {
        connectOrCreate: artists.map((artist) => ({
          where: {
            beatportArtistId: artist.beatportArtistId,
          },
          create: {
            ...artist,
          },
        })),
      },
    },
  });
};

async function scrap({ url, fileName }: IScrapProps) {
  if (fs.existsSync(`./cached/${fileName}.html`)) {
    return getFile(fileName);
  }
  // Get the body from the URL.
  const { body } = await gotScraping.get(url);
  writeFile(body, fileName);
  return body;
}

const scrapTracks = async () => {
  const body = await scrap({
    url: getTracksURL({ page: pagination, genre: GENRES.MINIMAL_DEEP_TECH }),
    fileName: FILE_NAME_TRACKS,
  });

  const tracks = mapTracksFromBody(body);

  // search more data of the tracks from another scrap call
  const tracksWithMoreData = await Promise.all(
    tracks.map(async (track: any) => {
      const trackWithMoreData = await scrapTrack({
        title: track.title as string,
        beatportTrackId: track.beatportTrackId,
      });
      return trackWithMoreData;
    })
  );

  // fs.writeFileSync(
  //   `./cached/tracks-${pagination}.json`,
  //   JSON.stringify(tracks)
  // );

  return tracksWithMoreData;
};

const scrapTrack = async (
  trackInput: Prisma.TrackCreateInput
): Promise<Prisma.TrackCreateInput> => {
  const body = await scrap({
    url: `${BEATPORT_URL}/track/${trackInput.title.replace(/\s+/g, '-')}/${
      trackInput.beatportTrackId
    }`,
    fileName: `track-${trackInput.beatportTrackId}`,
  });

  const $ = await load(body);

  const trackArtists = [
    {
      name: $(POINTERS.ARTISTS).text(),
      beatportArtistId: $(POINTERS.ARTISTS).attr('data-artist') || '',
    },
  ];
  const track = {
    ...trackInput,
    key: $(POINTERS.KEY).text(),
    bpm: Number($(POINTERS.BPM).text()),
    length: $(POINTERS.LENGTH).text(),
    released: $(POINTERS.RELEASED).text(),
    previewSong: $(POINTERS.PREVIEW_SONG).attr('content'),
    artwork: $(POINTERS.ARTWORK).attr('src'),
  } as Track;

  await saveTrackPreviewMp3(track);
  await saveArtists(trackArtists, track.beatportTrackId);
  return track;
};

const saveTracks = async (tracks: Prisma.TrackCreateInput[]) => {
  tracks.forEach(async (track: any) => {
    const trackExists = await prisma.track.findUnique({
      where: {
        beatportTrackId: track.beatportTrackId,
      },
    });

    if (trackExists) {
      console.log('Track already exists, update', track.beatportTrackId);
      await prisma.track.update({
        where: {
          beatportTrackId: track.beatportTrackId,
        },
        data: {
          genre: {
            connectOrCreate: {
              where: {
                beatportGenreId: track.genre.beatportGenreId || '',
              },
              create: {
                name: track.genre.name,
                beatportGenreId: track.genre.beatportGenreId || '',
              },
            },
          },
          label: {
            connectOrCreate: {
              where: {
                beatportLabelId: track.label.beatportLabelId || '',
              },
              create: {
                name: track.label.name,
                beatportLabelId: track.label.beatportLabelId || '',
              },
            },
          },
        },
      });
    } else {
      console.log('Track does not exist, create', track.beatportTrackId);
      await prisma.track.create({
        data: {
          title: track.title,
          key: track.key,
          beatportTrackId: track.beatportTrackId,
          genre: {
            connectOrCreate: {
              where: {
                beatportGenreId: track.genre.beatportGenreId || '',
              },
              create: {
                name: track.genre.name,
                beatportGenreId: track.genre.beatportGenreId || '',
              },
            },
          },
          label: {
            connectOrCreate: {
              where: {
                beatportLabelId: track.label.beatportLabelId || '',
              },
              create: {
                name: track.label.name,
                beatportLabelId: track.label.beatportLabelId || '',
              },
            },
          },
        },
      });
    }
  });
};

const getTracksWithoutPreviewSong = async () => {
  const tracks = await prisma.track.findMany({
    where: {
      previewSong: null,
    },
  });
  return tracks;
};

async function init() {
  const tracks = await scrapTracks();
  const track0 = tracks[0];
  // await saveTracks(tracks);
  await scrapTrack(track0);
  // const tracks = await getTracksWithoutPreviewSong();
  // scrap every tracks without preview song

  // Scrap all tracks
  // await Promise.all(
  //   tracks.map(async (track: any) => {
  //     await scrapTrack({
  //       title: track.title as string,
  //       beatportTrackId: track.beatportTrackId,
  //     });
  //   })
  // );
}

init();
