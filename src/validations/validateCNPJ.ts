import { isRepeated } from './utils';

/**
 * The function `validateCNPJ` validates a Brazilian CNPJ number.
 * @param {string} value - The `value` parameter is a string that represents the CNPJ (Cadastro
 * Nacional da Pessoa Jurídica) number to be validated. It can be formatted with or without punctuation,
 * like '00.000.000/0000-00' or '00000000000000'.
 * @returns The function `validateCNPJ` returns a boolean value. It returns `true` if the CNPJ is
 * valid, and `false` otherwise.
 */
export function validateCNPJ(value: string): boolean {
  const cnpj = String(value).replace(/[^\d]+/g, '');

  if (cnpj === '' || cnpj.length !== 14 || isRepeated(cnpj)) {
    return false;
  }

  const calculateDigit = (numbers: string, weights: number[]): number => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers.charAt(i), 10) * weights[i];
    }
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  }

  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const first12 = cnpj.substring(0, 12);
  const dv1 = calculateDigit(first12, weights1);

  if (dv1 !== parseInt(cnpj.charAt(12), 10)) {
      return false;
  }

  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const first13 = cnpj.substring(0, 13);
  const dv2 = calculateDigit(first13, weights2);

  return dv2 === parseInt(cnpj.charAt(13), 10);
}
