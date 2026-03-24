import { isRepeated } from './utils';

/**
 * The function `validateCNPJ` validates a Brazilian CNPJ number, supporting both
 * the traditional numeric format and the new alphanumeric format introduced by Receita Federal.
 *
 * @param {string} value - The `value` parameter is a string representing the CNPJ number to be validated.
 * It can contain formatting characters (such as '.', '/', '-') and may include letters (A-Z) in the first
 * 12 positions, as allowed in the new alphanumeric CNPJ format.
 *
 * Examples of valid inputs:
 * - '00.000.000/0000-00' (numeric format)
 * - '00000000000000' (numeric without formatting)
 * - 'A1.BC2.34D/56EF-90' (alphanumeric format)
 * - 'A1BC234D56EF90' (alphanumeric without formatting)
 *
 * @returns {boolean} Returns `true` if the CNPJ is valid according to the official
 * validation algorithm (modulo 11), or `false` otherwise.
 *
 * @description
 * The validation process includes:
 * - Normalizing the input by removing all non-alphanumeric characters and converting to uppercase
 * - Verifying that the length is exactly 14 characters
 * - Rejecting sequences with all identical characters
 * - Converting alphanumeric characters to numeric values (A=10, B=11, ..., Z=35)
 * - Calculating the two verification digits using the modulo 11 algorithm
 *
 * This function is fully compatible with both legacy numeric CNPJs and the new alphanumeric standard.
 */
export function validateCNPJ(value: string): boolean {
  const clean = (value || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");

  if (clean.length !== 14 || isRepeated(clean)) {
    return false;
  }

  // Converte caractere para número (0-9 ou A=10 ... Z=35)
  const charToNumber = (char: string): number => {
    if (/[0-9]/.test(char)) return parseInt(char, 10);
    return char.charCodeAt(0) - 55; // A=10, B=11...
  };

  const calculateDigit = (base: string, weights: number[]): number => {
    let sum = 0;

    for (let i = 0; i < base.length; i++) {
      sum += charToNumber(base[i]) * weights[i];
    }

    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const base12 = clean.substring(0, 12);

  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const dv1 = calculateDigit(base12, weights1);

  if (dv1 !== charToNumber(clean[12])) {
    return false;
  }

  const base13 = clean.substring(0, 13);

  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const dv2 = calculateDigit(base13, weights2);

  return dv2 === charToNumber(clean[13]);
}
