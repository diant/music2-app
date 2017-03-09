import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import {SpotifyService} from './spotify.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SearchComponent
  ],
  providers: [
    SpotifyService
  ]
})
export class SpotifyModule { }
