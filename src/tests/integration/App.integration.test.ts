import { App } from '../../assets/js/App';
import { getPokemonList } from '../../assets/js/api/api';
import { ErrorBoundary } from '../../assets/js/components/Error';
import { Loader } from '../../assets/js/components/Loader';
import { store } from '../../assets/js/store/store';
import { mockInitialPokemonState, mockPokemonListApiResponse } from '../mockData';

jest.mock('../../assets/js/api/api');
jest.mock('../../assets/js/store/store');
jest.mock('../../assets/js/components/Error');

describe('App Component', () => {
  const mockedFetchPokemons = getPokemonList as jest.MockedFunction<typeof getPokemonList>;
  const mockedStore = store.update as jest.MockedFunction<typeof store.update>;
  mockedStore.mockImplementation((_state, callback) => {
    callback();
  });
  const mockedError = ErrorBoundary.handleError as jest.MockedFunction<typeof ErrorBoundary.handleError>;
  const renderSpy = jest.spyOn(App, 'render').mockImplementation(() => jest.fn());

  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    jest.clearAllMocks();
    document.body.innerHTML = '<div id="app"></div>';
  });

  describe('init', () => {
    it('should fetch Pokemons and update the store with the render callback', async () => {
      const mockPokemonsData = mockPokemonListApiResponse.results;
      mockedFetchPokemons.mockResolvedValue(mockPokemonsData);
      await App.init();
      
      expect(mockedFetchPokemons).toHaveBeenCalled();
      expect(mockedStore).toHaveBeenCalledWith({ isLoading: false, pokemons: mockInitialPokemonState }, expect.any(Function));
      expect(renderSpy).toHaveBeenCalled();
    });

    it('should handle errors, update state and call the error handler callback', async () => {
      const error = new Error('Failed to fetch Pokemon data');
      mockedFetchPokemons.mockRejectedValue(error);
      
      await App.init();
      
      expect(mockedStore).toHaveBeenCalledWith({ isLoading: false }, expect.any(Function));
      expect(mockedError).toHaveBeenCalled();
    });
  });

  describe('template', () => {
    it('should render loader if isLoading is true', () => {
      store.state.isLoading = true;
  
      const template = App.template();
  
      expect(template).toBe(Loader.render());
    });
  })

});