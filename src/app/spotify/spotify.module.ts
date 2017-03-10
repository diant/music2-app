import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SpotifyService } from './spotify.service';
import { SpotifyPosterComponent } from './spotify-poster/spotify-poster.component';
import { FormsModule } from '@angular/forms';
import {BookmarksModule} from '../bookmarks/bookmarks.module';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import {RouterModule} from '@angular/router';
import {AlbumDetailsResolver} from './album-details/album-details.resolver';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BookmarksModule
  ],
  declarations: [
    SearchComponent,
    SpotifyPosterComponent,
    AlbumDetailsComponent
  ],
  providers: [
    SpotifyService,
    AlbumDetailsResolver
  ]
})
export class SpotifyModule { }
