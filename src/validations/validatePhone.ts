import { isRepeated } from './utils';

/**
 * The function `validatePhone` validates a Brazilian phone number.
 * @param {string} phone - The `phone` parameter is a string that represents the phone number to be
 * validated.
 * @returns The function `validatePhone` returns a boolean value. It returns `true` if the phone number
 * is valid, and `false` otherwise.
 */
export function validatePhone(phone: string): boolean {
  const clearPhone = phone.replace(/\D/g, '');
  if (isRepeated(clearPhone)) {
    return false;
  }
  if (!(clearPhone.length >= 8 && clearPhone.length <= 11)) {
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
