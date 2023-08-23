import { getPokemonData } from '../../assets/js/api/api';
import { Card } from '../../assets/js/components/Card';
import { store } from '../../assets/js/store/store';
import { mockSinglePokemonDataApiResponse } from '../mockData';

jest.mock('../../assets/js/api/api');
jest.mock('../../assets/js/store/store');

describe('Card Component', () => {
  let mockElement: HTMLElement;
  
  beforeEach(() => {
    document.body.innerHTML = '<div class="poke-card"></div>';
    mockElement = document.querySelector('.poke-card')!;
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('should load Pokemon card data and update the store', async () => {
    const mockedStore = store.update as jest.MockedFunction<typeof store.update>;
    (getPokemonData as jest.MockedFunction<typeof getPokemonData>).mockResolvedValue(mockSinglePokemonDataApiResponse);
    await Card.loadPokemonCard(mockElement);
    expect(mockedStore).toHaveBeenCalled();
  });
})