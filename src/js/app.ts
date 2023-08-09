import { card } from './components/card';
import { errorMessage } from './components/error';
import { modal } from './components/modal';
import { getPokemonList } from './api/api';
import { PokemonData } from './types/types';
import { initObserver } from './utils/observer';
import { store } from './store';
import { loader } from './components/loader';
import { ucFirst } from './utils/utils';

export const app = {  
  /**
   * Initializes the application by fetching the list of Pokémon, updating the store's state, and rendering the content.
  */
  init() {
    getPokemonList()
      .then((results) => {
        if (results) {
          const pokemonsData: PokemonData[] = results.map((pokemon) => {
            return {
              name: ucFirst(pokemon.name),
              url: pokemon.url,
              id: null,
              idString: null,
              image: null,
              stats: null,
              order: null,
              types: null,
            };
          });
          store.update({ isLoading: false, pokemons: pokemonsData }, () => this.render());
          return initObserver(document.querySelectorAll('.poke-card'));
        }
        throw new Error('Failed to fetch Pokemon data 2');
      }).catch(() => {
        store.update({ isLoading: false }, () => errorMessage.render());
      });
  },
  /**
    * Generates the HTML markup for the application's content based on the store's state.
  */
  template() {
    return `
      ${store.state.isLoading 
    ?
    loader.render() 
    : 
    `<div class="poke-grid">
        <div class="poke-grid__caption">
          <h1>Pokedex</h1>
          <h2>Explore a comprehensive list of Pokémons and their essential information.</h2>
        </div>
        <div class="poke-grid__content" id="content-slot">
          ${store.state.pokemons.map((pokemon) => {
    return `${card.render(pokemon)}`;
  }).join('')}
        </div>
      </div>`
}
    `;
  },
  /**
   * Renders the application content and sets up event listeners for modal interaction.
  */
  render() {
    document.getElementById('app')!.innerHTML = this.template();
    document.getElementById('content-slot')?.addEventListener('click', (event: Event) => modal.open(event));
  },
};