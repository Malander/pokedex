/**
 * Capitalizes the first character of a given string.
 * 
 * @example
 * ucFirst('pokemon') // returns 'Pokemon'
 * 
 * @param value - The string whose first character is to be capitalized.
 * 
 * @returns The input string with its first character capitalized.
*/
export const ucFirst = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

/**
 * Formats a number to a string with leading zeros (padded to 4 digits) and prefixed with a '#'.
 * 
 * @example
 * formatNumberToHash(23) // returns '#0023'
 * 
 * @param value - The number to be formatted.
 * 
 * @returns A string representation of the number, padded and prefixed with a '#'.
*/
export const formatNumberToHash = (value: number) => {
  const formattedNumber = value.toString().padStart(4, '0');
  return `#${formattedNumber}`;
};