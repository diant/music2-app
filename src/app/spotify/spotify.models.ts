export interface IExternalUrls {
  spotify: string;
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
