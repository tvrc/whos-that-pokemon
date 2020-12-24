export class PokemonDbDTO {
  name?: string;
  sprites?: {
    other?: {
      'official-artwork'?: {
        front_default?: string;
      }
    }
  };
}
