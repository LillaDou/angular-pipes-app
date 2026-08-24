import { Injectable, signal } from '@angular/core';


export type AvailableLocale = 'es'|'hu'|'en';

@Injectable({providedIn: 'root'})
export class LocaleService {
    
    private currentLocale = signal<AvailableLocale>('es'); //Valor por defecto: español

    constructor() {
        this.currentLocale.set(
            (localStorage.getItem('locale') as AvailableLocale) ?? 'es'
        )
        //recoge el locale guardado en el localStorage
    }

    get getLocale() {
        return this.currentLocale();
    };

    changeLocale(locale: AvailableLocale) {
        localStorage.setItem('locale', locale);//guardamos en el localStorage
        this.currentLocale.set(locale);
        window.location.reload();//recarga la página para actualizar los datos
    }
}