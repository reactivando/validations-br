export function validatePhone(phone: string): boolean {
  const clearPhone = phone.replace(/\D/g, '');
  // Validation if string has wrong length
  if (!(clearPhone.length >= 8 && clearPhone.length <= 11)) {
    return false;
  }
  // Validation if all characters are equal
  if (clearPhone.match(/^(.)\1*$/)) {
    return false;
  }
  // Validation if DDD code has some '0'
  if (clearPhone.length > 9 && [0, 1].indexOf(clearPhone.indexOf('0')) !== -1)
    return false;

  const shortNumber =
    clearPhone.length > 9 ? clearPhone.substring(2) : clearPhone;

  // First character validation for phone number
  if (shortNumber.length === 8) {
    return [2, 3, 4, 5, 7].indexOf(+shortNumber[0]) !== -1;
  }
  // First character validation for mobile number
  return shortNumber[0] === '9';
}
