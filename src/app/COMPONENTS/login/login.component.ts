import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  show_input_name:boolean = false;
  show_input_pass:boolean = false;
  log_in:boolean = true;
  check_in:boolean = false;
  show_message:boolean = true;
  placeholder_name:string = 'Ingresa tu correo';
  placeholder_password:string = 'Ingresa tu contraseña';
  messages:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  checkIn() {
    this.show_input_name = true;
    this.placeholder_name = 'Escribe tu correo'
    this.show_input_pass = true;
    this.placeholder_password = 'Escribe tu contraseña'
    this.log_in = false;
    this.check_in = true;
    this.show_message = false;
  }

  handleForm(form:any){
    let form_pokemon = form.value
    if (form_pokemon.password != form_pokemon.pass){
      this.messages = 'Contraseña no son iguales, verifica'
    }else{
      this.messages = ''
      console.log('estos son los datos del formulario');
      console.log(form_pokemon);
    }
  }
}
