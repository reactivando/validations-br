import { validateCE } from './ce';

/**
 * The function `validateMS` validates the state registration number (IE) for the state of Mato Grosso
 * do Sul (MS) in Brazil.
 * @param {string} ie - The `ie` parameter is a string that represents the state registration number of
 * a company in the state of Mato Grosso do Sul (MS).
 * @returns The function `validateMS` returns a boolean value. It returns `true` if the IE is valid,
 * and `false` otherwise.
 */
export function validateMS(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  if (ieStr.substring(0, 2) !== '28') {
    return false;
  }

  return validateCE(ieStr);
}
