import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiService} from "./SERVICES/api.service";
import { TableComponent } from './COMPONENTS/table/table.component';
import {HttpClientModule} from "@angular/common/http";
import { ContentComponent } from './COMPONENTS/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './COMPONENTS/login/login.component';
import {ApiUsersService} from "./SERVICES/apiUsers/api-users.service";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ContentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    ApiUsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
