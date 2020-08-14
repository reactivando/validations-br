function calcDigit(body: string): number {
  let weight = body.length - 7;
  let sum = 0;
  body.split('').forEach(digit => {
    sum += +digit * weight;
    weight--;
    if (weight === 1) {
      weight = 9;
    }
  });
  const mod = 11;
  const rest = sum % mod;
  let dig = mod - rest;
  if (dig >= 10) {
    dig = 0;
  }
  return dig;
}

export function validateAC(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  if (ieStr.length !== 13) return false;

  if (ieStr.substr(0, 2) !== '01') return false;

  const { length } = ieStr;
  const body = ieStr.substr(0, length - 2);
  const fDig = calcDigit(body);
  const sDig = calcDigit(body + fDig.toString());
  const pos2dig = ieStr.length - 1;
  const pos1dig = ieStr.length - 2;

  return +ieStr[pos1dig] === fDig && +ieStr[pos2dig] === sDig;
}
