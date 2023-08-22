import { Card } from '../../assets/js/components/Card';
import { observerService } from '../../assets/js/services/observer';
import { createMockIntersectionObserverEntry } from '../mockData';

jest.mock('../../assets/js/components/Card');

describe('observerService', () => {
  let mockObserve: jest.Mock;
  let mockUnobserve: jest.Mock;
  let mockCallback: (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void;
  const mockedLoadCard = Card.loadPokemonCard as jest.MockedFunction<typeof Card.loadPokemonCard>;
  let mockElement: HTMLDivElement;
  let observableElements: NodeListOf<Element>;

  beforeEach(() => {
    mockObserve = jest.fn();
    mockUnobserve = jest.fn();
    
    global.IntersectionObserver = jest.fn((callback) => {
      mockCallback = (entries: IntersectionObserverEntry[]) => {
        callback(entries, {} as IntersectionObserver);
      };
      return {
        observe: mockObserve,
        unobserve: mockUnobserve,
        root: null,
        rootMargin: '',
        thresholds: [0],
        disconnect: jest.fn(),
        takeRecords: jest.fn(() => []),
      };
    });

    // Common element setup
    mockElement = document.createElement('div');
    document.body.appendChild(mockElement);
    observableElements = document.querySelectorAll('div');
  });

  afterEach(() => {
    document.body.removeChild(mockElement);
    jest.clearAllMocks();
  });

  describe('When initializing observer', () => {
    beforeEach(() => {
      observerService.initObserver(observableElements);
    });

    it('should observe elements', () => {
      expect(mockObserve).toHaveBeenCalledWith(mockElement);
    });

    it('should trigger loadPokemonCard when an element is intersecting', () => {
      mockCallback([createMockIntersectionObserverEntry({ intersectionRatio: 0.5 })], {} as IntersectionObserver);
      expect(mockedLoadCard).toHaveBeenCalledWith(mockElement);
    });

    it('should NOT trigger loadPokemonCard if an element is NOT intersecting', () => {
      mockCallback([createMockIntersectionObserverEntry({ isIntersecting: false })], {} as IntersectionObserver);
      expect(mockedLoadCard).not.toHaveBeenCalled();
    });

    it('should unobserve an element when its intersection ratio exceeds 0', () => {
      mockCallback([createMockIntersectionObserverEntry()], {} as IntersectionObserver);
      expect(mockUnobserve).toHaveBeenCalledWith(mockElement);
    });
  });
});