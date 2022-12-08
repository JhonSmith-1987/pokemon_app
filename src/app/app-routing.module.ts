import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableComponent} from "./COMPONENTS/table/table.component";
import {ContentComponent} from "./COMPONENTS/content/content.component";

const routes: Routes = [
  { path: 'home', component: ContentComponent },
  { path: '', redirectTo: '/home', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
