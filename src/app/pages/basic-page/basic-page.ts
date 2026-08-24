//! Los pipes permiten cambiar cómo se ve visualmente la información sin alterar la data original

import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './basic-page.html',
})
export default class BasicPage {

  localeService = inject(LocaleService);
  //Podemos utilizar el currentLocale del servicio, o podemos definirlo injectándolo del app.config.ts.
  //Esta versión es más engorrosa, por lo que es preferible utilizar el del servicio. 
  currentLocale = signal(inject( LOCALE_ID ));

  nameLower = signal('lilla');
  nameUpper = signal('LILLA');
  fullName = signal('LiLlA DOugHtY');

  customDate = signal( new Date() );

  tickingDateEffect = effect( (onCleanup) => {

    const interval = setInterval( () => {
      this.customDate.set(new Date() );
      console.log('tick');
    }, 1000);

    onCleanup( () => {
      clearInterval(interval)
    })

  });

  changeLocale(locale: AvailableLocale) {
    console.log({locale});
    this.localeService.changeLocale(locale);
  }

}
