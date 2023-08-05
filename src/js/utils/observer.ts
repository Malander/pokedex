import { App } from '../app';

export const initObserver = (observableElements: HTMLCollectionOf<Element>) => {

  const observer = new IntersectionObserver(async (entries) => {
    for (const entry of entries) {
      const intersecting = entry.isIntersecting;
      if (entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
      }
      if (intersecting) {
        App().loadPokemonCard(entry);
      }
    }
  });

  for (const element of observableElements) {
    // Apply the observe method to each card
    observer.observe(element);
  }
};