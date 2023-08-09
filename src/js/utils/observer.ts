import { card } from '../components/card';

export const initObserver = (observableElements: HTMLCollectionOf<Element>) => {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const intersecting = entry.isIntersecting;
      if (entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
      }
      if (intersecting) {
        card.loadPokemonCard(entry);
      }
    }
  });
  
  for (const element of observableElements) {
    observer.observe(element);
  }
};