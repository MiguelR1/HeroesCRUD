import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/interfaces';

@Component({
  selector: 'app-heroe-page',
  templateUrl: './heroe-page.component.html',
  styles: [
  ]
})
export class HeroePageComponent implements OnInit {

  heroe?: Heroe;

  ngOnInit() {
    this.ar.params
    .pipe(
      switchMap( ({id}) => this.heroeS.getHeroeID(id) )
    )
    .subscribe( heroe => this.heroe = heroe)
  }

  regresar(){
    this.router.navigateByUrl('heroe/list');
  }


  constructor( private heroeS:HeroesService,
               private ar:ActivatedRoute,
               private router:Router ){}

}
