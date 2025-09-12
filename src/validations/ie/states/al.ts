/**
 * The function `validateAL` validates the state registration number (IE) for the state of Alagoas (AL)
 * in Brazil.
 * @param {string} ie - The `ie` parameter is a string that represents the state registration number of
 * a company in the state of Alagoas (AL).
 * @returns The function `validateAL` returns a boolean value. It returns `true` if the IE is valid,
 * and `false` otherwise.
 */
export function validateAL(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  if (ieStr.length !== 9) {
    return false;
  }

  const body = ieStr.substring(0, 8);
  const checkDigit = parseInt(ieStr.substring(8, 9), 10);

  let weight = 9;
  let sum = 0;

  for (let i = 0; i < body.length; i++) {
    sum += parseInt(body.charAt(i), 10) * weight;
    weight--;
  }

  const product = sum * 10;
  let calculatedDigit = product - Math.floor(product / 11) * 11;

  if (calculatedDigit >= 10) {
    calculatedDigit = 0;
  }

  return calculatedDigit === checkDigit;
}
