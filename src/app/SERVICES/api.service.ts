import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import {ApiPokemon} from '../MODELS/ApiPokemon';
import {Pokemon} from "../MODELS/Pokemon";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://pokeapi.co/api/v2/pokemon?limit=1000002111111111111111111111111111111111111111111111111111111111111&offset=0";

  constructor(
    private http:HttpClient
  ) { }

  async getAllPokemonName() {
    return await this.http.get<ApiPokemon>(this.url).toPromise();
  }

  async getSinglePokemonByUrl(url:string){
    return await this.http.get<Pokemon>(url).toPromise();
  }
}
