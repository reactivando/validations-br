import { isRepeated } from './utils';

// First 12 positions accept the alphanumeric base (uppercase letters or digits);
// the 2 check digits are always numeric. See the Receita Federal spec:
// https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/documentos-tecnicos/cnpj
const cnpjRegex = /^[A-Z\d]{12}\d{2}$/;
const maskRegex = /[./-]/g;
const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

/**
 * The function `charToNumber` converts a CNPJ base character into the value used by the
 * check-digit calculation. Following the Receita Federal spec, the character's ASCII code
 * is offset by 48, so digits map to themselves ('0' -> 0) and uppercase letters to their
 * code ('A' -> 17, 'B' -> 18, ... 'Z' -> 42).
 * @param {string} char - A single character from the CNPJ base.
 * @returns The numeric value used in the weighted checksum.
 */
function charToNumber(char: string): number {
  return char.charCodeAt(0) - 48;
}

/**
 * The function `generateChecksum` calculates a MOD 11 check digit for a given base and a
 * weight array. Each character of the `base` is converted with `charToNumber` and multiplied
 * by the corresponding weight at the same index.
 * @param {string} base - The value for which the check digit is calculated.
 * @param {number[]} weights - The weights applied to each character of the base.
 * @returns The calculated check digit (0-9).
 */
function generateChecksum(base: string, weights: number[]): number {
  let sum = 0;
  for (let i = 0; i < base.length; i++) {
    sum += charToNumber(base[i]) * weights[i];
  }
  const remainder = sum % 11;

  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * The function `validateCNPJ` validates a Brazilian CNPJ number, supporting both the
 * traditional numeric format and the alphanumeric format (12 uppercase alphanumeric
 * positions followed by 2 numeric check digits) introduced by Receita Federal.
 * @param {string} value - The `value` parameter is a string that represents the CNPJ
 * (Cadastro Nacional da Pessoa Jurídica) to be validated. It can be formatted with or without
 * punctuation, like '00.000.000/0000-00', '00000000000000' or '12.ABC.345/01DE-35'.
 * @returns The function `validateCNPJ` returns a boolean value. It returns `true` if the CNPJ
 * is valid, and `false` otherwise.
 */
export function validateCNPJ(value: string): boolean {
  const cnpj = String(value).replace(maskRegex, '');

  if (!cnpjRegex.test(cnpj) || isRepeated(cnpj)) {
    return false;
  }

  const base = cnpj.substring(0, 12);
  const dv1 = generateChecksum(base, weights1);
  const dv2 = generateChecksum(base + dv1, weights2);

  return `${dv1}${dv2}` === cnpj.substring(12);
}
