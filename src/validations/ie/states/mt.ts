import { extractNumericChars } from '../../../utils';

export function validateMT(ie: string): boolean {
  const ieStr = extractNumericChars(ie);

  const { length } = ieStr;

  if (length !== 11) return false;

  const position = length - 1;
  let weight = 3;
  const body = ieStr.substr(0, position);
  let sum = 0;

  body.split('').forEach(digit => {
    sum += +digit * weight;
    weight--;
    if (weight === 1) {
      weight = 9;
    }
  });

  const rest = sum % 11;
  let dig = 11 - rest;

  if (dig >= 10) {
    dig = 0;
  }

  return dig === +ieStr.charAt(position);
}
