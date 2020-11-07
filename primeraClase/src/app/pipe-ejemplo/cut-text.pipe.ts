import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {
  private defaultLength: number = 10;

  // Pipe para cortar los textos cuando sean de cierto tamano
  transform(value: any, args?: any, p?: any): any {
    this.defaultLength = args ? args : this.defaultLength;
    return value.toString().length > this.defaultLength ? value.toString().substr(0, this.defaultLength) + '...' : value;
  }
}
