/**
 * The function `calcOldDigit` calculates the check digit for the old format of the state registration
 * number (IE) of Tocantins (TO).
 * @param {string} ie - The `ie` parameter is a string of 8 digits.
 * @returns The function `calcOldDigit` returns a single-digit number, which is the calculated check
 * digit.
 */
function calcOldDigit(ie: string): number {
  const body = ie.substring(0, 8);
  let weight = 9;
  let sum = 0;
  for (let i = 0; i < body.length; i++) {
    sum += parseInt(body.charAt(i), 10) * weight;
    weight--;
  }
  const rest = sum % 11;
  let dig = 11 - rest;
  if (dig >= 10) {
    dig = 0;
  }
  return dig;
}

/**
 * The function `validateOldTO` validates the old format of the state registration number (IE) for the
 * state of Tocantins (TO).
 * @param {string} ie - The `ie` parameter is a string that represents the state registration number of
 * a company in the state of Tocantins (TO).
 * @returns The function `validateOldTO` returns a boolean value. It returns `true` if the IE is valid,
 * and `false` otherwise.
 */
function validateOldTO(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');
  if (ieStr.length !== 9) {
    return false;
  }
  const body = ieStr.substring(0, 8);
  const checkDigit = parseInt(ieStr.substring(8, 9), 10);
  const prefix = ieStr.substring(2, 4);
  const validPrefixes = ['01', '02', '03', '99'];
  if (!validPrefixes.includes(prefix)) {
    return false;
  }
  const calculatedDigit = calcOldDigit(body);
  return calculatedDigit === checkDigit;
}

/**
 * The function `calcNewDigit` calculates the check digit for the new format of the state registration
 * number (IE) of Tocantins (TO).
 * @param {string} ie - The `ie` parameter is a string of 10 digits.
 * @returns The function `calcNewDigit` returns a single-digit number, which is the calculated check
 * digit.
 */
function calcNewDigit(ie: string): number {
  const body = ie.substring(0, 10);
  let weight = 9;
  let sum = 0;
  for (let i = 0; i < body.length; i++) {
    sum += parseInt(body.charAt(i), 10) * weight;
    weight--;
  }
  const rest = sum % 11;
  let dig = 11 - rest;
  if (rest < 2) {
    dig = 0;
  }
  return dig;
}

/**
 * The function `validateNewTO` validates the new format of the state registration number (IE) for the
 * state of Tocantins (TO).
 * @param {string} ie - The `ie` parameter is a string that represents the state registration number of
 * a company in the state of Tocantins (TO).
 * @returns The function `validateNewTO` returns a boolean value. It returns `true` if the IE is valid,
 * and `false` otherwise.
 */
function validateNewTO(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');
  if (ieStr.length !== 11) {
    return false;
  }
  const body = ieStr.substring(0, 10);
  const checkDigit = parseInt(ieStr.substring(10, 11), 10);
  const calculatedDigit = calcNewDigit(body);
  return calculatedDigit === checkDigit;
}

/**
 * The function `validateTO` validates the state registration number (IE) for the state of Tocantins
 * (TO) in Brazil. It supports both old and new formats.
 * @param {string} ie - The `ie` parameter is a string that represents the state registration number of
 * a company in the state of Tocantins (TO).
 * @returns The function `validateTO` returns a boolean value. It returns `true` if the IE is valid,
 * and `false` otherwise.
 */
export function validateTO(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');
  if (ieStr.length === 9) {
    return validateOldTO(ieStr);
  }
  if (ieStr.length === 11) {
    return validateNewTO(ieStr);
  }
  return false;
}
