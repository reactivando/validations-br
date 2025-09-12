/**
 * The function `validateAP` validates the state registration number (IE) for the state of Amapá (AP)
 * in Brazil.
 * @param {string} ie - The `ie` parameter is a string that represents the state registration number of
 * a company in the state of Amapá (AP).
 * @returns The function `validateAP` returns a boolean value. It returns `true` if the IE is valid,
 * and `false` otherwise.
 */
export function validateAP(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  if (ieStr.length !== 9) {
    return false;
  }

  if (ieStr.substring(0, 2) !== '03') {
    return false;
  }

  const body = ieStr.substring(0, 8);
  const checkDigit = parseInt(ieStr.substring(8, 9), 10);
  const bodyInt = parseInt(body, 10);

  let p = 0;
  let d = 0;

  if (bodyInt >= 3000001 && bodyInt <= 3017000) {
    p = 5;
    d = 0;
  } else if (bodyInt >= 3017001 && bodyInt <= 3019022) {
    p = 9;
    d = 1;
  }

  let weight = 9;
  let sum = p;

  for (let i = 0; i < body.length; i++) {
    sum += parseInt(body.charAt(i), 10) * weight;
    weight--;
  }

  let calculatedDigit = 11 - (sum % 11);
  if (calculatedDigit === 10) {
    calculatedDigit = 0;
  } else if (calculatedDigit === 11) {
    calculatedDigit = d;
  }

  return calculatedDigit === checkDigit;
}
