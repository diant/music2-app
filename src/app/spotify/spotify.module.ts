import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SpotifyService } from './spotify.service';
import { SpotifyPosterComponent } from './spotify-poster/spotify-poster.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BookmarksModule} from '../bookmarks/bookmarks.module';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import {RouterModule} from '@angular/router';
import {AlbumDetailsResolver} from './album-details/album-details.resolver';
import {AlbumDetailsGuard} from './album-details/album-details.guard';
import { MsToMinutesPipe } from './ms-to-minutes.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BookmarksModule
  ],
  declarations: [
    SearchComponent,
    SpotifyPosterComponent,
    AlbumDetailsComponent,
    MsToMinutesPipe
  ],
  providers: [
    SpotifyService,
    AlbumDetailsResolver,
    AlbumDetailsGuard
  ]
})
export class SpotifyModule { }
