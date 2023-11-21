import { Pipe, type PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/interfaces';

@Pipe({
  name: 'imagenPipe'
})
export class imagenPipe implements PipeTransform {

  transform(heroe:Heroe): string {

    if (!heroe.id && !heroe.img) {
      return 'assets/no-image.png';
    }

    if (heroe.img) {
      return heroe.img;
    }

   return `assets/heroes/${heroe.id}.jpg`;
  }

}
