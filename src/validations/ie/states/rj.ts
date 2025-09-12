/**
 * The function `validateRJ` validates the state registration number (IE) for the state of Rio de
 * Janeiro (RJ) in Brazil.
 * @param {string} ie - The `ie` parameter is a string that represents the state registration number of
 * a company in the state of Rio de Janeiro (RJ).
 * @returns The function `validateRJ` returns a boolean value. It returns `true` if the IE is valid,
 * and `false` otherwise.
 */
export function validateRJ(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  if (ieStr.length !== 8) {
    return false;
  }

  const body = ieStr.substring(0, 7);
  const checkDigit = parseInt(ieStr.substring(7, 8), 10);

  let weight = 2;
  let sum = 0;

  for (let i = 0; i < body.length; i++) {
    sum += parseInt(body.charAt(i), 10) * weight;
    weight--;
    if (weight === 1) {
      weight = 7;
    }
  }

  const rest = sum % 11;
  let calculatedDigit = 11 - rest;

  if (calculatedDigit >= 10) {
    calculatedDigit = 0;
  }

  return calculatedDigit === checkDigit;
}
