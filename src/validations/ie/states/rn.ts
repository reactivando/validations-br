import { extractNumericChars } from '../../../utils';

export function validateRN(ie: string): boolean {
  const ieStr = extractNumericChars(ie);

  const { length } = ieStr;

  if (![9, 10].includes(length)) return false;

  if (ieStr.substr(0, 2) !== '20') return false;

  const position = length - 1;
  let weight = length;
  const body = ieStr.substr(0, position);
  let sum = 0;

  body.split('').forEach(digit => {
    sum += +digit * weight;
    weight--;
  });

  const rest = sum % 11;
  let dig = 11 - rest;

  if (dig >= 10) {
    dig = 0;
  }

  return dig === +ieStr.charAt(position);
}
