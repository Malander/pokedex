import { card } from '../components/card';
import { PokemonBase } from '../types/types';

export const initObserver = (observableElements) => {
  const observer = new IntersectionObserver((entries) => {
    debugger;
    for (const entry of entries) {

      const intersecting = entry.isIntersecting;
      if (entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
      }
      if (intersecting) {
        console.count('intersecting');
        card.loadPokemonCard(entry);
      }
    }
  });
  
  for (const element of observableElements) {
    console.count('quanti elementi', element);
    observer.observe(element);
  }
};