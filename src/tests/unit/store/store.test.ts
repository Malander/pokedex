import { store } from '../../../assets/js/store/store';
import { mockSinglePokemonData } from '../../mockData';

describe('store', () => {
  beforeEach(() => {
    // Reset store's state to initial state before each test
    store.state = {
      pokemons: [],
      isLoading: true,
    };
  });

  describe('update', () => {
    it('should correctly update the state and call the callback', () => {
      const callbackMock = jest.fn();

      const newState = {
        pokemons: [mockSinglePokemonData],
        isLoading: false,
      };

      store.update(newState, callbackMock);

      expect(store.state).toEqual(newState);
      expect(callbackMock).toHaveBeenCalled();
    });

    it('should merge new state with old state and call the callback', () => {
      const callbackMock = jest.fn();

      const partialNewState = {
        pokemons: [mockSinglePokemonData],
      };

      store.update(partialNewState, callbackMock);

      const expectedState = {
        pokemons: [mockSinglePokemonData],
        isLoading: true,
      };

      expect(store.state).toEqual(expectedState);
      expect(callbackMock).toHaveBeenCalled();
    });
  });
});