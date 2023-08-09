import { card } from './components/card';
import { errorMessage } from './components/error';
import { modal } from './components/modal';
import { fetchPokemonData } from './api/fetchPokemonData';
import { PokemonData } from './types/types';
import { initObserver } from './utils/observer';
import { store } from './store';

export const App = {  
  init() {
    fetchPokemonData()
      .then(async (results) => {
        if (results) {
          const pokemonsData: PokemonData[] = results.map((pokemon) => {
            return {
              name: pokemon.name,
              url: pokemon.url,
              id: null,
              idString: null,
              image: null,
              stats: null,
              order: null,
              types: null,
              loaded: false,
            };
          });
          store.update({ isLoading: false, pokemons: pokemonsData }, () => this.render());
          initObserver(document.querySelectorAll('.poke-card'));
        } else {
          return Promise.reject();
        }
      }).catch(() => {
        store.update({ isLoading: false }, () => this.render());
        errorMessage.render();
      });
  },

  openPokemonModal(event: Event) {
    const targetElement = event.target as HTMLElement;
    const pokeCard: HTMLElement | null = targetElement.closest('.poke-card');
    if (pokeCard) {
      const pokeId = pokeCard.dataset.id!;
      const currentPokemonData = store.state.pokemons.find((pokemon: PokemonData) => {
        debugger;
        return pokemon.id === +pokeId;
      });
      if (currentPokemonData) {
        modal.render(currentPokemonData);
      }
    }
  },

  template() {
    return `
      ${store.state.isLoading ?
    '<div>Loading...</div>' 
    : 
    `<div class="poke-grid">
      <div class="poke-grid__caption">
        <h1>Explore a comprehensive list of Pokémon and their stats</h1>
        <h2>Discover essential information, such as base stats and types</h2>
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

  render() {
    debugger;
    document.getElementById('app')!.innerHTML = this.template();
    document.getElementById('content-slot')?.addEventListener('click', (event: Event) => this.openPokemonModal(event));
  },
};