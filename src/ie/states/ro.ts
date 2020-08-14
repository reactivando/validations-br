export function validateRO(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  const { length } = ieStr;

  if (length !== 14) return false;

  const position = length - 1;
  let weight = 6;
  const body = ieStr.substr(0, position);
  let sum = 0;

  body.split('').forEach(digit => {
    sum += +digit * weight;
    weight--;
    if (weight === 1) {
      weight = 9;
    }
  });

  const rest = sum % 11;
  let dig = 11 - rest;

  if (dig >= 10) {
    dig -= 10;
  }

  return dig === +ieStr.charAt(position);
}
