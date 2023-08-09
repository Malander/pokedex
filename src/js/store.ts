import { AppState } from "./types/types";

export const store = {
  state: {
    pokemons: [],
    isLoading: true,
  },
  update(newState: AppState, callback: () => void) {
    this.state = { ...this.state, ...newState };   
    callback(); 
  },
};