import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToMinutes'
})
export class MsToMinutesPipe implements PipeTransform {

  transform(ms: number = 0, showSuffix: boolean = false): string {
    return Math.floor(ms / 60000).toString() + (showSuffix ? ' min' : '');
  }

}
