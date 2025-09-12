/**
 * The function `calcDigit` calculates a check digit for a given string of numbers.
 * @param {string} body - The `body` parameter is a string of digits for which the check digit is
 * calculated.
 * @returns The function `calcDigit` returns a single-digit number, which is the calculated check
 * digit.
 */
function calcDigit(body: string): number {
  let weight = body.length + 1;
  let sum = 0;
  for (let i = 0; i < body.length; i++) {
    sum += parseInt(body.charAt(i), 10) * weight;
    weight--;
  }

  const mod = 11;
  const rest = sum % mod;
  let dig = mod - rest;
  if (dig >= 10) {
    dig = 0;
  }
  return dig;
}

/**
 * The function `validatePE` validates the state registration number (IE) for the state of Pernambuco
 * (PE) in Brazil.
 * @param {string} ie - The `ie` parameter is a string that represents the state registration number of
 * a company in the state of Pernambuco (PE).
 * @returns The function `validatePE` returns a boolean value. It returns `true` if the IE is valid,
 * and `false` otherwise.
 */
export function validatePE(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  if (ieStr.length !== 9) {
    return false;
  }

  const body = ieStr.substring(0, 7);
  const firstDig = calcDigit(body);
  const secondDig = calcDigit(body + firstDig);

  const checkDigits = `${firstDig}${secondDig}`;

  return ieStr.substring(ieStr.length - 2) === checkDigits;
}
