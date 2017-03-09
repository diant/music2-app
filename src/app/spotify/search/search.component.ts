import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'ma-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(spotify: SpotifyService) {
    // console.log(spotify.version);
  }

  ngOnInit() {
  }

}
