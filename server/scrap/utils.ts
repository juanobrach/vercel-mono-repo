import { BEATPORT_URL, GENRES } from './constants';
const _ = require('lodash');
const fs = require('fs');
/*
 * This function returns the URL to get the tracks from a specific genre.
 * ie https://www.beatport.com/genre/nu-disco-disco/50/tracks
 */
export const getTracksURL = ({
  page,
  genre = GENRES.NU_DISCO,
}: {
  page?: number;
  genre?: GENRES;
}): string => {
  const TRACKS_PER_PAGE = 50;
  return `${BEATPORT_URL}/genre/${genre}/${TRACKS_PER_PAGE}/tracks${
    page ? `?page=${page}` : ''
  }`;
};

export const writeFile = (body: string, fileName: string) => {
  return fs.writeFileSync(`./cached/${fileName}.html`, body ?? '', 'utf-8');
};

export const getFile = async (fileName: string) => {
  const file = await fs.readFileSync(`./cached/${fileName}.html`, {
    encoding: 'utf-8',
    flag: 'r',
  });
  return file;
};
