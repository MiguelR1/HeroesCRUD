import { enviroments } from 'src/enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from './interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl:string = enviroments.baseUrl;

  //Usar esto ${} cuando es un valor que recibimos en la instruccion

  getHeroes(){
    return this.http.get<Heroe[]>(this.baseUrl+`heroes`);
  }

  getHeroeID(id:string):Observable<Heroe>{
    return this.http.get<Heroe>(this.baseUrl+`heroes/${id}`)
  }

  crearHeroe(heroe:Heroe){
    return this.http.post<Heroe>(this.baseUrl+`heroes`, heroe)
  }

  eliminarHeroe(id:string){
    return this.http.delete(this.baseUrl+`heroes/${id}`)
  }

  editHeroe(heroe:Heroe){
    return this.http.patch<Heroe>(this.baseUrl+`heroes/${heroe.id}`, heroe)
  }

  getSugerencias(q:string){
    return this.http.get<Heroe[]>(this.baseUrl+`heroes?q=${q}`)
  }

  constructor( private http:HttpClient ) { }
}
