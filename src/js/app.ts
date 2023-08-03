import { card } from './components/card.ts';
import { modal } from './components/modal.ts';
import { fetchPokemonData } from './fetchPokemonData.ts'
import { PokemonData } from './types.ts';
import { formatNumberToHash, ucFirst } from './utils/utils.ts';

export const App = () => {
  let pokemons: PokemonData[] = [];
  let isLoading = true;
  
  async function init() {
    try {
      const data = await fetchPokemonData();

      if (data) {
        const fetchSinglePokemons = data.map(async(pokemon) => {
          const response = await fetch(pokemon.url, { cache: "force-cache" });
          if (response.ok) {
            const singlePokemonData = await response.json();
            const pokemonData: PokemonData = {
              id: singlePokemonData.id,
              idString: formatNumberToHash(singlePokemonData.id),
              name: ucFirst(singlePokemonData.name),
              image: singlePokemonData.sprites.other['official-artwork'].front_default,
              stats: singlePokemonData.stats,
              order: singlePokemonData.order,
              types: singlePokemonData.types
            }
            pokemons = [...pokemons, pokemonData]
            const orderedPokemons = pokemons.sort((a, b) => a.order - b.order)
            return orderedPokemons;
          }
          return Promise.reject(response);
        })

        return Promise.all(fetchSinglePokemons).then(() => 
          render()
        )
      }

      Promise.reject();

    } catch(error) {
      console.error(error)
    } finally {
      isLoading = false
    }
  }

  function openPokemonModal(event: Event) {
    const card = event.target.closest('.poke-card');
    if (card) {
      const currentPokemonData = pokemons.find((pokemon) => pokemon.id === +card.dataset.id)
      if (currentPokemonData) {
        modal.render(currentPokemonData)
      }
    }
  }

  function render() {
    document.getElementById('app')!.innerHTML = template()
    document.getElementById('content-slot')?.addEventListener('click', (event: Event) => openPokemonModal(event))
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
              return `${card.render(pokemon)}`
            }).join('')}
          </div>
        </div>`
      }
      `
  }

  return {
    init
  }
}