import { errorMessage } from '../components/error';
import { PokemonBase, PokemonListAPIResponse, SinglePokemonAPIResponse } from '../types/types';
import { POKEMON_LIST_ENDPOINT } from './endpoints';

/**
 * Fetches a list of Pokemon from the API.
 *
 * @returns {Promise<PokemonBase[] | undefined>} A promise that resolves to an array of Pokemon data or undefined on error.
*/
export const getPokemonList = async (): Promise<PokemonBase[] | undefined> => {
  const limit = 100;
  try {
    const response = await fetch(`${POKEMON_LIST_ENDPOINT}?limit=${limit}`);
    if (response.ok) {
      const data = await response.json() as PokemonListAPIResponse;
      return data.results;
    }
    throw new Error('Failed to fetch Pokemon data');
  } catch {
    errorMessage.render();
  }
};

/**
 * Fetches detailed data for a specific Pokemon from the API.
 *
 * @param {string} pokemonUrl - The URL of the Pokemon's data.
 * @returns {Promise<SinglePokemonAPIResponse | undefined>} A promise that resolves to the detailed Pokemon data or undefined on error.
*/
export const getPokemonData = async (pokemonUrl: string): Promise<SinglePokemonAPIResponse | undefined> => {
  try {
    const response = await fetch(pokemonUrl);
    if (response.ok) {
      const data = await response.json() as SinglePokemonAPIResponse;
      return data;
    }
    throw new Error('Failed to fetch Pokemon data');
  } catch {
    errorMessage.render();
  }
};