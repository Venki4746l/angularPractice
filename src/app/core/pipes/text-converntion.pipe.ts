import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textConverntion',
})
export class TextConverntionPipe implements PipeTransform {
  transform(value: any): any {
    return value.toLowerCase();
  }
}
