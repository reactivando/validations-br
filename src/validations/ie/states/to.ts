/**
 * The function `validateTO` validates the state registration number (IE) for the state of Tocantins
 * (TO) in Brazil.
 * @param {string} ie - The `ie` parameter is a string that represents the state registration number of
 * a company in the state of Tocantins (TO).
 * @returns The function `validateTO` returns a boolean value. It returns `true` if the IE is valid,
 * and `false` otherwise.
 */
export function validateTO(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  if (ieStr.length !== 9 && ieStr.length !== 11) {
    return false;
  }

  const checkDigit = parseInt(ieStr.charAt(ieStr.length - 1), 10);
  let body = '';

  // Businesses founded before 2003 have 11-digit IEs
  // The validation for these is different
  if (ieStr.length === 11) {
    const prefix = ieStr.substring(2, 4);
    const validPrefixes = ['01', '02', '03', '99'];
    if (!validPrefixes.includes(prefix)) {
      return false;
    }
    body = ieStr.substring(0, 2) + ieStr.substring(4, 10);
  } else {
    body = ieStr.substring(0, 8);
  }

  let weight = 9;
  let sum = 0;

  for (let i = 0; i < body.length; i++) {
    sum += parseInt(body.charAt(i), 10) * weight;
    weight--;
  }

  const rest = sum % 11;
  let calculatedDigit = 11 - rest;
  if (rest < 2) {
    calculatedDigit = 0;
  }

  return calculatedDigit === checkDigit;
}
