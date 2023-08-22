import { fetchData, getPokemonData, getPokemonList } from '../../assets/js/api/api';
import { ErrorBoundary } from '../../assets/js/components/Error';
import { mockPokemonListApiResponse, mockSinglePokemonData } from '../mockData';

jest.mock('../../assets/js/components/Error');

describe('API functions', () => {
  const mockedError = ErrorBoundary.handleError as jest.MockedFunction<typeof ErrorBoundary.handleError>;

  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn();
  });

  describe('fetchData', () => {
    it('should fetch data and return as json when response is ok', async () => {
      (global.fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockPokemonListApiResponse),
      } as unknown as Promise<Response>);

      const result = await fetchData('someUrl');
      expect(result).toEqual(mockPokemonListApiResponse);
    });

    it('should call ErrorBoundary.handleError when fetch throws an error', async () => {
      (global.fetch as jest.MockedFunction<typeof fetch>).mockRejectedValueOnce(new Error('fetch error'));
      await fetchData('someUrl');
      expect(mockedError).toHaveBeenCalledWith(new Error('fetch error'));
    });
  });

  describe('getPokemonList', () => {
    let fetchDataMock: jest.Mock;

    beforeEach(() => {
      jest.clearAllMocks();
      fetchDataMock = jest.fn();
    });

    it('should fetch pokemon list', async () => {
      (fetchDataMock as jest.MockedFunction<typeof fetchData>).mockResolvedValueOnce(mockPokemonListApiResponse);
      (global.fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockPokemonListApiResponse),
      } as unknown as Promise<Response>);
      const result = await getPokemonList();
      expect(result).toEqual(mockPokemonListApiResponse.results);
    });

    it('should fetch specific pokemon data', async () => {
      const mockResponse = mockSinglePokemonData;
      (fetchDataMock as jest.MockedFunction<typeof fetchData>).mockResolvedValueOnce(mockResponse);
      (global.fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      } as unknown as Promise<Response>);

      const result = await getPokemonData('singlePokemonUrl');
      expect(result).toEqual(mockResponse);
    });
  });


});