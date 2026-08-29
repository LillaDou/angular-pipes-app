import { Pipe, type PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroTextColour',
})
export class HeroTextColourPipe implements PipeTransform {
  transform(value: Color): string {
    return ColorMap[value];
  }
}
