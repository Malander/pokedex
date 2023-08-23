import { Modal } from '../../assets/js/components/Modal';
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
});