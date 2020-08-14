function calcFirstDigit(ie: string): number {
  const body = ie.slice(0, 3) + 0 + ie.slice(3);
  let concat = '';
  body.split('').forEach((item, index) => {
    const weight = (index + 3) % 2 === 0 ? 2 : 1;
    concat += +item * weight;
  });
  let sum = 0;
  concat.split('').forEach(item => {
    sum += +item;
  });
  const sumString = sum.toString();
  const { length } = sumString;
  const lastChar = sumString.substr(length - 1, 1);
  const lastCharInt = +lastChar;

  return lastCharInt === 0 ? 0 : 10 - lastCharInt;
}

function calcSecondDigit(body: string): number {
  let weight = 3;
  let sum = 0;
  body.split('').forEach(item => {
    sum += +item * weight;
    weight--;
    if (weight === 1) {
      weight = 11;
    }
  });
  const rest = sum % 11;
  let digit = 11 - rest;
  if (digit >= 10) {
    digit = 0;
  }
  return digit;
}

export function validateMG(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  const { length } = ieStr;

  if (length !== 13) return false;

  const posFirstDigit = length - 2;
  const posSecondDigit = length - 1;
  const body = ieStr.substring(0, 11);
  const firstDigit = calcFirstDigit(body);
  const secondDigit = calcSecondDigit(body + firstDigit);
  const digitAtFirstDigit = +ieStr.charAt(posFirstDigit);
  const digitAtSecondDigit = +ieStr.charAt(posSecondDigit);

  return firstDigit === digitAtFirstDigit && secondDigit === digitAtSecondDigit;
}
