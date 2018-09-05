import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UpperPipe implements PipeTransform {

  transform(value: string, arg?: string): string {
    let domain = '@sec'
    if (arg) {
      domain = `@${arg}`
    }
    return value.toUpperCase() + domain;
  }

}
