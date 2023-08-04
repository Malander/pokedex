import { PokemonBase, PokemonData } from '../types';
import { ucFirst } from '../utils/utils';

export const card = {
  render(pokemon: PokemonData | PokemonBase) {
    return `
      <div data-fetch-url="${pokemon.url}" data-id="${pokemon.id ? pokemon.id : ''}" class="poke-card">
        <img alt="${pokemon.name} Artwork" width="150" height="150" class="poke-card__image" src="${pokemon.image ? pokemon.image : '/images/pikachu.png'}" />
        <h3 class="poke-card__name">${pokemon.name} <span>${pokemon.idString ? pokemon.idString : ''}</span></h3>
        <div class="poke-card__types">
          ${pokemon.types?.map((pokemonType) => {
            return `<div class="poke-badge poke-badge--${pokemonType.type.name}">${ucFirst(pokemonType.type.name)}</div>`;
          }).join('')}
        </div>
      </div>
    `;
  },
};