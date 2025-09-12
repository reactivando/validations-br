/**
 * The function `calcDigit` calculates a check digit for a given string of numbers.
 * @param {string} body - The `body` parameter is a string of digits for which the check digit is
 * calculated.
 * @returns The function `calcDigit` returns a single-digit number, which is the calculated check
 * digit.
 */
function calcDigit(body: string): number {
  let weight = body.length - 7;
  let sum = 0;
  body.split('').forEach(digit => {
    sum += +digit * weight;
    weight--;
    if (weight === 1) {
      weight = 9;
    }
  });

  const mod = 11;
  const rest = sum % mod;
  let dig = mod - rest;
  if (dig >= 10) {
    dig = 0;
  }
  return dig;
}

/**
 * The function `validateDF` validates the state registration number (IE) for the Federal District (DF)
 * in Brazil.
 * @param {string} ie - The `ie` parameter is a string that represents the state registration number of
 * a company in the Federal District (DF).
 * @returns The function `validateDF` returns a boolean value. It returns `true` if the IE is valid,
 * and `false` otherwise.
 */
export function validateDF(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  if (ieStr.length !== 13) {
    return false;
  }

  const prefix = ieStr.substring(0, 2);
  if (prefix !== '07' && prefix !== '08') {
    return false;
  }

  const body = ieStr.substring(0, 11);
  const firstDig = calcDigit(body);
  const secondDig = calcDigit(body + firstDig);

  const checkDigits = `${firstDig}${secondDig}`;

  return ieStr.substring(ieStr.length - 2) === checkDigits;
}
