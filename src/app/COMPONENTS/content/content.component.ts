import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../MODELS/Pokemon";
import {ApiService} from "../../SERVICES/api.service";
import {ApiPokemon, ResultPokemon} from "../../MODELS/ApiPokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  imagen_fondo: boolean = true;
  table_list: boolean = false;
  card: boolean = false;
  selected_pokemon?: Pokemon;
  pokemon: any;
  pokemones?:ResultPokemon[];
  table_pokemones?:ResultPokemon[];
  name_user:string | null = "";


  constructor(private api:ApiService,
              private router:Router) {

  }

  ngOnInit(): void {
    let is_logged = sessionStorage.getItem("is_logged");
    if ( is_logged == null){
      this.router.navigate(["/login"]);
    }
    this.api.getAllPokemonName().then((result) => {
      this.pokemones = result?.results;
      this.table_pokemones = this.pokemones;
      console.log(this.pokemones);
    });
    this.name_user = sessionStorage.getItem("name_user");
  }

  showTable() {
    if(this.imagen_fondo || !this.table_list || this.card){
      this.imagen_fondo = false;
      this.table_list = true;
      this.card = false;
    }
  }

  returnHome() {
    if(!this.imagen_fondo || this.table_list || this.card){
      this.imagen_fondo = true;
      this.table_list = false;
      this.card = false;
    }
  }

  handlePokemonSelected(pokemon: Pokemon) {
    console.log(pokemon);
    this.card = true;
    this.table_list = false;
    this.selected_pokemon = pokemon;
  }

  handleChange(event: any) {
    this.showTable();
    this.filtrarPokemon(event.target.value);
    if(event.target.value == ""){
      this.table_pokemones = this.pokemones;
    }else{
      this.table_pokemones = this.filtrarPokemon(event.target.value);
    }
  }

  filtrarPokemon(busqueda: string) {
    let result_pokemones = this.pokemones?.filter((pokemon)=>pokemon.name.includes(busqueda));
    console.log(result_pokemones);
    return result_pokemones;
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }
}
