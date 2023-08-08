import { App } from './app';
import { initObserver } from './utils/observer';

export const Store = {
  state: {
    pokemons: [],
    isLoading: true,
  },
  update(newState, callback: () => void) {
    console.log('UPODATING STATE', newState);
    this.state = { ...this.state, ...newState };   
    callback(); 
  },
};