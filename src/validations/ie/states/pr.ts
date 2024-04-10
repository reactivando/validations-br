import { extractNumericChars } from '../../../utils';

function calcDigit(body: string): number {
  let weight = body.length - 5;
  let sum = 0;
  body.split('').forEach(digit => {
    sum += +digit * weight;
    weight--;
    if (weight === 1) {
      weight = 7;
    }
  });

  const mod = 11;
  const rest = sum % mod;
  let dig = mod - rest;
  if (dig >= 10) {
    dig = 0;
  }
  return dig;
}

export function validatePR(ie: string): boolean {
  const ieStr = extractNumericChars(ie);

  const { length } = ieStr;

  if (length !== 10) return false;

  const body = ieStr.substr(0, length - 2);

  const firstDig = calcDigit(body);
  const secondDig = calcDigit(body + firstDig);

  const posSecondDig = length - 1;
  const posFirstDig = length - 2;

  const ieAtFirstPos = +ieStr.charAt(posFirstDig);
  const ieAtSecondPos = +ieStr.charAt(posSecondDig);

  return ieAtFirstPos === firstDig && ieAtSecondPos === secondDig;
}
