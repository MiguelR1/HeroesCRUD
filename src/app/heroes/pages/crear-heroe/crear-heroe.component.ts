import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HeroesService } from '../../heroes.service';
import { Heroe } from '../../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-heroe',
  templateUrl: './crear-heroe.component.html',
  styles: [
  ]
})
export class CrearHeroeComponent {

  get heroe(){
    return this.heroeForm.value as Heroe;
  }

  heroeForm = new FormGroup ({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>(''),
    publisher: new FormControl<string>(''),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    img: new FormControl('')

  })

  guardar(){
    if(this.heroeForm.invalid) return
    else{

      this.heroeS.crearHeroe(this.heroe).subscribe(
        {}
        );
        this.router.navigateByUrl('heroe/list');
    }
  }

  constructor( private heroeS:HeroesService,
               private router:Router ){}
}
