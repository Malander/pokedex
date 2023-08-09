import { store } from '../store';
import { PokemonData } from '../types/types';
import { badge } from './badge';

export const modal = {
  /**
   * Calculate the width of the stat bar in proportion of the max value.
   * @param {number} score The actual score of the pokemon stat.
  */
  calculateBarWidth(score: number) {
    // Max stat value
    const maxValue = 150;
    // Return percentage diff from score and maxValue
    return (score / maxValue) * 100;
  },
  /**
   * Generates the HTML markup for a modal displaying detailed information about a Pokemon.
   *
   * @param {PokemonData} pokemon - The Pokemon data to display in the modal.
  */
  template(pokemon: PokemonData) {
    const modalElement = document.createElement('div');
    modalElement.classList.add('poke-modal');
    modalElement.innerHTML = `
      <div class="poke-modal__frame">
        <div class="poke-modal__header">
          <div class="poke-modal__name">
            ${pokemon.name} <span>${pokemon.idString}</span>
          </div>
          <button class="poke-modal__close">
            <span>&#10005;</span>
          </button>
        </div>
        <div class="poke-modal__body">
          <div class="poke-modal__image">
            <img width="200" src="${pokemon.image}" />
          </div>
          <div class="poke-modal__content">
            <div>
              <h3>Types</h3>
              <div class="poke-modal__types">
                ${badge.render(pokemon)}
              </div>
            </div>
            <div>
              <h3>Stats</h3>
              <div class="poke-modal__stats">
                ${pokemon.stats ? pokemon.stats.map((stat) => {
    return `
                    <div class="poke-stat">
                      <div class="poke-stat__name">
                        ${stat.stat.name}
                      </div>
                      <div class="poke-stat__bar">
                        <span style="width: ${this.calculateBarWidth(stat.base_stat)}%">${stat.base_stat}</span>
                      </div>
                    </div>
                  `;
  }).join('') : ''}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    `;
    return modalElement;
  },
  /**
   * Opens a modal displaying detailed information about a Pokemon.
   *
   * @param {Event} event - The event object triggered when the modal is opened.
  */
  open(event: Event) {
    const targetElement = event.target as HTMLElement;
    const pokeCard: HTMLElement | null = targetElement.closest('.poke-card');
    if (pokeCard) {
      const pokeId = pokeCard.dataset.id!;
      const currentPokemonData = store.state.pokemons.find((pokemon: PokemonData) => {
        return pokemon.id === +pokeId;
      });
      if (currentPokemonData) {
        modal.render(currentPokemonData);
      }
    }
  },
  /**
    * Closes the modal element if conditions are met.
    * @param {Event} event - The click event that triggered the modal closing.
  */
  close(event: Event) {
    // Cast event.target to HTMLElement
    const targetElement = event.target as HTMLElement;
    const modalContent = targetElement.closest('.poke-modal__frame');
    const closeModalButton = targetElement.closest('.poke-modal__close');

    // If click event is NOT on modalContent (which means is on modal backdrop) 
    // or click is on close button, then close modal.
    if (!modalContent || closeModalButton) {
      document.getElementById('app')!.removeChild(document.querySelector('.poke-modal') as Node);
    }
  },
  /**
   * Render method of the modal, when called it appends a modal to the #app node
   * and attach an event listener to it
   * @param {PokemonData} pokemon 
  */
  render(pokemon: PokemonData) {
    document.getElementById('app')!.appendChild(this.template(pokemon));
    document.querySelector('.poke-modal')!.addEventListener('click', (event: Event) => this.close(event));
  },
};