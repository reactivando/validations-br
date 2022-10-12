export function validatePhone(phone: string): boolean {
  const clearPhone = phone.replace(/\D/g, '');

  if (!(clearPhone.length >= 8 && clearPhone.length <= 11)) {
    return false;
  }

  // Validation if all characters are equal
  for (let n = 0; n < 10; n++) {
    if (clearPhone === new Array(clearPhone.length + 1).join(String(n))) {
      return false;
    }
  }

  // Validation if DDD code has some 0
  if (clearPhone.length > 9 && (clearPhone[0] === '0' || clearPhone[1] === '0'))
    return false;

  // First character validation for phone number
  if (
    (clearPhone.length === 8 &&
      [2, 3, 4, 5, 7].indexOf(+clearPhone[0]) === -1) ||
    (clearPhone.length === 10 && [2, 3, 4, 5, 7].indexOf(+clearPhone[2]) === -1)
  ) {
    return false;
  }

  // First character validation for mobile number
  if (
    (clearPhone.length === 9 && clearPhone[0] !== '9') ||
    (clearPhone.length === 11 && clearPhone[2] !== '9')
  )
    return false;

  return true;
}
