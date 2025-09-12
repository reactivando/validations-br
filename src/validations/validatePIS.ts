import { isRepeated } from './utils';

/**
 * The function `generateChecksum` calculates a checksum based on a given base number and a weight
 * array.
 * @param {string | number} base - The `base` parameter can be either a string or a number. It is the
 * value for which the checksum is calculated.
 * @param {number[]} weight - The `weight` parameter is an array of numbers that is used to calculate
 * the checksum. Each digit in the `base` is multiplied by the corresponding weight at the same index.
 * @returns The function `generateChecksum` returns the calculated checksum value.
 */
function generateChecksum(base: string | number, weight: number[]): number {
  const digits = String(base).replace(/[^\d]/g, '');

  return digits
    .split('')
    .reduce((acc, digit, i) => acc + +digit * weight[i], 0);
}

const weights = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

/**
 * The function `validatePIS` validates a PIS number, which is a Brazilian social identification
 * number.
 * @param {string} pis - The `pis` parameter is a string that represents the PIS number to be
 * validated.
 * @returns The function `validatePIS` returns a boolean value. It returns `true` if the PIS is valid,
 * and `false` otherwise.
 */
export function validatePIS(pis: string): boolean {
  const pisStr = String(pis).replace(/\D/g, '');

  if (pisStr.length !== 11 || isRepeated(pisStr) || !/^[0-9]+$/.test(pisStr))
    return false;

  const weightedChecksum = generateChecksum(
    pisStr.substring(0, pisStr.length - 1),
    weights,
  );
  const verifyingDigit = +pisStr.charAt(pisStr.length - 1);
  const remainder = weightedChecksum % 11;
  let calculatedDigit = 11 - remainder;

  if (calculatedDigit === 10 || calculatedDigit === 11) {
    calculatedDigit = 0;
  }

  return calculatedDigit === verifyingDigit;
}
