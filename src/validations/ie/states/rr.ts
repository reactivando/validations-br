/**
 * The function `validateRR` validates the state registration number (IE) for the state of Roraima (RR)
 * in Brazil.
 * @param {string} ie - The `ie` parameter is a string that represents the state registration number of
 * a company in the state of Roraima (RR).
 * @returns The function `validateRR` returns a boolean value. It returns `true` if the IE is valid,
 * and `false` otherwise.
 */
export function validateRR(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  if (ieStr.length !== 9) {
    return false;
  }

  if (ieStr.substring(0, 2) !== '24') {
    return false;
  }

  const body = ieStr.substring(0, 8);
  const checkDigit = parseInt(ieStr.substring(8, 9), 10);

  let weight = 1;
  let sum = 0;

  for (let i = 0; i < body.length; i++) {
    sum += parseInt(body.charAt(i), 10) * weight;
    weight++;
  }

  const calculatedDigit = sum % 9;
  return calculatedDigit === checkDigit;
}
