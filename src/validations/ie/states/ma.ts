import { validateCE } from './ce';

/**
 * The function `validateMA` validates the state registration number (IE) for the state of Maranhão
 * (MA) in Brazil.
 * @param {string} ie - The `ie` parameter is a string that represents the state registration number of
 * a company in the state of Maranhão (MA).
 * @returns The function `validateMA` returns a boolean value. It returns `true` if the IE is valid,
 * and `false` otherwise.
 */
export function validateMA(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  if (ieStr.substring(0, 2) !== '12') {
    return false;
  }

  return validateCE(ieStr);
}
