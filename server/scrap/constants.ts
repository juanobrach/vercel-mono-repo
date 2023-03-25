export const POINTERS = {
  BPM: '.interior-track-bpm .value',
  GENRE: '.interior-track-genre .value  a',
  LENGTH: '.interior-track-length .value',
  RELEASED: '.interior-track-released .value',
  KEY: '.interior-track-key .value',
  PREVIEW_SONG: 'meta[name="twitter:player:stream"]',
  ARTWORK: 'img.interior-track-release-artwork',
  ARTISTS: '.interior-track-artists .value > a',
  LABEL: '.interior-track-labels .value a',
  TRACK_ID: '.interior-track-actions',
};

export const BEATPORT_URL = 'https://www.beatport.com';

export enum GENRES {
  NU_DISCO = 'nu-disco-disco',
  MINIMAL_DEEP_TECH = 'minimal-deep-tech',
  HOUSE = 'house',
  ELECTRONICA = 'electronica',
}

export const GENRES_IDS = {
  [GENRES.NU_DISCO]: 50,
  [GENRES.MINIMAL_DEEP_TECH]: 14,
  [GENRES.HOUSE]: 5,
  [GENRES.ELECTRONICA]: 3,
};
