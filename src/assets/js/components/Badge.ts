import { PokemonData } from '../types/types';
import { ucFirst } from '../utils/utils';

/**
 * A component for rendering badge elements for Pokemon types.
*/
export const Badge = {
  /**
   * Renders HTML badge elements based on the given Pokemon types.
   * 
   * @param pokemonTypes - Array of Pokemon types.
   * @returns - A string representation of the badge's HTML markup.
  */
  render(pokemonTypes: PokemonData['types']) {
    return pokemonTypes ? pokemonTypes.map((pokemonType) => {
      return `<div class="poke-badge poke-badge--${pokemonType.type.name}">${ucFirst(pokemonType.type.name)}</div>`;
    }).join('') : '<div class="poke-badge poke-badge--empty"></div>';
  },
};