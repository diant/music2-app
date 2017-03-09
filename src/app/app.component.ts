import { Component } from '@angular/core';

@Component({
  selector: 'ma-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'This is my new music app!';

  handleClick(e: MouseEvent) {
    this.title += '...' + e.pageX;
  }

  handleTime(time: number) {
    console.log(time);
  }
}
