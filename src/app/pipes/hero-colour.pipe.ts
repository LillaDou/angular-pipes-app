import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';


@Pipe({
    name: 'heroColour'
})

export class HeroColourPipe implements PipeTransform {
    transform(value: Color): string {
        return Color[value]
    }
}