import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DTOCheckinUserPokemon} from "../../MODELS/DTOCheckinUserPokemon";
import {DTOLoginUserPokemon} from "../../MODELS/DTOLoginUserPokemon";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {

  url:string = "/api/";

  constructor(private http:HttpClient) { }

  async postUserPoksemon(checkin_pokemon:DTOCheckinUserPokemon){
    const headers = new HttpHeaders({
      "Content-Type" : "application/json",
    })
    try{
      let data = await this.http.post(this.url + "users", checkin_pokemon,{headers:headers}).toPromise();
      console.log(data);
    }catch (e) {
      console.log(e);
    }
    return null;
  }

  async postLoginUser(login_user:DTOLoginUserPokemon){
    const headers = new HttpHeaders({
      "Content-Type" : "application/json",
    })
    try{
      let data = await this.http.post(this.url + "loginUser", login_user,{headers:headers}).toPromise();
      return data;
    }catch (e) {
      return e;
    }
  }
}
