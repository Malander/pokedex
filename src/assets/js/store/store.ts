import { AppState } from '../types/types';

/**
 * The main application store that maintains and updates the app's state.
*/
interface Store {
  state: AppState;
  update(newState: Partial<AppState>, callback: () => void): void;
}

export const store: Store = {
  /**
   * Initial state
  */
  state: {
    pokemons: [],
    isLoading: true,
  },
  /**
   * Updates the store's state and triggers a callback.
   *
   * @param newState - The new state to merge into the existing state.
   * @param callback - A callback function to be invoked after the state is updated.
  */
  update(newState: Partial<AppState>, callback: () => void) {
    this.state = { ...this.state, ...newState };   
    callback(); 
  },
};