import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from "../../SERVICES/api.service";
import {ApiPokemon, ResultPokemon} from "../../MODELS/ApiPokemon";
import {Pokemon} from "../../MODELS/Pokemon";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input()
  pokemones?:ResultPokemon[];

  @Output()
  pokemonSelected: EventEmitter<Pokemon>;

  constructor(private api:ApiService) {
    this.pokemonSelected = new EventEmitter();
  }

  ngOnInit(): void {

  }

  handleClickPokemon(url:string){
    this.api.getSinglePokemonByUrl(url).then((data)=>{
      // console.log(data);
      this.pokemonSelected.emit(data);
    });
  }
}
