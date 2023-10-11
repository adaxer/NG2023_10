import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUpper'
})
export class ToUpperPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let invalue: string = value;
    return value.toLocaleUpperCase();
  }

}
