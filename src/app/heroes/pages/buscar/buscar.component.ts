import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Heroe } from '../../interfaces/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {

  mySug = new FormControl('');

  options: Heroe[] = [];

  heroeSeleccion?: Heroe;

  ngOnInit() {}

  getOpciones(){

    const q = this.mySug.value;

    if (!q) return;

    this.heroeS.getSugerencias(q)
      .subscribe( sug => this.options = sug )
  }

  optionSelect(option:MatAutocompleteSelectedEvent){
    const value = option.option.value;

    if (!value) {
      return this.heroeSeleccion = undefined
    }

    this.heroeSeleccion = value
    return this.mySug.setValue(value.superhero);

  }

  constructor( private heroeS:HeroesService,
    private router:Router,
    private ar:ActivatedRoute ){}


}


