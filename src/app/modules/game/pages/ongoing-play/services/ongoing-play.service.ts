import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { PokemonDTO } from '../model/pokemon-dto';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PokemonDbDTO } from '../model/pokemon-db-dto';
import { map, tap } from 'rxjs/operators';
import { PokemonGenerationsConst } from '../../../shared/const/pokemon-generations.const';
import { PokemonGeneration } from '../../../shared/models/pokemon-generation';
import { RandomizingUtils } from '../../../../../shared/utils/randomizing-utils';

@Injectable()
export class OngoingPlayService {

  pokemonResult$: BehaviorSubject<PokemonDTO> = new BehaviorSubject<PokemonDTO>(null);

  private readonly GET_POKEMON = (id: number) => `/pokemon/${id}`;

  constructor(private httpClient: HttpClient) {}

  retrievePokemon(): void {
    const generation: PokemonGeneration = RandomizingUtils.getRandomArrayElement(this.mockedCachedGenerations());
    const pokemonId: number = RandomizingUtils.getRandomNumberFromRange(generation.firstPokemonId, generation.lastPokemonId);
    this.getPokemonFromAPI(pokemonId)
      .pipe(
        tap((pokemon: PokemonDTO) => this.pokemonResult$.next(pokemon))
      )
      .subscribe();
  }

  private getPokemonFromAPI(id: number): Observable<PokemonDTO> {
    const url = environment.url + this.GET_POKEMON(id);
    return this.httpClient.get<PokemonDbDTO>(url)
      .pipe(
        map((pokemon: PokemonDbDTO) => new PokemonDTO(pokemon.name,
          pokemon.sprites.other['official-artwork'].front_default))
      );
  }

  private mockedCachedGenerations(): PokemonGeneration[] {
    return PokemonGenerationsConst.GENERATIONS;
  }
}
