import { store } from '../store';
import { PokemonBase, PokemonData, SinglePokemonAPIResponse } from '../types/types';
import { formatNumberToHash, ucFirst } from '../utils/utils';

export const card = {
  loadPokemonCard(entry: IntersectionObserverEntry) {
    const elementTarget = entry.target as HTMLElement;
    const fetchUrl = elementTarget.dataset.fetchUrl!;
    fetch(fetchUrl).then(async (response) => {
      if (response.ok) {
        const singlePokemonData = await response.json() as SinglePokemonAPIResponse;
        const pokemonData: PokemonData = {
          name: ucFirst(singlePokemonData.name),
          url: fetchUrl,
          id: singlePokemonData.id,
          idString: formatNumberToHash(singlePokemonData.id),
          image: singlePokemonData.sprites.other['official-artwork'].front_default,
          stats: singlePokemonData.stats,
          order: singlePokemonData.order,
          types: singlePokemonData.types,
          loaded: true,
        };
        
        const updatedPokemons = store.state.pokemons.map((pokemon: PokemonBase) => {
          if (pokemon.url === fetchUrl) {
            return { ...pokemon, ...pokemonData };
          }
          return pokemon;
        });
        console.log('UPDATED CARD');
        store.update({ pokemons: updatedPokemons }, () => this.update(elementTarget, pokemonData) );
      } else {
        return Promise.reject(response);
      }
    }).catch((error) => {
      console.log(error);
    });
  },
  update(target, pokemon: PokemonData) {
    target.outerHTML = this.render(pokemon);
  },
  render(pokemon: PokemonData) {
    return `
      <div data-fetch-url="${pokemon.url}" data-loaded="${pokemon.loaded ? pokemon.loaded : false}" data-id="${pokemon.id ? pokemon.id : ''}" class="poke-card">
        <img alt="${pokemon.name} Artwork" width="150" height="150" class="poke-card__image" src="${pokemon.image ? pokemon.image : '/images/pikachu.png'}" />
        <h3 class="poke-card__name">${pokemon.name} <span>${pokemon.idString ? pokemon.idString : ''}</span></h3>
        <div class="poke-card__types">
          ${pokemon.types ? pokemon.types?.map((pokemonType: { type: { name: string; }; }) => {
    return `<div class="poke-badge poke-badge--${pokemonType.type.name}">${ucFirst(pokemonType.type.name)}</div>`;
  }).join('') : '<div class="poke-badge"></div><div class="poke-badge"></div>'}
        </div>
      </div>
    `;
  },
};