import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // ng g(enerate) c(omponent) home
import {AppRoutingModule} from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import {SpotifyModule} from './spotify/spotify.module'; // ng g(enerate) m(odule) home

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SpotifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
