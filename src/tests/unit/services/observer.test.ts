import { Card } from '../../../assets/js/components/Card';
import { observerService } from '../../../assets/js/services/observer';


jest.mock('./path-to-your-Card-file', () => ({
  Card: {
    loadPokemonCard: jest.fn(),
  },
}));

describe('observerService', () => {
  
  let mockObserve: jest.Mock;
  let mockUnobserve: jest.Mock;
  let mockCallback: (entries: IntersectionObserverEntry[]) => void;
  
  beforeEach(() => {
    mockObserve = jest.fn();
    mockUnobserve = jest.fn();
    
    global.IntersectionObserver = jest.fn((callback) => {
      mockCallback = callback;
      return {
        observe: mockObserve,
        unobserve: mockUnobserve,
      };
    }) as unknown as typeof IntersectionObserver;
  });

  describe('initObserver method', () => {

    it('should initialize an IntersectionObserver and observe provided elements', () => {
      const dummyElements: Element[] = [document.createElement('div'), document.createElement('div')];
      observerService.initObserver(dummyElements);

      expect(mockObserve).toHaveBeenCalledTimes(2);
    });

    it('should call loadPokemonCard for intersecting elements and unobserve if intersectionRatio is above 0', () => {
      const dummyElement: Element = document.createElement('div');
      observerService.initObserver([dummyElement]);
      
      mockCallback([{ 
        isIntersecting: true, 
        intersectionRatio: 1, 
        target: dummyElement, 
        boundingClientRect: dummyElement.getBoundingClientRect(), 
        intersectionRect: dummyElement.getBoundingClientRect(), 
        rootBounds: dummyElement.getBoundingClientRect(), 
        time: Date.now(), 
      }]);
      
      expect(void Card.loadPokemonCard).toHaveBeenCalledWith({
        isIntersecting: true, 
        intersectionRatio: 1, 
        target: dummyElement, 
        boundingClientRect: dummyElement.getBoundingClientRect(), 
        intersectionRect: dummyElement.getBoundingClientRect(), 
        rootBounds: dummyElement.getBoundingClientRect(), 
        time: Date.now(),
      });
      expect(mockUnobserve).toHaveBeenCalledWith(dummyElement);
    });

  });
});
