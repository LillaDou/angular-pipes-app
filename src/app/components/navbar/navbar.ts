import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink, RouterLinkActive
  ],
  templateUrl: './navbar.html',
})
export class Navbar {

  //arreglo de mis rutas para cambiar de forma dinámica
  routes = routes.map( (route) => ({
    title: route.title ?? '',
    path: route.path ?? '',
  }) );

}
