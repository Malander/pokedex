import { Modal } from '../../assets/js/components/Modal';
import { store } from '../../assets/js/store/store';
import { mockSinglePokemonData } from '../mockData';

describe('Modal', () => {

  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
  });

  describe('calculateBarWidth', () => {
    it('should correctly calculate the bar width', () => {
      expect(Modal.calculateBarWidth(75)).toBe(50);
      expect(Modal.calculateBarWidth(150)).toBe(100);
    });
  });

  describe('template', () => {
    it('should render the correct Pokemon data', () => {
      const modalElement = Modal.template(mockSinglePokemonData);
      // Here we check only pokemon name div just as an example
      expect(modalElement.querySelector('.poke-modal__name')!.textContent).toContain(mockSinglePokemonData.name);
    });
  });

  describe('open', () => {
    it('should render the correct Pokemon modal based on dataset ID', () => {
      store.state.pokemons = [
        mockSinglePokemonData,
      ];
      const mockEvent = {
        target: {
          closest: jest.fn(() => ({ dataset: { id: '1' } })),
        },
      } as unknown as Event;
      const renderSpy = jest.spyOn(Modal, 'render');
      Modal.open(mockEvent);
      expect(renderSpy).toHaveBeenCalledWith(store.state.pokemons[0]);
    });
  });

  describe('close', () => {
    it('should remove modal from DOM when backdrop or close button is clicked', () => {
      const mockModal = document.createElement('div');
      mockModal.classList.add('poke-modal');
      document.getElementById('app')!.appendChild(mockModal);

      let mockEvent = {
        target: mockModal,
      } as unknown as Event;
      Modal.close(mockEvent);
      expect(document.querySelector('.poke-modal')).toBeNull();

      document.getElementById('app')!.appendChild(mockModal);
      mockEvent = {
        target: {
          closest: jest.fn(selector => selector === '.poke-modal__close' ? {} : null),
        },
      } as unknown as Event;
      Modal.close(mockEvent);
      expect(document.querySelector('.poke-modal')).toBeNull();
    });
  });

  describe('render', () => {
    it('should append modal to #app and attach close event listener', () => {
      Modal.render(mockSinglePokemonData);
      const pokeModal = document.querySelector('.poke-modal')!;
      const typedPokeModal = pokeModal as HTMLElement;
      expect(document.querySelector('.poke-modal')).not.toBeNull();
      
      const mockClick = jest.fn();
      typedPokeModal.addEventListener('click', mockClick);
      typedPokeModal.click();
      expect(mockClick).toHaveBeenCalled();
    });
  });
});