import { PokemonDTO } from './pokemon-dto';

export class CachedPokemons {
  [pokemonNumber: string]: PokemonDTO;
}
