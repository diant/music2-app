import { Injectable } from '@angular/core';
import {IBookmark, BookmarkId} from './bookmarks.models';
import * as _ from 'lodash';

@Injectable()
export class BookmarksService {

  private bookmarks: IBookmark[] = [];

  constructor() { }

  getAll(): IBookmark[] {
    return [...this.bookmarks]; // return new array and not a reference to our private var
  }

  add(item: IBookmark): void {
    if (item) {
      this.bookmarks.push(item);
    }
  }

  remove(id: BookmarkId): void {
    this.bookmarks = this.bookmarks.filter(item => item.id !== id);
  }

  has(id: BookmarkId): boolean {
    return this.bookmarks.some(item => item.id === id);
  }

}
