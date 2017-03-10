import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AlbumDetailsGuard implements CanActivate {

  constructor(private router: Router){

  }

  canActivate() {
    const answer = prompt('Are you logged in?');
    if (answer === 'yes' || answer === 'y') {
      return true;
    }
    else {
      this.router.navigateByUrl('/');
    }
  }

}
