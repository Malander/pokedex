import { PokemonData } from '../types/types';
import { ucFirst } from '../utils/utils';

export const badge = {
  render(pokemon: PokemonData) {
    return pokemon.types ? pokemon.types.map((pokemonType) => {
      return `<div class="poke-badge poke-badge--${pokemonType.type.name}">${ucFirst(pokemonType.type.name)}</div>`;
    }).join('') : '<div class="poke-badge poke-badge--empty"></div>';
  },
};