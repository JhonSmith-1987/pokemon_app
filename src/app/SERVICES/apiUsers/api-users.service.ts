import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DTOCheckinUserPokemon} from "../../MODELS/DTOCheckinUserPokemon";

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {

  url:string = "/api/users";

  constructor(private http:HttpClient) { }

  async postUserPokemon(checkin_pokemon:DTOCheckinUserPokemon){
    const headers = new HttpHeaders({
      "Content-Type" : "application/json",
    })
    try{
      let data = await this.http.post(this.url, checkin_pokemon,{headers:headers}).toPromise();
      console.log(data);
    }catch (e) {
      console.log(e);
    }
    return null;
  }
}
