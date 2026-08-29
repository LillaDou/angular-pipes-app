import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
    name: 'heroSortBy'
})

export class HeroSortByPipe implements PipeTransform {

//El sortBy se correspondería con los diferentes botones que tenemos: por nombre, por volar, por color y por creador. 
//Podríamos recibir cualquier propiedad de nuestra interface de Hero para usarlos como un filtro con la instrucción
//de TS de keyof. 
    transform(value: Hero[], sortBy: keyof Hero | null): Hero[] {

        if(!sortBy) return value; //Si no hay un filtro seleccionado, nos muestra todos nuestros héroes

        switch( sortBy ) {
            case 'name':
                return value.sort( (a, b) => a.name.localeCompare(b.name) );

            case 'canFly':
                return value.sort( (a, b) => (a.canFly ? 1 : -1) - (b.canFly ? 1 : -1) );

            case 'color':
                return value.sort( (a, b) => a.color - b.color );

            case 'creator':
                return value.sort( (a, b) => a.creator - b.creator )

            default:
                return value;
        }
        return []
    }
}