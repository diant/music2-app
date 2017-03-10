import {Route} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {SearchComponent} from './spotify/search/search.component';
import {AlbumDetailsComponent} from './spotify/album-details/album-details.component';
import {AlbumDetailsResolver} from './spotify/album-details/album-details.resolver';
import {AlbumDetailsGuard} from './spotify/album-details/album-details.guard';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'spotify', component: SearchComponent },
  {
    path: 'spotify/:id',
    component: AlbumDetailsComponent,
    resolve: {
      data: AlbumDetailsResolver
    }// ,
    // canActivate: [AlbumDetailsGuard]
  },
  { path: 'contact', component: ContactComponent }
];
