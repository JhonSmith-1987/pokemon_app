import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validator, Validators} from "@angular/forms";
import {ApiUsersService} from "../../SERVICES/apiUsers/api-users.service";
import {DTOCheckinUserPokemon} from "../../MODELS/DTOCheckinUserPokemon";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  log_in:boolean = true;
  check_in:boolean = false;
  messages:string = '';

  constructor( private apiUsersPokemon:ApiUsersService ) {  }

  ngOnInit(): void {
  }



  checkIn() {
    this.log_in = false;
    this.check_in = true;
  }

  handleForm(form:any){
    let form_pokemon = form.value
    if (form_pokemon.password != form_pokemon.pass){
      this.messages = 'Contraseña no son iguales, verifica'
    }else{
      this.messages = ''
      let checkin_pokemon:DTOCheckinUserPokemon = {
        'Name' : form_pokemon.name,
        'Email' : form_pokemon.email.toString(),
        'Password' : form_pokemon.password
      }
      this.apiUsersPokemon.postUserPokemon(checkin_pokemon);
      console.log('se guardo correctamente el usuario');
      console.log(checkin_pokemon);
    }
  }
}
