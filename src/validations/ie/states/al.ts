import { extractNumericChars } from '../../../utils';

export function validateAL(ie: string): boolean {
  const ieStr = extractNumericChars(ie);

  if (ieStr.length !== 9) return false;

  let weight = 9;
  const position = 8;
  let sum = 0;

  for (let i = 0; i < position; i++) {
    sum += +ieStr.charAt(i) * weight;
    weight--;
  }

  const product = sum * 10;
  let digit = product - Math.floor(product / 11) * 11;

  if (digit >= 10) {
    digit = 0;
  }

  return digit === +ieStr.charAt(position);
}
