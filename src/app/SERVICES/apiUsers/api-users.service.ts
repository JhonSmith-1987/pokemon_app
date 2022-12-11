import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DTOCheckinUserPokemon} from "../../MODELS/DTOCheckinUserPokemon";

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {

  url:string = "localhost:3000/"
  user_pokemon: DTOCheckinUserPokemon | undefined;

  constructor(private http:HttpClient) { }

  async postUserPokemon(){
    return await this.http.post(this.url+'users', this.user_pokemon).toPromise()
  }
}
