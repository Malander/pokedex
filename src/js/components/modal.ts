import { PokemonData } from "../types"
import { ucFirst } from "../utils/utils";

// TODO: badge as component and remove css of poke-modal-types

export const modal = {
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
                ${pokemon.types.map((pokemonType) => {
                  return `<div class="poke-badge poke-badge--${pokemonType.type.name}">${ucFirst(pokemonType.type.name)}</div>`
                }).join('')}
              </div>
            </div>
            <div>
              <h3>Stats</h3>
              <div class="poke-modal__stats">
                ${pokemon.stats.map((stat) => {
                  return `
                    <div class="poke-stat">
                      <div class="poke-stat__name">
                        ${stat.stat.name}
                      </div>
                      <div class="poke-stat__bar">
                        <span>${stat.base_stat}</span>
                      </div>
                    </div>
                  `
                }).join('')}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    `
    return modalElement
  },
  closeModal(event: Event) {
    const modalContent = event.target.closest('.poke-modal__content');
    if (!modalContent) {
      document.getElementById('app')!.removeChild(document.querySelector('.poke-modal')!);
    }
  },
  render(pokemon: PokemonData) {
    document.getElementById('app')!.appendChild(this.template(pokemon));
    document.querySelector('.poke-modal')?.addEventListener('click', (event: Event) => this.closeModal(event))
  }
}