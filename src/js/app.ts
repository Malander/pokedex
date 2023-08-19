import { card } from './components/card';
import { errorMessage } from './components/error';
import { modal } from './components/modal';
import { getPokemonList } from './api/api';
import { PokemonData } from './types/types';
import { store } from './store/store';
import { loader } from './components/loader';
import { ucFirst } from './utils/utils';

export const app = {  
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
      this.initObserver(document.querySelectorAll('.poke-card'));
        
    } catch (error) {
      store.update({ isLoading: false }, () => errorMessage.render());
    }
  },
  /**
   * Initializes an IntersectionObserver to load Pokemon cards for intersecting elements.
   * When an element comes into view (intersects), the `loadPokemonCard` function is triggered for that element.
   * If an element's intersection ratio exceeds 0, it's unobserved to prevent further triggers.
   *
   * @param observableElements - The list of elements to observe for intersections.
  */
  initObserver(observableElements: NodeListOf<Element>) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const intersecting = entry.isIntersecting;
        if (entry.intersectionRatio > 0) {
          observer.unobserve(entry.target);
        }
        if (intersecting) {
          void card.loadPokemonCard(entry);
        }
      }
    });
  
    for (const element of observableElements) {
      observer.observe(element);
    }
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