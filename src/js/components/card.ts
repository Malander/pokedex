import { PokemonData } from "../types";
import { ucFirst } from "../utils/utils";

export const card = {
  render(pokemon: PokemonData) {
    return `
      <div data-id="${pokemon.id}" class="poke-card">
        <img width="150" class="poke-card__image" src="${pokemon.image}" />
        <h3 class="poke-card__name">${pokemon.name} <span>${pokemon.idString}</span></h3>
        <div class="poke-card__types">
          ${pokemon.types.map((pokemonType) => {
            return `<div class="poke-badge poke-badge--${pokemonType.type.name}">${ucFirst(pokemonType.type.name)}</div>`
          }).join('')}
        </div>
      </div>
    `
  }
}