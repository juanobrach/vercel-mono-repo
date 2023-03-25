import { Artist, Genre, Label, Track } from '../generated/client';

export interface IScrapProps {
  url: string;
  fileName: string;
}

// Write a type for tracks included all their relations
export type ITrack = Track & {
  genre: Genre;
  label: Label;
  artists: Artist[];
};
