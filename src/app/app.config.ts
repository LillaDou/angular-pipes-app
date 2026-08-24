import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import { LocaleService } from './services/locale.service';



//Para tener la aplicación en diferentes idiomas, mandamos a llamar la función de registerLocaleData,
//cuyos argumentos serán el nombre de la importación que hemos hecho (localeEs o localeHu) + el código del idioma
//que necesitamos ('es', 'hu'...). Después, añadimos el provide y el userValue con el código del idioma en el appConfig

import localeEs from "@angular/common/locales/es";
import localeHu from "@angular/common/locales/hu";


registerLocaleData(localeEs, 'es');
registerLocaleData(localeHu, 'hu');


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    {
      //Necesitamos hacer esto de forma dinámica 
      provide: LOCALE_ID,
      // useValue: 'hu',
      deps: [LocaleService], //dependencia
      useFactory: (localeService: LocaleService) => localeService.getLocale,
      //useFactory será la función que se disparará cuando el proveedor se esté inicializando
    }
  ]
};
