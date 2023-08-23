import { getPokemonData } from '../api/api';
import { store } from '../store/store';
import { PokemonData, SinglePokemonAPIResponse } from '../types/types';
import { formatNumberToHash, ucFirst } from '../utils/utils';
import { Badge } from './Badge';

export const Card = {
  /**
   * Loads Pokemon card data for an intersecting element and updates the store.
   *
   * @param entry - The intersection observer entry for the target element.
  */
  async loadPokemonCard(targetElement: HTMLElement) {
    const pokemonUrl = targetElement.dataset.fetchUrl!;

    try {
      const response = await getPokemonData(pokemonUrl);
      if (!response) throw new Error('Could not get Pokemon data.');

      const pokemonData = this.transformResponseToPokemonData(response, pokemonUrl);
      const updatedPokemons = this.getUpdatedPokemons(pokemonUrl, pokemonData);

      // if (pokemonData.name === 'Venusaur') throw new Error();
        
      store.update({ pokemons: updatedPokemons }, () => this.update(targetElement, pokemonData) );
    } catch {
      this.error(targetElement);
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
  update(target: HTMLElement, pokemon: PokemonData) {
    target.outerHTML = this.render(pokemon);
  },
  /**
   * Replaces the content of the given target HTMLElement with an error template.
   * 
   * @param target - The HTMLElement that will be replaced by the error content.
  */
  error(target: HTMLElement) {
    target.outerHTML = this.errorTemplate();
  },
  /**
   * Generates an HTML of an error card.
   * 
   * @returns A string containing the HTML for an error card.
  */
  errorTemplate() {
    return `
      <div class="poke-card poke-card--error">
          <img alt="Sad Pikachu" width="150" height="150" class="poke-card__image" src="/images/pikachu.png" />
          <h3 class="poke-card__name">
            There was an error loading this Pokemon.
          </h3>
      </div>
    `;
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
          ${pokemon.idString
            ? 
            `<span class="poke-card__id">${pokemon.idString}</span>`
            :
            '<span class="poke-card__id poke-card__id--empty"></span>'
          }
        </h3>
        <div class="poke-card__types">
          ${Badge.render(pokemon.types)}
        </div>
      </div>
    `;
  },
};