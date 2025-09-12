/**
 * The function `getModule` determines the module to be used in the validation of the state
 * registration number (IE) for the state of Bahia (BA).
 * @param {string} ie - The `ie` parameter is a string that represents the state registration number of
 * a company in the state of Bahia (BA).
 * @returns The function `getModule` returns either 10 or 11, depending on the first digit of the IE.
 */
function getModule(ie: string): number {
  const charAt = parseInt(ie.charAt(ie.length === 9 ? 1 : 0), 10);
  const validModules = [0, 1, 2, 3, 4, 5, 8];
  return validModules.includes(charAt) ? 10 : 11;
}

/**
 * The function `calcDigit` calculates a check digit for a given string of numbers and a module.
 * @param {string} body - The `body` parameter is a string of digits for which the check digit is
 * calculated.
 * @param {number} mod - The `mod` parameter is the module to be used in the calculation.
 * @returns The function `calcDigit` returns a single-digit number, which is the calculated check
 * digit.
 */
function calcDigit(body: string, mod: number): number {
  let weight = body.length + 1;
  let sum = 0;
  for (let i = 0; i < body.length; i++) {
    sum += parseInt(body.charAt(i), 10) * weight;
    weight--;
  }
  const rest = sum % mod;
  let dig = mod - rest;
  if (dig >= 10) {
    dig = 0;
  }
  return dig;
}

/**
 * The function `validateBA` validates the state registration number (IE) for the state of Bahia (BA)
 * in Brazil.
 * @param {string} ie - The `ie` parameter is a string that represents the state registration number of
 * a company in the state of Bahia (BA).
 * @returns The function `validateBA` returns a boolean value. It returns `true` if the IE is valid,
 * and `false` otherwise.
 */
export function validateBA(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');
  const { length } = ieStr;

  if (![8, 9].includes(length)) {
    return false;
  }

  const body = ieStr.substring(0, length - 2);
  const mod = getModule(ieStr);
  const secondDig = calcDigit(body, mod);
  const firstDig = calcDigit(body + secondDig, mod);

  const checkDigits = `${firstDig}${secondDig}`;

  return ieStr.substring(length - 2) === checkDigits;
}
