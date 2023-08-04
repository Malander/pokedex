import { card } from './components/card';
import { errorMessage } from './components/error';
import { modal } from './components/modal';
import { fetchPokemonData } from './fetchPokemonData';
import { PokemonBase, PokemonData } from './types';
import { formatNumberToHash, ucFirst } from './utils/utils';

export const App = () => {
  let pokemons: PokemonData[] | PokemonBase[] = [];
  let isLoading = true;

  function initObserver() {
    const pokeCards = document.getElementsByClassName('poke-card');
    const pokemonsFullData: PokemonData[] = [];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(async (entry) => {
        const intersecting = entry.isIntersecting;
        if (entry.intersectionRatio > 0) {
          observer.unobserve(entry.target);
        }
        if (intersecting) {
          const fetchUrl = entry.target.dataset.fetchUrl;
          console.log(fetchUrl);
          try {
            const response = await fetch(fetchUrl);
            if (response.ok) {
              const singlePokemonData = await response.json();
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
              entry.target.outerHTML = card.render(pokemonData);
              const orderedPokemons = pokemons.sort((a, b) => a.order - b.order);
              orderedPokemons;
            } else {
              return await Promise.reject(response);
            }
          } catch (error) {
            console.error(error);
          }
        }
      },
      );
    });

    for (const card of pokeCards) {
      // Apply the observe method to each card
      observer.observe(card);
    }

    // pokemons = [...pokemonsFullData]
    console.log(pokemons);
  }
  
  async function init() {
    try {
      const data = await fetchPokemonData();
      if (data) {
        pokemons = data;
      } else {
        return await Promise.reject();
      }
    } catch (error) {
      errorMessage.render();
    } finally {
      isLoading = false;
      render();
      initObserver();
    }
  }

  function openPokemonModal(event: Event) {
    const card = event.target.closest('.poke-card');
    if (card) {
      const currentPokemonData = pokemons.find((pokemon) => pokemon.id === +card.dataset.id);
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
  };
};