export function validateAP(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  if (ieStr.length !== 9) return false;

  if (ieStr.substr(0, 2) !== '03') return false;

  const { length } = ieStr;
  const position = length - 1;
  let weight = length;
  const body = ieStr.substr(0, position);
  const bodyInt = +body;
  let p = 0;
  let d = 0;

  if (bodyInt >= 3000001 && bodyInt <= 3017000) {
    p = 5;
    d = 0;
  } else if (bodyInt >= 3017001 && bodyInt <= 3019022) {
    p = 9;
    d = 1;
  }

  let sum = p;
  body.split('').forEach(digit => {
    sum += +digit * weight;
    weight--;
  });
  let dig = 11 - (sum % 11);
  if (dig === 10) {
    dig = 0;
  }

  if (dig === 11) {
    dig = d;
  }
  return dig === +ieStr.charAt(position);
}
