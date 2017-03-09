import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {IAlbum} from '../spotify.models';
import {BookmarksService} from '../../bookmarks/bookmarks.service';

@Component({
  selector: 'ma-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  albums: IAlbum[];

  constructor(private spotify: SpotifyService, private bs: BookmarksService) {
    // console.log(spotify.version);
    this.search('iron maiden');
  }

  ngOnInit() {
  }

  search(query: string) {
    this.spotify.searchAlbums(query)
      .subscribe(albums => this.albums = albums);
  }

  getBookmarks() {
    this.bs.getAll();
  }

  saveBookmark(album: IAlbum) {
    // if (!this.bs.has(album.id)) {
      this.bs.add(album);
    // }
  }

}
