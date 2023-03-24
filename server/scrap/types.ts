export interface ITrack {
  title?: string;
  remixed?: string;
  beatportTrackId?: string;
  key?: string;
  genre?: IGenre;
  preview_song?: string;
  length?: string;
  released?: string;
  artist?: IArtist;
  label?: ILabel;
  bpm?: string;
}

interface IArtist {
  name: string;
  tracks: ITrack[];
}

interface ILabel {
  name: string;
  beatportLabelId: string;
  tracks?: ITrack[];
}

interface IGenre {
  name: string;
  beatportGenreId: string;
  tracks?: ITrack[];
}
