import { extractNumericChars } from '../../../utils';

function calcFirstDigit(ie: string): number {
  const body = ie.substr(0, 8);
  const weight = [1, 3, 4, 5, 6, 7, 8, 10];
  let sum = 0;
  body.split('').forEach((digit, index) => {
    sum += +digit * weight[index];
  });

  const dig = sum % 11;
  const digit = dig.toString();

  return +digit.substr(digit.length - 1, 1);
}

function calcSecondDigit(ie: string): number {
  const body = ie.substr(0, 11);
  let weight = 3;
  let sum = 0;
  body.split('').forEach(digit => {
    sum += +digit * weight;
    weight--;
    if (weight === 1) {
      weight = 10;
    }
  });
  const dig = sum % 11;
  const digit = dig.toString();

  return +digit.substr(digit.length - 1, 1);
}

export function validateSP(ie: string): boolean {
  const ieStr = extractNumericChars(ie);

  if (ieStr.length !== 12) return false;

  const { length } = ieStr;
  const positionFirstDigit = length - 4;
  const positionSecondDigit = length - 1;

  const firstDigit = calcFirstDigit(ieStr);
  const secondDigit = calcSecondDigit(ieStr);

  const ieAtFirstPos = +ieStr.charAt(positionFirstDigit);
  const ieAtSecondPos = +ieStr.charAt(positionSecondDigit);

  return firstDigit === ieAtFirstPos && secondDigit === ieAtSecondPos;
}
