import { getPokemonData } from '../api/api';
import { store } from '../store';
import { PokemonData } from '../types/types';
import { formatNumberToHash, ucFirst } from '../utils/utils';
import { badge } from './badge';
import { errorMessage } from './error';

export const card = {
  /**
   * Loads Pokemon card data for an intersecting element and updates the store.
   *
   * @param {IntersectionObserverEntry} entry - The intersection observer entry for the target element.
  */
  loadPokemonCard(entry: IntersectionObserverEntry) {
    const targetElement = entry.target as HTMLElement;
    const pokemonUrl = targetElement.dataset.fetchUrl!;
    getPokemonData(pokemonUrl).then((response) => {
      if (response) {
        const pokemonData: PokemonData = {
          name: ucFirst(response.name),
          url: pokemonUrl,
          id: response.id,
          idString: formatNumberToHash(response.id),
          image: response.sprites.other['official-artwork'].front_default,
          stats: response.stats,
          order: response.order,
          types: response.types,
        };
        
        const updatedPokemons = store.state.pokemons.map((pokemon: PokemonData) => {
          if (pokemon.url === pokemonUrl) {
            return { ...pokemon, ...pokemonData };
          }
          return pokemon;
        });
        
        return store.update({ pokemons: updatedPokemons }, () => this.update(targetElement, pokemonData) );
      }
    }).catch(() => {
      errorMessage.render();
    });
  },
  /**
   * Updates the content of a card component with the provided Pokemon data.
   *
   * @param {Element} target - The card element to update.
   * @param {PokemonData} pokemon - The Pokemon data used for rendering.
  */
  update(target: Element, pokemon: PokemonData) {
    target.outerHTML = this.render(pokemon);
  },
  /**
    * Renders the HTML markup for a Pokemon card.
    * @param {PokemonData} pokemon - The Pokemon data used for rendering.
  */
  render(pokemon: PokemonData) {
    const imageSrc = pokemon.image ? pokemon.image : '/images/pikachu.png';
    return `
      <div data-fetch-url="${pokemon.url}" data-id="${pokemon.id ? pokemon.id : ''}" class="poke-card">
        <img alt="${pokemon.name} Artwork" width="150" height="150" class="poke-card__image" src="${imageSrc}" />
        <h3 class="poke-card__name">
          ${pokemon.name}
          ${pokemon.idString ? 
    `<span class="poke-card__id">${pokemon.idString}</span>`
    : 
    '<span class="poke-card__id poke-card__id--empty"></span>'}</span>
            </h3>
        <div class="poke-card__types">
          ${badge.render(pokemon)}
        </div>
      </div>
    `;
  },
};