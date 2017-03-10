export interface IExternalUrls {
  spotify: string;
  [serviceName: string]: string;
}

export interface IArtist {
  external_urls: IExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface IImage {
  height: number;
  url: string;
  width: number;
}

export interface IAlbum {
  album_type: string;
  artists: IArtist[];
  available_markets: string[];
  external_urls: IExternalUrls;
  href: string;
  id: string;
  images: IImage[];
  name: string;
  type: string;
  uri: string;
}

export interface IArtist {
  external_urls: IExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ICopyright {
  text: string;
  type: string;
}

export interface IExternalIds {
  upc: string;
}

export interface ITrack {
  artists: IArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: IExternalUrls;
  href: string;
  id: string;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface ITracks {
  href: string;
  items: ITrack[];
  limit: number;
  next?: any;
  offset: number;
  previous?: any;
  total: number;
}

export interface IAlbumDetails {
  album_type: string;
  artists: IArtist[];
  available_markets: string[];
  copyrights: ICopyright[];
  external_ids: IExternalIds;
  external_urls: IExternalUrls;
  genres: any[];
  href: string;
  id: string;
  images: IImage[];
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: string;
  tracks: ITracks;
  type: string;
  uri: string;
}
