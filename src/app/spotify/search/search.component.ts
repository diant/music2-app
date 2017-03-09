import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {IAlbum} from '../spotify.models';
import {BookmarksService} from '../../bookmarks/bookmarks.service';
import {IBookmark, BookmarkId} from '../../bookmarks/bookmarks.models';

@Component({
  selector: 'ma-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  albums: IAlbum[];

  constructor(private spotify: SpotifyService, private bs: BookmarksService) {
    this.search('iron maiden');
  }

  ngOnInit() {
  }

  search(query: string) {
    this.spotify.searchAlbums(query)
      .subscribe(albums => this.albums = albums);
  }

  getBookmarks(): IBookmark[] {
    return this.bs.getAll();
  }

  saveBookmark(album: IAlbum): void {
    // if (!this.bs.has(album.id)) {
      this.bs.add(album);
    // }
  }

  removeBookmark(id: BookmarkId) {
    this.bs.remove(id);
  }

  isBookmarked(album: IAlbum): boolean {
    return this.bs.has(album.id);
  }
}
