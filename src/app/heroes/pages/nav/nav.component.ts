import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [
  ]
})
export class NavComponent {

  navItems = [
    {item:'Listado', url:['list'], icon:'list'},
    {item:'Crear heroe', url:['crear'], icon:'add'},
    {item:'Buscar', url:['buscar'], icon:'search'}
  ]

}
