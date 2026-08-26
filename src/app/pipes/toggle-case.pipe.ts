import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggleCase' // Uso en el html: 'fernando' | toggleCase
})

//El PipeTransform nos va a permitir poder ejecturar el método de transform cada vez que 
//se ejecute o cambie la información de donde esté asociado el pipe
export class ToggleCasePipe implements PipeTransform {

    //El value es la información que le mandamos antes del pipe. 
    //Usando el ejemplo anterior de 'fernando' | toggleCase, el value se correspondería
    //con 'fernando'
    //
    transform(value: string, upper: boolean = true): string {
        return upper ? value.toUpperCase() : value.toLowerCase();
    }
}