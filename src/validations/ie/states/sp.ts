/**
 * The function `calcFirstDigit` calculates the first check digit for the state registration number (IE)
 * of São Paulo (SP).
 * @param {string} body - The `body` parameter is a string of 8 digits.
 * @returns The function `calcFirstDigit` returns a single-digit number, which is the calculated first
 * check digit.
 */
function calcFirstDigit(body: string): number {
  const weight = [1, 3, 4, 5, 6, 7, 8, 10];
  let sum = 0;
  for (let i = 0; i < body.length; i++) {
    sum += parseInt(body.charAt(i), 10) * weight[i];
  }
  const dig = sum % 11;
  const digit = dig.toString();
  return parseInt(digit.substring(digit.length - 1), 10);
}

/**
 * The function `calcSecondDigit` calculates the second check digit for the state registration number
 * (IE) of São Paulo (SP).
 * @param {string} body - The `body` parameter is a string of 11 digits.
 * @returns The function `calcSecondDigit` returns a single-digit number, which is the calculated
 * second check digit.
 */
function calcSecondDigit(body: string): number {
  let weight = 3;
  let sum = 0;
  for (let i = 0; i < body.length; i++) {
    sum += parseInt(body.charAt(i), 10) * weight;
    weight--;
    if (weight === 1) {
      weight = 10;
    }
  }
  const dig = sum % 11;
  const digit = dig.toString();
  return parseInt(digit.substring(digit.length - 1), 10);
}

/**
 * The function `validateSP` validates the state registration number (IE) for the state of São Paulo
 * (SP) in Brazil.
 * @param {string} ie - The `ie` parameter is a string that represents the state registration number of
 * a company in the state of São Paulo (SP).
 * @returns The function `validateSP` returns a boolean value. It returns `true` if the IE is valid,
 * and `false` otherwise.
 */
export function validateSP(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  if (ieStr.length !== 12) {
    return false;
  }

  const firstCheckDigit = parseInt(ieStr.charAt(8), 10);
  const secondCheckDigit = parseInt(ieStr.charAt(11), 10);

  const firstCalculatedDigit = calcFirstDigit(ieStr.substring(0, 8));
  const secondCalculatedDigit = calcSecondDigit(ieStr.substring(0, 11));

  return (
    firstCalculatedDigit === firstCheckDigit &&
    secondCalculatedDigit === secondCheckDigit
  );
}
