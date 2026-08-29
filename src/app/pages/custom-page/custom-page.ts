import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/canFly.pipe';
import { HeroColourPipe } from '../../pipes/hero-colour.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColourPipe
  ],
  templateUrl: './custom-page.html',
})
export default class CustomPage {

  name = signal('Lilla Doughty');

  upperCase = signal(true);

  heroes = signal(heroes)

}
