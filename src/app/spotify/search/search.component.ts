import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'ma-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private spotify: SpotifyService) {
    // console.log(spotify.version);
    this.search('batman');
  }

  ngOnInit() {
  }

  search(query: string) {
    this.spotify.searchAlbums(query)
      .subscribe(response => console.table(response, ['album_type', 'href']));
  }

}
