import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {IAlbum} from './spotify.models';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class SpotifyService {

  private apiBase = 'https://api.spotify.com/v1/';
  version = '1';

  constructor(private http: Http) {
    // console.log('creating service instance');
  }

  searchAlbums(query: string): Observable<IAlbum[]> {
    const apiUrl = `${this.apiBase}search?type=album&q=${query}&limit=25`;
    return this.http.get(apiUrl)
                      .map(response => response.json().albums.items);
  }

}
