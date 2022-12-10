import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  log_in:boolean = true;
  check_in:boolean = false;
  messages:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  checkIn() {
    this.log_in = false;
    this.check_in = true;
  }
}
