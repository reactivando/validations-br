import { extractNumericChars } from '../utils';

const sameCharacterRegexp = /^(.)\1*$/;

export function validatePhone(phone: string): boolean {
  const clearPhone = extractNumericChars(phone);

  if (!(clearPhone.length >= 8 && clearPhone.length <= 11)) {
    return false;
  }
  if (sameCharacterRegexp.test(clearPhone)) {
    return false;
  }
  if (clearPhone.length > 9 && [0, 1].indexOf(clearPhone.indexOf('0')) !== -1) {
    return false;
  }
  const shortNumber =
    clearPhone.length > 9 ? clearPhone.substring(2) : clearPhone;
  if (shortNumber.length === 8) {
    return [2, 3, 4, 5, 7].indexOf(+shortNumber[0]) !== -1;
  }
  return shortNumber[0] === '9';
}
