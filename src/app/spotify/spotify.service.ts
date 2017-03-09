import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SpotifyService {

  private apiBase = 'https://api.spotify.com/v1/';
  version = '1';

  constructor(private http: Http) {
    // console.log('creating service instance');
  }

  searchAlbums(query: string): Observable<any> {
    const apiUrl = `${this.apiBase}search?type=album&q=${query}`;
    return this.http.get(apiUrl);
  }

}
