import { PrismaClient, Track, Prisma } from '../generated/client';

import { BEATPORT_URL, GENRES, POINTERS, GENRES_IDS } from './constants';
import { getTracksURL, writeFile, getFile, saveMp3, slug } from './utils';
import { gotScraping } from 'got-scraping';
import fs from 'fs';
import { load } from 'cheerio';
import { IScrapProps, ITrack } from './types';
import { saveImage } from './utils/image';

const prisma = new PrismaClient();
const CURRENT_PAGE = 2;
const CURRENT_GENRE = GENRES.MINIMAL_DEEP_TECH;
const CURRENT_GENRE_ID = GENRES_IDS[CURRENT_GENRE];
const CURRENT_SOURCE = 'beatport';
const FILE_NAME_TRACKS = `${CURRENT_GENRE}-${CURRENT_GENRE_ID}-${CURRENT_PAGE}`;

const scrapper = {
  getTracksFromList: async (
    body: string
  ): Promise<Pick<ITrack, 'beatportTrackId' | 'title'>[]> => {
    const $ = load(body);
    const tracksIds = $('.bucket-items')
      .children()
      .map((i: any, li: any) => {
        const beatportTrackId = $(li).attr('data-ec-id') || '';
        const title = $(li).attr('data-ec-name') || '';

        return {
          beatportTrackId,
          title,
        };
      })
      .toArray();

    return tracksIds;
  },
  getTrackDetails: async (body: string) => {
    const $ = await load(body);
    const trackId = $(POINTERS.TRACK_ID).attr('data-ec-id')!;

    const trackArtists = [
      {
        name: $(POINTERS.ARTISTS).text(),
        beatportArtistId: $(POINTERS.ARTISTS).attr('data-artist') || '',
      },
    ];

    // Genre
    const genre = {
      name: $(POINTERS.GENRE).text() || '',
      beatportGenreId: $(POINTERS.GENRE).attr('data-genre') || '',
    };

    // Label
    const label = {
      name: $(POINTERS.LABEL).text() || '',
      beatportLabelId: $(POINTERS.LABEL).attr('data-label') || '',
    };

    const previewSong = $(POINTERS.PREVIEW_SONG).attr('content');

    if (previewSong) {
      await saveMp3({ trackId, previewSongUrl: previewSong });
    }

    const artworkUrl = $(POINTERS.ARTWORK).attr('src')!;
    if (artworkUrl) {
      await saveImage({ trackId, artworkUrl });
    }

    return {
      key: $(POINTERS.KEY).text(),
      bpm: Number($(POINTERS.BPM).text()),
      length: $(POINTERS.LENGTH).text(),
      released: $(POINTERS.RELEASED).text(),
      previewSong,
      artwork: $(POINTERS.ARTWORK).attr('src'),
      artists: trackArtists,
      label,
      genre,
    } as ITrack;
  },
};

const db = {
  saveTracks: async (tracks: ITrack[]) => {
    tracks.forEach(async (track: ITrack) => {
      const trackExists = await prisma.track.findUnique({
        where: {
          beatportTrackId: track.beatportTrackId,
        },
      });

      if (trackExists) {
        console.log('Track exist update', track.beatportTrackId);
        console.log(track.title);
        // build a string link to the track simple page on beatport
        const trackUrl = `${BEATPORT_URL}/track/${slug(track.title)}/${
          track.beatportTrackId
        }`;
        console.log(trackUrl);
        await prisma.track.update({
          where: {
            beatportTrackId: track.beatportTrackId,
          },
          data: {
            bpm: track.bpm,
            released: track.released,
            length: track.length,
            artwork: track.artwork,
            previewSong: track.previewSong,
            genre: {
              connectOrCreate: {
                where: {
                  beatportGenreId: track.genre.beatportGenreId,
                },
                create: {
                  name: track.genre.name,
                  beatportGenreId: track.genre.beatportGenreId,
                },
              },
            },

            // If track contain label beatport id update it
            ...(track.label.beatportLabelId && {
              label: {
                connectOrCreate: {
                  where: {
                    beatportLabelId: track.label.beatportLabelId,
                  },
                  create: {
                    name: track.label.name,
                    beatportLabelId: track.label.beatportLabelId,
                  },
                },
              },
            }),

            ...(track.artists.length && {
              artists: {
                connectOrCreate: track.artists.map((artist: any) => ({
                  where: {
                    beatportArtistId: artist.beatportArtistId,
                  },
                  create: {
                    name: artist.name,
                    beatportArtistId: artist.beatportArtistId,
                  },
                })),
              },
            }),
          },
        });
      } else {
        console.log('Track does not exist, create', track.beatportTrackId);

        try {
          await prisma.track.create({
            data: {
              title: track.title,
              key: track.key,
              beatportTrackId: track.beatportTrackId,
              bpm: track.bpm,
              released: track.released,
              length: track.length,
              artwork: track.artwork,
              previewSong: track.previewSong,
              genre: {
                connectOrCreate: {
                  where: {
                    beatportGenreId: track.genre.beatportGenreId,
                  },
                  create: {
                    name: track.genre.name,
                    beatportGenreId: track.genre.beatportGenreId,
                  },
                },
              },
              label: {
                connectOrCreate: {
                  where: {
                    beatportLabelId: track.label.beatportLabelId.toLowerCase(),
                  },
                  create: {
                    name: track.label.name,
                    beatportLabelId: track.label.beatportLabelId.toLowerCase(),
                  },
                },
              },
              artists: {
                connectOrCreate: track.artists.map((artist: any) => ({
                  where: {
                    beatportArtistId: artist.beatportArtistId,
                  },
                  create: {
                    name: artist.name,
                    beatportArtistId: artist.beatportArtistId,
                  },
                })),
              },
            },
          });
        } catch (error) {
          // return the error in a friendly format
          console.log(error);
        }
      }
    });
  },
};

async function scrap({ url, fileName }: IScrapProps) {
  if (fs.existsSync(`./scrap/cached/${fileName}.html`)) {
    return getFile(fileName);
  } else {
    const { body } = await gotScraping.get(url);
    writeFile(body, fileName, 'utf-8');
    return body;
  }
}

const scrapTracksList = async () => {
  const body = await scrap({
    url: getTracksURL({ page: CURRENT_PAGE, genre: CURRENT_GENRE }),
    fileName: `${FILE_NAME_TRACKS}.html`,
  });

  return body;
};

const scrapTrackPage = async (
  trackInput: Pick<Track, 'beatportTrackId' | 'title'>
): Promise<string> => {
  const body = await scrap({
    url: `${BEATPORT_URL}/track/${slug(trackInput.title)}/${
      trackInput.beatportTrackId
    }`,
    fileName: `track-${trackInput.beatportTrackId}.html`,
  });

  return body;
};

const getTracks = async () => {
  const tracksListBody = await scrapTracksList();
  const tracksData = await scrapper.getTracksFromList(tracksListBody);
  const tracks = await Promise.all(
    tracksData.map(async (trackData) => {
      const trackBody = await scrapTrackPage({
        title: trackData.title,
        beatportTrackId: trackData.beatportTrackId,
      });
      const trackDetail = await scrapper.getTrackDetails(trackBody);
      // console.log('$$$ trackDetail:', { trackDetail });
      const track = {
        ...trackData,
        ...trackDetail,
      };
      return track;
    })
  );
  return tracks as ITrack[];
};

const testSaveImage = async () => {
  saveImage({
    artworkUrl:
      'https://geo-media.beatport.com/image_size/1400x1400/0089dc3d-7b5f-489b-8c37-e682857ca810.jpg',
    trackId: '17435596',
  });
};

async function init() {
  const tracks = await getTracks();
  await db.saveTracks(tracks);

  //await testSaveImage();
}

init();
