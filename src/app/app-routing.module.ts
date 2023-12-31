import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: 'heroe',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),

  },
  { path:'404', component:ErrorComponent },
  { path:'', redirectTo: 'heroe', pathMatch: 'full' },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
