import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';


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
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe
  ],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {

  //i18nSelect Pipe - internacionalización
  //Aquí lo hemos usado para cambiar la palabra 'invitarlo/a' en base al género al presionar el botón
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

  //i18n Plural Pipe - funciona cuando tenemos varios datos/colecciones de valores/diferentes elementos

  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando'
  })

  clients = signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Melissa',
    'Natalia',
    'Andrea',
    'Juan',
    'Carlos',
  ]);

  deleteClient(){
    this.clients.update( prev => prev.slice(1) );
  }

  //KeyValuePipe - 
  profile = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada',
  }

  //Async Pipe 
  promiseValue: Promise<string> = new Promise( (resolve, reject) => {

    setTimeout(() => {
      // reject('Tenemos un error en la data')
      resolve('Tenemos data en la promesa');
      console.log('Promesa finalizada')
    }, 3500);

  } );

  myObservableTimer = interval(2000).pipe(
    map( (value) => value + 1 ),
  )


}
