import { isRepeated } from './utils';

/**
 * The function `charToNumber` converts a CNPJ character into the number used by the
 * check digit calculation. Following the Receita Federal spec, the ASCII value of the
 * character is offset by 48, so digits map to themselves ('0' -> 0) and uppercase
 * letters to their code ('A' -> 17).
 * @param {string} char - A single character from the CNPJ base.
 * @returns The numeric value used in the weighted checksum.
 */
function charToNumber(char: string): number {
  return char.charCodeAt(0) - 48;
}

/**
 * The function `generateChecksum` calculates a checksum based on a given base and a weight
 * array. Each character in the `base` is converted with `charToNumber` and multiplied by the
 * corresponding weight at the same index.
 * @param {string} base - The value for which the checksum is calculated.
 * @param {number[]} weight - The weights applied to each character of the base.
 * @returns The calculated MOD 11 check digit.
 */
function generateChecksum(base: string, weight: number[]): number {
  const sum = base
    .split('')
    .reduce((acc, char, i) => acc + charToNumber(char) * weight[i], 0);
  const remainder = sum % 11;

  return remainder < 2 ? 0 : 11 - remainder;
}

const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

/**
 * The function `validateCNPJ` validates a Brazilian CNPJ number, supporting both the
 * traditional numeric format and the alphanumeric format (12 uppercase alphanumeric
 * positions followed by 2 numeric check digits).
 * @param {string} value - The `value` parameter is a string that represents the CNPJ (Cadastro
 * Nacional da Pessoa Jurídica) number to be validated. It can be formatted with or without
 * punctuation, like '00.000.000/0000-00', '00000000000000' or '12.ABC.345/01DE-35'.
 * @returns The function `validateCNPJ` returns a boolean value. It returns `true` if the CNPJ is
 * valid, and `false` otherwise.
 */
export function validateCNPJ(value: string): boolean {
  const cnpj = String(value).replace(/[./-]/g, '');

  if (!/^[A-Z\d]{12}\d{2}$/.test(cnpj) || isRepeated(cnpj)) return false;

  const base = cnpj.substring(0, 12);
  const dv1 = generateChecksum(base, weights1);
  const dv2 = generateChecksum(base + dv1, weights2);

  return `${dv1}${dv2}` === cnpj.substring(12);
}
