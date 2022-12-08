export interface ApiPokemon {
  count:    number;
  next:     string;
  previous: string;
  results:  ResultPokemon[];
}

export interface ResultPokemon {
  name: string;
  url:  string;
}


