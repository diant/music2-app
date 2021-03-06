import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {IAlbum, IAlbumDetails} from './spotify.models';

@Injectable()
export class SpotifyService {

  private apiBase = 'https://api.spotify.com/v1/';
  version = '1';

  constructor(private http: Http) {
    // console.log('creating service instance');
  }

  searchAlbums(query: string): Observable<IAlbum[]> {
    // if(!query) {
    //  return Observable.of([]);
    // }

    const apiUrl = `${this.apiBase}search?type=album&q=${query}`;
    return this.http.get(apiUrl)
                      .map(response => response.json().albums.items);
  }

  getAlbum(albumId: string): Observable<IAlbumDetails> {
    const apiUrl = `${this.apiBase}albums/${albumId}`;
    return this.http.get(apiUrl)
      .map(response => response.json());
  }
}
