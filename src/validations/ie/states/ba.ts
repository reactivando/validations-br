import { extractNumericChars } from '../../../utils';

function getModule(ie: string): number {
  let pos = 0;
  if (ie.length === 9) {
    pos = 1;
  }
  const charAt = +ie.substr(pos, 1);
  const arr = [0, 1, 2, 3, 4, 5, 8];
  if (arr.indexOf(charAt) >= 0) {
    return 10;
  }
  return 11;
}

function calcDigit(body: string, mod: number): number {
  let weight = body.length + 1;
  let sum = 0;
  body.split('').forEach(digit => {
    sum += +digit * weight;
    weight--;
  });
  const rest = sum % mod;
  let dig = mod - rest;
  if (dig >= 10) {
    dig = 0;
  }
  return dig;
}

export function validateBA(ie: string): boolean {
  const ieStr = extractNumericChars(ie);

  const { length } = ieStr;

  if (![8, 9].includes(length)) return false;

  const body = ieStr.substr(0, length - 2);
  const mod = getModule(ieStr);
  const secondDig = calcDigit(body, mod);
  const firstDig = calcDigit(body + secondDig, mod);

  const posSecondDig = length - 1;
  const posFirstDig = length - 2;
  const ieAtFirstPos = +ieStr.charAt(posFirstDig);
  const ieAtSecondPos = +ieStr.charAt(posSecondDig);

  return ieAtFirstPos === firstDig && ieAtSecondPos === secondDig;
}
