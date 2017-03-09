import {Route} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {SearchComponent} from './spotify/search/search.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'spotify', component: SearchComponent },
  { path: 'contact', component: ContactComponent }
];
