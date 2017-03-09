import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ma-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    // route.params.subscribe(params => console.log(params));
    console.log(route.snapshot.params);
  }

  ngOnInit() {
  }

}
