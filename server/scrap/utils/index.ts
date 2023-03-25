import { writeFile, getFile } from './files';
import { saveMp3 } from './audio';
import { BEATPORT_URL, GENRES, GENRES_IDS } from '../constants';
/*
 * This function returns the URL to get the tracks from a specific genre.
 * ie https://www.beatport.com/genre/nu-disco-disco/50/tracks
 */
const getTracksURL = ({
  page,
  genre = GENRES.NU_DISCO,
}: {
  page?: number;
  genre?: GENRES;
}): string => {
  return `${BEATPORT_URL}/genre/${genre}/${GENRES_IDS[genre]}/tracks${
    page ? `?page=${page}` : ''
  }`;
};

const slug = (name: string) => name.replace(/\s+/g, '-') || '';

export { writeFile, getFile, getTracksURL, saveMp3, slug };
