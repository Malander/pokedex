import { getPokemonData } from '../api/api';
import { store } from '../store/store';
import { PokemonData, SinglePokemonAPIResponse } from '../types/types';
import { formatNumberToHash, ucFirst } from '../utils/utils';
import { badge } from './badge';
import { errorMessage } from './error';

export const card = {
  /**
   * Loads Pokemon card data for an intersecting element and updates the store.
   *
   * @param entry - The intersection observer entry for the target element.
  */
  async loadPokemonCard(entry: IntersectionObserverEntry) {
    const targetElement = entry.target as HTMLElement;
    const pokemonUrl = targetElement.dataset.fetchUrl!;

    try {
      const response = await getPokemonData(pokemonUrl);
      if (!response) return;

      const pokemonData = this.transformResponseToPokemonData(response, pokemonUrl);
      const updatedPokemons = this.getUpdatedPokemons(pokemonUrl, pokemonData);
        
      store.update({ pokemons: updatedPokemons }, () => this.update(targetElement, pokemonData) );
    } catch {
      errorMessage.render();
    }
  },
  /**
   * Transforms the raw API response to a structured PokemonData format.
   * 
   * @param response - The raw API response for a single Pokemon.
   * @param pokemonUrl - The URL from which the Pokemon data was fetched.
   * 
   * @returns The transformed PokemonData.
  */
  transformResponseToPokemonData(response: SinglePokemonAPIResponse, pokemonUrl: string): PokemonData {
    return {
      name: ucFirst(response.name),
      url: pokemonUrl,
      id: response.id,
      idString: formatNumberToHash(response.id),
      image: response.sprites.other['official-artwork'].front_default,
      stats: response.stats,
      order: response.order,
      types: response.types,
    };
  },
  /**
   * Gets an updated list of Pokemons, replacing or updating the Pokemon with matching URL.
   * 
   * @param pokemonUrl - The URL of the Pokemon to be replaced or updated.
   * @param pokemonData - The new data of the Pokemon to be replaced or updated.
   * 
   * @returns An array of PokemonData, with the specified Pokemon updated.
  */
  getUpdatedPokemons(pokemonUrl: string, pokemonData: PokemonData): PokemonData[] {
    return store.state.pokemons.map(pokemon => 
      pokemon.url === pokemonUrl ? { ...pokemon, ...pokemonData } : pokemon,
    );
  },
  /**
   * Updates the content of a card component with the provided Pokemon data.
   *
   * @param target - The card element to update.
   * @param pokemon - The Pokemon data used for rendering.
  */
  update(target: Element, pokemon: PokemonData) {
    target.outerHTML = this.render(pokemon);
  },
  /**
    * Renders the HTML markup for a Pokemon card.
    * @param pokemon - The Pokemon data used for rendering.
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
          ${badge.render(pokemon.types)}
        </div>
      </div>
    `;
  },
};