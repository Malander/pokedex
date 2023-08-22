import { ErrorBoundary } from '../components/Error';
import { PokemonBase, PokemonListAPIResponse, SinglePokemonAPIResponse } from '../types/types';
import { POKEMON_LIST_ENDPOINT } from './endpoints';

export async function fetchData<T>(url: string): Promise<T | undefined> {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json() as T;
    }
    throw new Error('Failed to fetch data');
  } catch (error) {
    ErrorBoundary.handleError(error);
  }
}

/**
 * Fetches a list of Pokemon from the API.
 *
 * @returns {Promise<PokemonBase[] | undefined>} A promise that resolves to an array of Pokemon data or undefined on error.
*/
export const getPokemonList = async (): Promise<PokemonBase[] | undefined> => {
  const limit = 100;
  try {
    const data = await fetchData<PokemonListAPIResponse>(`${POKEMON_LIST_ENDPOINT}?limit=${limit}`);
    return data?.results;
  } catch (error) {
    ErrorBoundary.handleError(error);
  }
};
/**
 * Fetches detailed data for a specific Pokemon from the API.
 *
 * @param {string} pokemonUrl - The URL of the Pokemon's data.
 * @returns {Promise<SinglePokemonAPIResponse | undefined>} A promise that resolves to the detailed Pokemon data or undefined on error.
*/
export const getPokemonData = async (pokemonUrl: string): Promise<SinglePokemonAPIResponse | undefined> => {
  return fetchData<SinglePokemonAPIResponse>(pokemonUrl);
};