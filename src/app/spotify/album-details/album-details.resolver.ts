import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {IAlbumDetails} from '../spotify.models';
import {Observable} from 'rxjs/Observable';
import {SpotifyService} from '../spotify.service';
import {Injectable} from '@angular/core';

@Injectable()
export class  AlbumDetailsResolver implements Resolve<IAlbumDetails> {

  constructor(private spotify: SpotifyService) {

  }

  resolve(route: ActivatedRouteSnapshot): Observable<IAlbumDetails> {
    return this.spotify.getAlbum(route.params['id']);
  }
}
