import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../spotify.service';
import {IAlbumDetails} from '../spotify.models';

export interface IAlbumDetailsParams {
  id: string;
}

@Component({
  selector: 'ma-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  album: IAlbumDetails;

  constructor(route: ActivatedRoute/*, spotify: SpotifyService*/) {
    this.album = route.snapshot.data['data'];

    // route.params.subscribe(params => console.log(params));
    // console.log((<IAlbumDetailsParams>route.snapshot.params).id);   // SAME
    // console.log((route.snapshot.params as IAlbumDetailsParams).id);  // SAME
    // console.log(route.snapshot.data);
    /*
    ** We will have the object from the resolver!
    *
    const albumId = (route.snapshot.params as IAlbumDetailsParams).id;
    spotify.getAlbum(albumId).subscribe(album => this.album = album);
    */
  }

  ngOnInit() {

  }

}
