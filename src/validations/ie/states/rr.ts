import { extractNumericChars } from '../../../utils';

export function validateRR(ie: string): boolean {
  const ieStr = extractNumericChars(ie);

  const { length } = ieStr;

  if (length !== 9) return false;

  if (ieStr.substr(0, 2) !== '24') return false;

  const position = length - 1;
  let weight = 1;
  const body = ieStr.substr(0, position);
  let sum = 0;

  body.split('').forEach(digit => {
    sum += +digit * weight;
    weight++;
  });

  const dig = sum % 9;
  return dig === +ieStr.charAt(position);
}
