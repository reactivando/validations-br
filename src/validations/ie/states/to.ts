function calcDigit(ie: string): boolean {
  const { length } = ie;
  const position = length - 1;
  let weight = length;
  const body = ie.substr(0, position);
  let sum = 0;

  body.split('').forEach(digit => {
    sum += +digit * weight;
    weight--;
  });

  const rest = sum % 11;
  let dig = 11 - rest;
  if (dig >= 10) {
    dig = 0;
  }

  return dig === +ie.charAt(position);
}

function oldStartsWith(ie: string): boolean {
  const beginWith = ['01', '02', '03', '99'];
  const begin = ie.substr(2, 2);
  return beginWith.indexOf(begin) >= 0;
}

function calcOld(ie: string): boolean {
  return calcDigit(ie);
}

function checkOld(ie: string): boolean {
  const body = ie.slice(0, 2) + ie.slice(4);
  return oldStartsWith(ie) && calcOld(body);
}

function calcNew(ie: string): boolean {
  const { length } = ie;
  const position = length - 1;
  let weight = 9;
  const body = ie.substr(0, position);
  let sum = 0;

  body.split('').forEach(digit => {
    sum += +digit * weight;
    weight--;
  });

  const rest = sum % 11;
  let dig = 11 - rest;
  if (rest < 2) {
    dig = 0;
  }

  return dig === +ie.charAt(position);
}

function checkNew(ie: string): boolean {
  return calcNew(ie);
}

export function validateTO(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  if (![9, 11].includes(ieStr.length)) return false;

  const oldCheck = checkOld(ieStr);
  const newCheck = checkNew(ieStr);
  return oldCheck || newCheck;
}
