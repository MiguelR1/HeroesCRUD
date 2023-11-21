import { NgModule } from '@angular/core';
import { AmaterialModule } from './amaterial/amaterial.module';
import { ListComponent } from './pages/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NavComponent } from './pages/nav/nav.component';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroePageComponent } from './pages/heroe-page/heroe-page.component';
import { CrearHeroeComponent } from './pages/crear-heroe/crear-heroe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { imagenPipe } from './pipe/Imagen.pipe';
import { EditarComponent } from './pages/editar/editar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';



@NgModule({
  declarations: [
    ListComponent,
    NavComponent,
    HeroePageComponent,
    CrearHeroeComponent,
    imagenPipe,
    EditarComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    RouterModule,
    AmaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
