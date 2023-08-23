import { Modal } from '../../assets/js/components/Modal';
import { store } from '../../assets/js/store/store';
import { mockSinglePokemonData } from '../mockData';

describe('Modal', () => {

  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
  });

  describe('open', () => {
    it('should render the correct Pokemon modal based on data-id attribute', () => {
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