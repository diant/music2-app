import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class SpotifyService {

  private apiBase = 'https://api.spotify.com/v1/';
  version = '1';

  constructor(http: Http) {
    // console.log('creating service instance');

    const apiUrl = `${this.apiBase}search?type=album&q=batman`;
    http.get(apiUrl).subscribe();
  }

}
