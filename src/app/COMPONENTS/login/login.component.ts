import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validator, Validators} from "@angular/forms";
import {ApiUsersService} from "../../SERVICES/apiUsers/api-users.service";
import {DTOCheckinUserPokemon} from "../../MODELS/DTOCheckinUserPokemon";
import {HttpHeaders} from "@angular/common/http";
import {DTOLoginUserPokemon} from "../../MODELS/DTOLoginUserPokemon";
import {ResponseDTO} from "../../MODELS/ResponseDTO";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  log_in:boolean = true;
  check_in:boolean = false;
  messages:string = '';

  constructor( private apiUsersPokemon:ApiUsersService,
               private router:Router) {  }

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
      this.apiUsersPokemon.postUserPoksemon(checkin_pokemon);
      this.log_in = true;
      this.check_in = false;
      this.messages = "Usuario " + checkin_pokemon.Email + " creado correctamente"
    }
  }
  handleLoginUser(form:any){
    let login_user:DTOLoginUserPokemon = {
      'email' : form.value.login_email,
      'password' : form.value.login_password
    }
    this.apiUsersPokemon.postLoginUser(login_user).then((data)=>{
      let respose:ResponseDTO = data as ResponseDTO;
      console.log(respose);
      if (respose.error != ""){
        this.messages = respose.error
      }else {
        sessionStorage.setItem("name_user", respose.respose.name)
        sessionStorage.setItem("is_logged", "ok")
        this.router.navigate(["/home"])
      }
    });
  }
}
