import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../heroes.service';
import { Heroe } from '../../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit{

  public heroes: Heroe[] = [];



  getHeroes(){
    this.heroesS.getHeroes()
      .subscribe( heroes => {this.heroes = heroes} )
  }

  ver(id:string){
    this.heroesS.getHeroeID(id).subscribe( heroe => console.log(heroe)
    )
  }

  borrar(id:string){
    this.heroesS.eliminarHeroe(id).subscribe( () => {}
    )
    window.location.reload()
  }

  constructor( private heroesS:HeroesService,
               private router:Router ){}

  ngOnInit() {
    this.getHeroes();
  }

}
