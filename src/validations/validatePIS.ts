import { extractNumericChars, generateRervedNumbers } from '../utils';

function generateChecksum(base: string | number, weight: number[]): number {
  const digits = extractNumericChars(String(base));

  return digits
    .split('')
    .reduce((acc, digit, i) => acc + +digit * weight[i], 0);
}

const weights = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

// gera apenas uma vez um array com ['00000000000', ... , '99999999999'];
const reservedNumbers = generateRervedNumbers(11);

export function validatePIS(pis: string): boolean {
  const pisStr = extractNumericChars(pis);

  const numeric = pisStr.replace(/[ ().,*-]/g, '');

  if (
    !(pisStr.length === 11) ||
    reservedNumbers.indexOf(pisStr) >= 0 ||
    !/^[0-9]+$/.test(pisStr)
  )
    return false;

  const weightedChecksum = generateChecksum(
    numeric.substr(0, numeric.length - 1),
    weights,
  );
  const verifyingDigit = +numeric.charAt(numeric.length - 1);
  const calculatedDigit = 11 - (weightedChecksum % 11);

  return (
    calculatedDigit === verifyingDigit ||
    (calculatedDigit === 10 && verifyingDigit === 0) ||
    (calculatedDigit === 11 && verifyingDigit === 0)
  );
}
