export type PokemonBase = {
  name: string;
  url: string;
}

export type PokemonListAPIResponse = {
  count: number;
  next: string;
  previous: string;
  results: PokemonBase[]
}

export type AppState = {
  pokemons: PokemonBase[];
  isLoading: boolean;
}

export type PokemonData = {
  id: number;
  idString: string;
  name: string;
  image: string;
  stats: [];
  order: number;
  types: [];
}