import { card } from './components/card';
import { errorMessage } from './components/error';
import { modal } from './components/modal';
import { fetchPokemonData } from './api/fetchPokemonData';
import { PokemonBase, PokemonData, SinglePokemonAPIResponse } from './types/types';
import { formatNumberToHash, ucFirst } from './utils/utils';
import { initObserver } from './utils/observer';

export const App = () => {
  // Component state
  let pokemons: PokemonData[] | PokemonBase[] = [];
  let isLoading = true;

  function loadPokemonCard(entry: IntersectionObserverEntry) {
    const pokemonsFullData: PokemonData[] = [];

    const elementTarget = entry.target as HTMLElement;
    const fetchUrl = elementTarget.dataset.fetchUrl!;
    fetch(fetchUrl).then(async (response) => {
      if (response.ok) {
        const singlePokemonData: SinglePokemonAPIResponse = await response.json();
        const pokemonData: PokemonData = {
          url: fetchUrl,
          id: singlePokemonData.id,
          idString: formatNumberToHash(singlePokemonData.id),
          name: ucFirst(singlePokemonData.name),
          image: singlePokemonData.sprites.other['official-artwork'].front_default,
          stats: singlePokemonData.stats,
          order: singlePokemonData.order,
          types: singlePokemonData.types,
        };
        pokemonsFullData.push(pokemonData);
        pokemons = [...pokemonsFullData];
        elementTarget.outerHTML = card.render(pokemonData);
        const orderedPokemons = (pokemons as PokemonData[]).sort((a, b) => a.order - b.order);
        return orderedPokemons;
      } else {
        return Promise.reject(response);
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  
  function init() {
    fetchPokemonData()
      .then((data) => {
        if (data) {
          pokemons = data;
          isLoading = false;
          render();
          initObserver(document.getElementsByClassName('poke-card'));
        } else {
          return Promise.reject();
        }
      }).catch(() => {
        isLoading = false;
        errorMessage.render();
      });
  }

  function openPokemonModal(event: Event) {
    const targetElement = event.target as HTMLElement;
    const pokeCard: HTMLElement | null = targetElement.closest('.poke-card');
    if (pokeCard) {
      const pokeId = pokeCard.dataset.id!;
      const pokemons2 = pokemons as PokemonData[];
      const currentPokemonData = pokemons2.find((pokemon: PokemonData) => pokemon.id === +pokeId);
      if (currentPokemonData) {
        modal.render(currentPokemonData);
      }
    }
  }

  function template() {
    return `
      ${isLoading ?
    '<div>Loading...</div>' 
    : 
    `<div class="poke-grid">
          <div class="poke-grid__caption">
            <h1>Explore a comprehensive list of Pokémon and their stats</h1>
            <h2>Discover essential information, such as base stats and types</h2>
          </div>
          <div class="poke-grid__content" id="content-slot">
            ${pokemons.map((pokemon) => {
    return `${card.render(pokemon)}`;
  }).join('')}
          </div>
        </div>`
}
    `;
  }

  function render() {
    document.getElementById('app')!.innerHTML = template();
    document.getElementById('content-slot')?.addEventListener('click', (event: Event) => openPokemonModal(event));
  }

  return {
    init,
    loadPokemonCard,
  };
};