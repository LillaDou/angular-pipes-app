import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/canFly.pipe';
import { HeroColourPipe } from '../../pipes/hero-colour.pipe';
import { HeroTextColourPipe } from '../../pipes/hero-text-colour.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColourPipe,
    HeroTextColourPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    HeroSortByPipe, 
    HeroFilterPipe
  ],
  templateUrl: './custom-page.html',
})
export default class CustomPage {

  name = signal('Lilla Doughty');

  upperCase = signal(true);

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null) //La señal va a ser algún valor de alguna llave que tenga el héroe o nulo

  searchQuery = signal('');

}
