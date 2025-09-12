/**
 * The function `calcFirstDigit` calculates the first check digit for the state registration number (IE)
 * of Minas Gerais (MG).
 * @param {string} body - The `body` parameter is a string of 11 digits.
 * @returns The function `calcFirstDigit` returns a single-digit number, which is the calculated first
 * check digit.
 */
function calcFirstDigit(body: string): number {
  const bodyWithZero = `${body.slice(0, 3)}0${body.slice(3)}`;
  let weightedSum = '';
  for (let i = 0; i < bodyWithZero.length; i++) {
    const weight = (i + 1) % 2 === 0 ? 2 : 1;
    weightedSum += (parseInt(bodyWithZero.charAt(i), 10) * weight).toString();
  }
  let sum = 0;
  for (let i = 0; i < weightedSum.length; i++) {
    sum += parseInt(weightedSum.charAt(i), 10);
  }
  const sumString = sum.toString();
  const lastDigit = parseInt(sumString.charAt(sumString.length - 1), 10);

  return lastDigit === 0 ? 0 : 10 - lastDigit;
}

/**
 * The function `calcSecondDigit` calculates the second check digit for the state registration number
 * (IE) of Minas Gerais (MG).
 * @param {string} body - The `body` parameter is a string of 12 digits.
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
      weight = 11;
    }
  }
  const rest = sum % 11;
  let digit = 11 - rest;
  if (digit >= 10) {
    digit = 0;
  }
  return digit;
}

/**
 * The function `validateMG` validates the state registration number (IE) for the state of Minas Gerais
 * (MG) in Brazil.
 * @param {string} ie - The `ie` parameter is a string that represents the state registration number of
 * a company in the state of Minas Gerais (MG).
 * @returns The function `validateMG` returns a boolean value. It returns `true` if the IE is valid,
 * and `false` otherwise.
 */
export function validateMG(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  if (ieStr.length !== 13) {
    return false;
  }

  const body = ieStr.substring(0, 11);
  const firstDigit = calcFirstDigit(body);
  const secondDigit = calcSecondDigit(body + firstDigit);

  const checkDigits = `${firstDigit}${secondDigit}`;

  return ieStr.substring(ieStr.length - 2) === checkDigits;
}
