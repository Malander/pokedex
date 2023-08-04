/**
 * Capitalize first letter of a given word
 * @param value String to be capitalized
 */
export const ucFirst = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

/**
 * Given a number returns a string filled with zeros and ending with the number until it reaches 4 digits
 * @param value  Number to be converted in Pokemon Id format
 * @returns string
 */
export const formatNumberToHash = (value: number) => {
  const formattedNumber = value.toString().padStart(4, '0');
  return `#${formattedNumber}`;
};