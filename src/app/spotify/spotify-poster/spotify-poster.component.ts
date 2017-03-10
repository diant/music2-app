import {Component, OnInit, Input, OnChanges, ChangeDetectionStrategy} from '@angular/core';
import {IAlbum} from '../spotify.models';
import * as _ from 'lodash';

enum Size {
  lg,
  md,
  sm
}

@Component({
  selector: 'ma-spotify-poster',
  templateUrl: './spotify-poster.component.html',
  styleUrls: ['./spotify-poster.component.scss'],
  // encapsulation: ViewEncapsulatation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpotifyPosterComponent implements OnInit, OnChanges {

  @Input() album: IAlbum;
  @Input() size: string;

  imageUrl: string;

  ngOnInit() {

  }

  ngOnChanges() {
    // console.log(this.size);
    const sizeIndex = Size[this.size];
    const placeholder = 'http://www.stolenimages.co.uk/components/com_easyblog/themes/wireframe/images/placeholder-image.png';
    this.imageUrl = _.get(this.album, `images[${sizeIndex}].url`, placeholder);
  }

}
