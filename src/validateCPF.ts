export function validateCPF(value: string): boolean {
  const clearValue = String(value).replace(/\D/g, '');
  let sum = 0;
  let rest;

  if (clearValue === '') return false;

  if (clearValue === '00000000000') return false;

  for (let i = 1; i <= 9; i += 1)
    sum += +clearValue.substring(i - 1, i) * (11 - i);

  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) rest = 0;

  if (rest !== +clearValue.substring(9, 10)) return false;

  sum = 0;

  for (let i = 1; i <= 10; i += 1)
    sum += +clearValue.substring(i - 1, i) * (12 - i);

  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) rest = 0;

  if (rest !== +clearValue.substring(10, 11)) return false;

  return true;
}
