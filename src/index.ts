export const getValidTelefone = (value: string): boolean => {
  const regex = /^[1-9]{2}9?[1-9]\d{7}$/;
  const telefone = value.replace(/\D/g, '');
  if (regex.test(telefone)) {
    return Boolean(telefone);
  }
  return false;
};

export const getValidEmail = (value: string): boolean => {
  const regex = /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$/i;
  const email = value;
  if (regex.test(email)) {
    return Boolean(email);
  }
  return false;
};

export const getValidCep = (value: string): boolean => {
  const regex = /[0-9]{5}-[\d]{3}/g;
  const cep = value;
  if (regex.test(cep)) {
    return Boolean(cep);
  }
  return false;
};

export const getValidUF = (value: string): boolean => {
  const regex = /^(?:ac|al|ap|am|ba|ce|df|es|go|ma|mt|ms|mg|pa|pb|pr|pe|pi|rj|rn|rs|ro|rr|sc|sp|se|to)$/i;
  const uf = value;
  if (regex.test(uf)) {
    return Boolean(uf);
  }
  return false;
};

export const getValidCNPJ = (value: string): boolean => {
  if (typeof value !== 'string') return false;
  const clearValue = value.replace(/[^\d]+/g, '');
  if (clearValue === '') return false;
  if (clearValue.length !== 14) return false;
  // Elimina CNPJs invalidos conhecidos
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
  // Valida DVs
  let tamanho = clearValue.length - 2;
  let numeros = clearValue.substring(0, tamanho);
  const digitos = clearValue.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i -= 1) {
    soma += Number(numeros.charAt(tamanho - i)) * (pos -= 1);
    if (pos < 2) pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== Number(digitos.charAt(0))) return false;
  tamanho += 1;
  numeros = clearValue.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i -= 1) {
    // eslint-disable-next-line no-plusplus
    soma += Number(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== Number(digitos.charAt(1))) return false;
  return true;
};

export const getValidCPF = (value: string): boolean => {
  if (typeof value !== 'string') return false;
  const clearValue = value.replace(/\D/g, '');
  let Soma;
  let Resto;
  Soma = 0;
  if (clearValue === '00000000000') return false;

  for (let i = 1; i <= 9; i += 1)
    Soma += parseInt(clearValue.substring(i - 1, i), 10) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(clearValue.substring(9, 10), 10)) return false;

  Soma = 0;
  for (let i = 1; i <= 10; i += 1)
    Soma += parseInt(clearValue.substring(i - 1, i), 10) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(clearValue.substring(10, 11), 10)) return false;
  return true;
};
