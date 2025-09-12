import { isRepeated, mod11 } from './utils';

/**
 * The function `validateCPF` validates a Brazilian CPF number, checking its length, format, and check
 * digits.
 * @param {string} value - The `value` parameter is a string that represents the CPF (Cadastro de
 * Pessoas Físicas) number to be validated. It can be in the format '000.000.000-00' or
 * '00000000000'.
 * @returns The function `validateCPF` returns a boolean value. It returns `true` if the CPF is valid,
 * and `false` otherwise.
 */
export function validateCPF(value: string): boolean {
  const clearValue = String(value).replace(/\D/g, '');
  if (clearValue.length !== 11) {
    return false;
  }
  const valWithoutDvs = clearValue.substring(0, clearValue.length - 2);
  if (!clearValue || isRepeated(clearValue)) {
    return false;
  }
  const dv1 = mod11(valWithoutDvs, 12);
  const dv2 = mod11(valWithoutDvs + dv1, 12);
  return valWithoutDvs + dv1 + dv2 === clearValue;
}
