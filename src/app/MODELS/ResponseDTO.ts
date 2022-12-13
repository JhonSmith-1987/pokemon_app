import {DTOCheckinUserPokemon} from "./DTOCheckinUserPokemon";

export interface User {
  ID: number;
  CreadoEn: Date;
  ActualizadoEn: Date;
  DeletedAt ?: any;
  name: string;
  email: string;
  password: string;
}

export interface ResponseDTO {
  error: string,
  respose: User
}
