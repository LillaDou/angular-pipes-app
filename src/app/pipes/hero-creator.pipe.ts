import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
    name: 'heroCreator'
})

export class HeroCreatorPipe implements PipeTransform {
    transform(value: Creator ): string {

        // return Creator[value] --> También funciona, pero debajo está la solución de Fernando
        return value === Creator.DC ? 'DC' : 'Marvel'

    }
}