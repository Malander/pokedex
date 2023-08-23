import { App } from '../../assets/js/App';
import { store } from '../../assets/js/store/store';

describe('App Component', () => {
  const renderSpy = jest.spyOn(App, 'render').mockImplementation(() => jest.fn());

  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    jest.clearAllMocks();
    document.body.innerHTML = '<div id="app"></div>';
  });

  describe('template', () => {
    it('should render the Pokemon grid if isLoading is false', () => {
      store.state.isLoading = false;

      const template = App.template();

      expect(template).toContain('<div class="poke-grid">');
    });
  });

  describe('render', () => {
    it('should render the template', () => {
      renderSpy.mockRestore();
      App.render();

      const contentSlot = document.getElementById('content-slot');
      expect(contentSlot).not.toBeNull();
    });
  });

  describe('generateSinglePokemonStateSlice', () => {
    it('should transform a list of Pokémon to an object with extended properties', () => {
      // Sample input
      const pokemons = [
        { name: 'pikachu', url: 'http://pokemonurl/1' },
        { name: 'bulbasaur', url: 'http://pokemonurl/2' }
      ];
  
      // Expected output
      const expected = [
        {
          name: 'Pikachu',
          url: 'http://pokemonurl/1',
          id: null,
          idString: null,
          image: null,
          stats: null,
          order: null,
          types: null,
        },
        {
          name: 'Bulbasaur',
          url: 'http://pokemonurl/2',
          id: null,
          idString: null,
          image: null,
          stats: null,
          order: null,
          types: null,
        }
      ];
  
      // Act
      const result = App.generateSinglePokemonStateSlice(pokemons);
  
      // Assert
      expect(result).toEqual(expected);
    });
  });
});