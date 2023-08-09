import { card } from '../components/card';

/**
 * Initializes an IntersectionObserver to load Pokemon cards for intersecting elements.
 *
 * @param {NodeListOf<Element>} observableElements - The list of elements to observe for intersections.
*/
export const initObserver = (observableElements: NodeListOf<Element>) => {
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