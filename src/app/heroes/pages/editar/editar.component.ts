import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../heroes.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Heroe, Publisher } from '../../interfaces/interfaces';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [
  ]
})
export class EditarComponent implements OnInit {

  get heroe(){
    return this.heroeForm.value as Heroe
  }

  heroeForm = new FormGroup ({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>(''),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    img: new FormControl('')
  });

  public comic = [
    { id: 'Marvel Comics', name: 'Marvel' },
    { id: 'DC Comics', name: 'DC' }
  ];

  constructor( private heroeS:HeroesService,
               private router:Router,
               private ar:ActivatedRoute ){}

  ngOnInit() {

    this.ar.params.pipe(
      switchMap( ({id}) => this.heroeS.getHeroeID(id) )
    ).subscribe( heroe => this.heroeForm.reset(heroe))
  }

  guardar(){
    if (this.heroeForm.invalid) return
    this.heroeS.editHeroe(this.heroe).subscribe(
      {}
    )
    this.router.navigateByUrl('heroe/list')
  }
}

