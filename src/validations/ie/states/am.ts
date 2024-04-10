import { extractNumericChars } from '../../../utils';

export function validateAM(ie: string): boolean {
  const ieStr = extractNumericChars(ie);

  if (ieStr.length !== 9) return false;

  const { length } = ieStr;
  const position = length - 1;
  let weight = length;
  const body = ieStr.substr(0, position);
  let sum = 0;
  let dig = 0;
  body.split('').forEach(digit => {
    sum += +digit * weight;
    weight--;
  });

  if (sum < 11) {
    dig = 11 - sum;
  } else {
    const rest = sum % 11;
    dig = 11 - rest;
    if (dig >= 10) {
      dig = 0;
    }
  }

  return dig === +ieStr.charAt(position);
}
