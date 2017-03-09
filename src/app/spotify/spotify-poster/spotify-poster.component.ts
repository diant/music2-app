import {Component, OnInit, Input} from '@angular/core';
import {IAlbum} from '../spotify.models';

enum Size {
  lg,
  md,
  sm
}

@Component({
  selector: 'ma-spotify-poster',
  templateUrl: './spotify-poster.component.html',
  styleUrls: ['./spotify-poster.component.scss']
})
export class SpotifyPosterComponent implements OnInit {

  @Input() album: IAlbum;
  @Input() size: string;

  imageUrl: string;

  ngOnInit() {
    console.log(this.size);
    const sizeIndex = Size[this.size];
    this.imageUrl = this.album.images[sizeIndex].url;
  }

}
