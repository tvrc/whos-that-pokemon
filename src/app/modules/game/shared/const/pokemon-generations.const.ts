import { PokemonGeneration } from '../models/pokemon-generation';

export class PokemonGenerationsConst {
  static readonly GENERATIONS: PokemonGeneration[] = [
    {
      firstPokemonId: 1,
      lastPokemonId: 151
    },
    {
      firstPokemonId: 152,
      lastPokemonId: 251
    },
  ];
}
