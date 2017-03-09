import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {IAlbum} from '../spotify.models';

@Component({
  selector: 'ma-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  albums: IAlbum[];

  constructor(private spotify: SpotifyService) {
    // console.log(spotify.version);
    this.search('batman');
  }

  ngOnInit() {
  }

  search(query: string) {
    this.spotify.searchAlbums(query)
      .subscribe(albums => this.albums = albums);
  }

}
