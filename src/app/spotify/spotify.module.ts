import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SpotifyService } from './spotify.service';
import { SpotifyPosterComponent } from './spotify-poster/spotify-poster.component';
import { FormsModule } from '@angular/forms';
import {BookmarksModule} from '../bookmarks/bookmarks.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BookmarksModule
  ],
  declarations: [
    SearchComponent,
    SpotifyPosterComponent
  ],
  providers: [
    SpotifyService
  ]
})
export class SpotifyModule { }
