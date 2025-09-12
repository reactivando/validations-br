import { validateCE } from './ce';

/**
 * The function `validatePA` validates the state registration number (IE) for the state of Pará (PA)
 * in Brazil.
 * @param {string} ie - The `ie` parameter is a string that represents the state registration number of
 * a company in the state of Pará (PA).
 * @returns The function `validatePA` returns a boolean value. It returns `true` if the IE is valid,
 * and `false` otherwise.
 */
export function validatePA(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  if (ieStr.substring(0, 2) !== '15') {
    return false;
  }

  return validateCE(ieStr);
}
