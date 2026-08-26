import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,

  ],
  templateUrl: './custom-page.html',
})
export default class CustomPage {

  name = signal('Lilla Doughty');

  upperCase = signal(true);

  heroes = signal(heroes)

}
