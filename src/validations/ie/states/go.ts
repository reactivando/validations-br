/**
 * The function `validateGO` validates the state registration number (IE) for the state of Goiás (GO)
 * in Brazil.
 * @param {string} ie - The `ie` parameter is a string that represents the state registration number of
 * a company in the state of Goiás (GO).
 * @returns The function `validateGO` returns a boolean value. It returns `true` if the IE is valid,
 * and `false` otherwise.
 */
export function validateGO(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  if (ieStr.length !== 9) {
    return false;
  }

  const prefix = ieStr.substring(0, 2);
  if (
    prefix !== '10' &&
    prefix !== '11' &&
    prefix !== '15' &&
    prefix !== '20'
  ) {
    return false;
  }

  const body = ieStr.substring(0, 8);
  const checkDigit = parseInt(ieStr.substring(8, 9), 10);
  const bodyInt = parseInt(body, 10);

  let weight = 9;
  let sum = 0;

  for (let i = 0; i < body.length; i++) {
    sum += parseInt(body.charAt(i), 10) * weight;
    weight--;
  }

  const rest = sum % 11;
  let calculatedDigit = 11 - rest;

  if (calculatedDigit >= 10) {
    if (calculatedDigit === 11 && bodyInt >= 10103105 && bodyInt <= 10119997) {
      calculatedDigit = 1;
    } else {
      calculatedDigit = 0;
    }
  }

  return calculatedDigit === checkDigit;
}
