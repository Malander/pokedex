/**
 * Capitalize first letter of a given word
 * @param  {number} value String to be capitalized
 */
export const ucFirst = (value: string) => value.charAt(0).toUpperCase() + value.slice(1)

/**
 * Given a number returns a string filled with zeros and ending with the number until it reaches 4 digits
 * @param  {number} value Number to be converted in Pokemon Id format
 */
export const formatNumberToHash = (value: number) => {
  const formattedNumber = value.toString().padStart(4, '0');
  return `#${formattedNumber}`;
}