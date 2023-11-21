import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { NavComponent } from './pages/nav/nav.component';
import { HeroePageComponent } from './pages/heroe-page/heroe-page.component';
import { CrearHeroeComponent } from './pages/crear-heroe/crear-heroe.component';
import { EditarComponent } from './pages/editar/editar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

const routes: Routes = [

  { path: '',
    component: NavComponent,
    children: [
    { path: 'list', component: ListComponent },
    { path: 'ver/:id', component: HeroePageComponent },
    { path: 'crear', component: CrearHeroeComponent},
    { path: 'editar/:id', component:EditarComponent },
    { path:'buscar', component: BuscarComponent },
    { path: '**', redirectTo: 'list' }
    ]
  }


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
