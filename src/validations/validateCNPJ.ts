export function validateCNPJ(value: string): boolean {
  const clearValue = String(value).replace(/[^\d]+/g, '');

  if (clearValue === '') return false;

  if (clearValue.length !== 14) return false;

  if (
    clearValue === '00000000000000' ||
    clearValue === '11111111111111' ||
    clearValue === '22222222222222' ||
    clearValue === '33333333333333' ||
    clearValue === '44444444444444' ||
    clearValue === '55555555555555' ||
    clearValue === '66666666666666' ||
    clearValue === '77777777777777' ||
    clearValue === '88888888888888' ||
    clearValue === '99999999999999'
  )
    return false;

  let length = clearValue.length - 2;
  let numbers = clearValue.substring(0, length);
  const digits = clearValue.substring(length);
  let sum = 0;
  let position = length - 7;

  for (let i = length; i >= 1; i -= 1) {
    sum += +numbers.charAt(length - i) * position;
    position -= 1;
    if (position < 2) position = 9;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (result !== +digits.charAt(0)) return false;

  length += 1;
  numbers = clearValue.substring(0, length);
  sum = 0;
  position = length - 7;

  for (let i = length; i >= 1; i -= 1) {
    sum += +numbers.charAt(length - i) * position;
    position -= 1;
    if (position < 2) position = 9;
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (result !== +digits.charAt(1)) return false;

  return true;
}
