import { isRepeated } from './utils';

/**
 * The function `validateCNH` validates a Brazilian driver's license number (CNH).
 * @param {string} value - The `value` parameter is a string that represents the CNH (Carteira Nacional
 * de Habilitação) number to be validated. It can be formatted with or without punctuation.
 * @returns The function `validateCNH` returns a boolean value, indicating whether the provided CNH is
 * valid or not.
 */
export function validateCNH(value: string) {
  const clearValue = String(value).replace(/\D/g, '');
  if (!clearValue || isRepeated(clearValue)) {
    return false;
  }
  let val = 0;
  for (let i = 0, j = 9; i < 9; ++i, --j) {
    val += Number(clearValue.charAt(i)) * j;
  }
  let dsc = 0;
  let vl1 = val % 11;
  if (vl1 >= 10) {
    vl1 = 0;
    dsc = 2;
  }
  val = 0;
  for (let i = 0, j = 1; i < 9; ++i, ++j) {
    val += Number(clearValue.charAt(i)) * j;
  }
  const x = val % 11;
  const vl2 = x >= 10 ? 0 : x - dsc;
  return `${vl1}${vl2}` === clearValue.substring(clearValue.length - 2);
}
