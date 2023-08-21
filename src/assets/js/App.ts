import { Card } from './components/Card';
import { ErrorBoundary } from './components/Error';
import { Modal } from './components/Modal';
import { getPokemonList } from './api/api';
import { PokemonData } from './types/types';
import { store } from './store/store';
import { Loader } from './components/Loader';
import { ucFirst } from './utils/utils';
import { observerService } from './services/observer';

export const App = {  
  /**
   * Initializes the application by fetching the list of Pokémon, updating the store's state, and rendering the content.
  */
  async init() {
    try {
      const results = await getPokemonList();

      if (!results) {
        throw new Error('Failed to fetch Pokemon data');
      }

      const pokemonsData: PokemonData[] = results.map(({ name, url }) => ({
        name: ucFirst(name),
        url: url,
        id: null,
        idString: null,
        image: null,
        stats: null,
        order: null,
        types: null,
      }));

      store.update({ isLoading: false, pokemons: pokemonsData }, () => this.render());
      observerService.initObserver(document.querySelectorAll('.poke-card'));
        
    } catch (error) {
      store.update({ isLoading: false }, () => ErrorBoundary.handleError(error));
    }
  },
  /**
    * Generates the HTML markup for the application's content based on the store's state.
  */
  template() {
    return `
      ${store.state.isLoading 
    ?
    Loader.render() 
    : 
    `<div class="poke-grid">
        <div class="poke-grid__caption">
          <h1>Pokedex</h1>
          <h2>Explore a comprehensive list of Pokémons and their essential information.</h2>
        </div>
        <div class="poke-grid__content" id="content-slot">
          ${store.state.pokemons.map((pokemon) => {
    return `${Card.render(pokemon)}`;
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
    document.getElementById('content-slot')?.addEventListener('click', (event: Event) => Modal.open(event));
  },
};