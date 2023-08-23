import { Card } from '../components/Card';

/**
 * A service to handle the intersection behavior of elements using the IntersectionObserver API.
 * Specifically designed to trigger the loading of Pokemon cards when an element comes into view.
*/
export const observerService = {
  /**
   * Initializes an IntersectionObserver to load Pokemon cards for intersecting elements.
   * When an element comes into view (intersects), the `loadPokemonCard` function is triggered for that element.
   * If an element's intersection ratio exceeds 0, it's unobserved to prevent further triggers.
   *
   * @param observableElements - The list of elements to observe for intersections.
  */
  initObserver(observableElements: NodeListOf<Element>) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const intersecting = entry.isIntersecting;
        if (entry.intersectionRatio > 0) {
          observer.unobserve(entry.target);
        }
        if (intersecting) {
          void Card.loadPokemonCard(entry.target as HTMLElement);
        }
      }
    });
    
    for (const element of observableElements) {
      observer.observe(element);
    }
  },
};