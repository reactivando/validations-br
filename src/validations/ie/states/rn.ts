/**
 * The function `validateRN` validates the state registration number (IE) for the state of Rio Grande
 * do Norte (RN) in Brazil.
 * @param {string} ie - The `ie` parameter is a string that represents the state registration number of
 * a company in the state of Rio Grande do Norte (RN).
 * @returns The function `validateRN` returns a boolean value. It returns `true` if the IE is valid,
 * and `false` otherwise.
 */
export function validateRN(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');
  const { length } = ieStr;

  if (![9, 10].includes(length)) {
    return false;
  }

  if (ieStr.substring(0, 2) !== '20') {
    return false;
  }

  const body = ieStr.substring(0, length - 1);
  const checkDigit = parseInt(ieStr.substring(length - 1), 10);

  let weight = length;
  let sum = 0;

  for (let i = 0; i < body.length; i++) {
    sum += parseInt(body.charAt(i), 10) * weight;
    weight--;
  }

  const rest = sum % 11;
  let calculatedDigit = 11 - rest;

  if (calculatedDigit >= 10) {
    calculatedDigit = 0;
  }

  return calculatedDigit === checkDigit;
}
