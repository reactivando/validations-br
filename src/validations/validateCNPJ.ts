import { isRepeated, mod11 } from './utils';

/**
 * The function `validateCNPJ` validates a Brazilian CNPJ number.
 * @param {string} value - The `value` parameter is a string that represents the CNPJ (Cadastro
 * Nacional da Pessoa Jurídica) number to be validated. It can be formatted with or without punctuation,
 * like '00.000.000/0000-00' or '00000000000000'.
 * @returns The function `validateCNPJ` returns a boolean value. It returns `true` if the CNPJ is
 * valid, and `false` otherwise.
 */
export function validateCNPJ(value: string): boolean {
  const clearValue = String(value).replace(/[^\d]+/g, '');
  if (clearValue === '') return false;
  if (clearValue.length !== 14) return false;
  if (isRepeated(clearValue)) {
    return false;
  }
  const valWithoutDvs = clearValue.substring(0, clearValue.length - 2);
  const dv1 = mod11(valWithoutDvs, 9);
  const dv2 = mod11(valWithoutDvs + dv1, 9);
  return valWithoutDvs + dv1 + dv2 === clearValue;
}
