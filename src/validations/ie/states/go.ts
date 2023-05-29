export function validateGO(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  const { length } = ieStr;

  if (length !== 9) return false;

  const beginRegex = /^(1[015]|2[0-9])/;
  const begin = ieStr.substr(0, 2);
  if (!beginRegex.test(begin)) return false;

  const position = length - 1;
  let weight = length;
  const body = ieStr.substr(0, position);
  const bodyInt = +body;
  let sum = 0;

  body.split('').forEach(digit => {
    sum += +digit * weight;
    weight--;
  });

  const rest = sum % 11;
  let dig = 11 - rest;

  if (dig >= 10) {
    if (dig === 11 && bodyInt >= 10103105 && bodyInt <= 10119997) {
      dig = 1;
    } else {
      dig = 0;
    }
  }

  return dig === +ieStr.charAt(position);
}
