/**
 * The function `validateRS` validates the state registration number (IE) for the state of Rio Grande
 * do Sul (RS) in Brazil.
 * @param {string} ie - The `ie` parameter is a string that represents the state registration number of
 * a company in the state of Rio Grande do Sul (RS).
 * @returns The function `validateRS` returns a boolean value. It returns `true` if the IE is valid,
 * and `false` otherwise.
 */
export function validateRS(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  if (ieStr.length !== 10) {
    return false;
  }

  const body = ieStr.substring(0, 9);
  const checkDigit = parseInt(ieStr.substring(9, 10), 10);

  let weight = 2;
  let sum = 0;

  for (let i = 0; i < body.length; i++) {
    sum += parseInt(body.charAt(i), 10) * weight;
    weight--;
    if (weight === 1) {
      weight = 9;
    }
  }

  const rest = sum % 11;
  let calculatedDigit = 11 - rest;

  if (calculatedDigit >= 10) {
    calculatedDigit = 0;
  }

  return calculatedDigit === checkDigit;
}
