import { formatNumberToHash, ucFirst } from '../../../js/utils/utils';

describe('ucFirst', () => {
  it('should capitalize the first letter of a string', () => {
    expect(ucFirst('poison')).toBe('Poison');
    expect(ucFirst('charmander')).toBe('Charmander');
    expect(ucFirst('bulbasaur')).toBe('Bulbasaur');
  });

  it('should handle empty strings without errors', () => {
    expect(ucFirst('')).toBe('');
  });
});

describe('formatNumberToHash', () => {
  it('should format a number with leading zeros and prefix with a #', () => {
    expect(formatNumberToHash(203)).toBe('#0203');
    expect(formatNumberToHash(9)).toBe('#0009');
    expect(formatNumberToHash(13)).toBe('#0013');
  });

  it('should return the number as is if it has 4 or more digits', () => {
    expect(formatNumberToHash(2000)).toBe('#2000');
    expect(formatNumberToHash(99999)).toBe('#99999');
  });
});