import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, length?: number): string {
    let count:number = (length) ? length : 50;
    if(value.length >count)
      return value.substring(0,count) + "...";
    else
      return value + "...";
  }

}
