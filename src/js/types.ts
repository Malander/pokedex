export interface PokemonBase {
  name: string
  url: string
}

export interface PokemonListAPIResponse {
  count: number
  next: string
  previous: string
  results: PokemonBase[]
}

export interface AppState {
  pokemons: PokemonBase[]
  isLoading: boolean
}

export interface PokemonData {
  url: string
  id: number
  idString: string
  name: string
  image: string
  stats: []
  order: number
  types: []
}
