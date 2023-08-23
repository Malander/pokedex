import { Card } from './components/Card';
import { ErrorBoundary } from './components/Error';
import { Modal } from './components/Modal';
import { getPokemonList } from './api/api';
import { store } from './store/store';
import { Loader } from './components/Loader';
import { observerService } from './services/observer';
import { ucFirst } from './utils/utils';
import { PokemonBase } from './types/types';

export const App = {  
  /**
   * Initializes the application by fetching the list of Pokémon, updating the store's state, and rendering the content.
  */
  async init() {
    try {
      this.render();
      const pokemonList = await getPokemonList();
      if (!pokemonList) throw new Error('Failed to fetch Pokemons');
      const pokemonData = this.generateSinglePokemonStateSlice(pokemonList);
      store.update({ isLoading: false, pokemons: pokemonData }, () => this.render());
      observerService.initObserver(document.querySelectorAll('.poke-card'));
    } catch (error) {
      store.update({ isLoading: false }, () => ErrorBoundary.handleError(error));
    }
  },
  /**
   * Transforms a list of Pokemon to a state slice with extended properties.
   * 
   * @param pokemons - Array of basic Pokemon data.
   * @returns Array of Pokemon with extended properties initialized to null.
  */
  generateSinglePokemonStateSlice(pokemons: PokemonBase[]) {
    return pokemons.map(({ name, url }) => ({
      name: ucFirst(name),
      url: url,
      id: null,
      idString: null,
      image: null,
      stats: null,
      order: null,
      types: null,
    }));
  },
  /**
   * Generates the template for the Pokémon grid.
   * 
   * This method returns a string template that includes:
   * - A caption with the title "Pokedex".
   * - A subtitle providing a brief description.
   * - A content section that maps over the Pokémon state and renders each Pokémon using the Card component.
   * 
   * @returns The HTML string template for the Pokémon grid.
  */
  getPokemonGridTemplate() {
    return `
      <div class="poke-grid__caption">
        <h1>Pokedex</h1>
        <h2>Explore a comprehensive list of Pokémons and their essential information.</h2>
      </div>
      <div class="poke-grid__content" id="content-slot">
        ${store.state.pokemons.map((pokemon) => {
          return Card.render(pokemon);
        }).join('')}
      </div>`;
  },
  /**
    * Generates the HTML markup for the application's content based on the store's state.
  */
  template() {
    return store.state.isLoading 
      ? Loader.render()
      : `<div class="poke-grid">${this.getPokemonGridTemplate()}</div>`;
  },
  /**
   * Renders the application content and sets up event listeners for modal interaction.
  */
  render() {
    document.getElementById('app')!.innerHTML = this.template();
    document.getElementById('content-slot')?.addEventListener('click', (event: Event) => Modal.open(event));
  },
};