import { isRepeated } from './utils';

/**
 * The function `validateCNH` validates a Brazilian driver's license number (CNH).
 * @param {string} value - The `value` parameter is a string that represents the CNH (Carteira Nacional
 * de Habilitação) number to be validated. It can be formatted with or without punctuation.
 * @returns The function `validateCNH` returns a boolean value, indicating whether the provided CNH is
 * valid or not.
 */
export function validateCNH(value: string) {
  const cnh = String(value).replace(/\D/g, '');

  if (cnh.length !== 11 || isRepeated(cnh)) {
    return false;
  }

  let v = 0;
  let j = 9;
  for (let i = 0; i < 9; ++i) {
    v += parseInt(cnh.charAt(i), 10) * j--;
  }

  let dv1 = v % 11;
  let dsc = 0;
  if (dv1 >= 10) {
    dv1 = 0;
    dsc = 2;
  }

  v = 0;
  j = 1;
  for (let i = 0; i < 9; ++i) {
    v += parseInt(cnh.charAt(i), 10) * j++;
  }

  let dv2 = v % 11;
  if (dv2 >= 10) {
    dv2 = 0;
  }

  dv2 -= dsc;

  if (dv2 < 0) {
    dv2 += 11;
  }

  return (
    dv1 === parseInt(cnh.charAt(9), 10) && dv2 === parseInt(cnh.charAt(10), 10)
  );
}
