import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { I18nSelectPipe } from '@angular/common';


const client1 = {
  name: 'Stefan',
  gender: 'male',
  age: 32,
  address: 'San Fernando, Spain'
};

const client2 = {
  name: 'Lilla',
  gender: 'female',
  age: 28,
  address: 'Firgas, Spain'
}


@Component({
  selector: 'app-uncommon-page',
  imports: [
    Card,
    I18nSelectPipe
  ],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {

  //i18n Select Pipe - internacionalización
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient() {
    if( this.client() === client1 ) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }


}
