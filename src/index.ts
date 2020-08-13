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

export const getValidCep = (value: string): string | null => {
  const regex = /[0-9]{5}-[\d]{3}/g;
  const cep = value;
  if (regex.test(cep)) {
    return cep;
  }
  return null;
};

export const getValidUF = (value: string): string | false => {
  const regex = /^(?:ac|al|ap|am|ba|ce|df|es|go|ma|mt|ms|mg|pa|pb|pr|pe|pi|rj|rn|rs|ro|rr|sc|sp|se|to)$/i;
  const uf = value;
  if (regex.test(uf)) {
    return uf;
  }
  return false;
};

export const getValidCNPJ = (cnpj: string): boolean => {
  const clearCnpj = cnpj.replace(/[^\d]+/g, '');
  if (clearCnpj === '') return false;
  if (clearCnpj.length !== 14) return false;
  // Elimina CNPJs invalidos conhecidos
  if (
    clearCnpj === '00000000000000' ||
    clearCnpj === '11111111111111' ||
    clearCnpj === '22222222222222' ||
    clearCnpj === '33333333333333' ||
    clearCnpj === '44444444444444' ||
    clearCnpj === '55555555555555' ||
    clearCnpj === '66666666666666' ||
    clearCnpj === '77777777777777' ||
    clearCnpj === '88888888888888' ||
    clearCnpj === '99999999999999'
  )
    return false;
  // Valida DVs
  let tamanho = clearCnpj.length - 2;
  let numeros = clearCnpj.substring(0, tamanho);
  const digitos = clearCnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i -= 1) {
    soma += Number(numeros.charAt(tamanho - i)) * (pos -= 1);
    if (pos < 2) pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== Number(digitos.charAt(0))) return false;
  tamanho += 1;
  numeros = clearCnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i -= 1) {
    soma += Number(numeros.charAt(tamanho - i)) * (pos -= 1);
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== Number(digitos.charAt(1))) return false;
  return true;
};

export const getValidCPF = (strCPF: string): boolean => {
  const clearStrCPF = strCPF.replace(/\D/g, '');
  let Soma;
  let Resto;
  Soma = 0;
  if (clearStrCPF === '00000000000') return false;

  for (let i = 1; i <= 9; i += 1)
    Soma += parseInt(clearStrCPF.substring(i - 1, i), 10) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(clearStrCPF.substring(9, 10), 10)) return false;

  Soma = 0;
  for (let i = 1; i <= 10; i += 1)
    Soma += parseInt(clearStrCPF.substring(i - 1, i), 10) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(clearStrCPF.substring(10, 11), 10)) return false;
  return true;
};
