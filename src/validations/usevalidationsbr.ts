import { validatePhone } from './validatePhone';
import { validateEmail } from './validateEmail';
import { validateCep } from './validateCep';
import { validateUF } from './validateUF';
import { validateCNPJ } from './validateCNPJ';
import { validateCPF } from './validateCPF';
import { validatePIS } from './validatePIS';
import { validateCNH } from './validateCNH';

export const useValidationsBR = (
  type: 'cnpj' | 'cpf' | 'cep' | 'email' | 'pis' | 'phone' | 'uf' | 'cnh',
  value: string,
): boolean => {
  // recupera a função a ser chamada
  const fn = {
    cnpj: validateCNPJ,
    cpf: validateCPF,
    cep: validateCep,
    email: validateEmail,
    pis: validatePIS,
    phone: validatePhone,
    uf: validateUF,
    cnh: validateCNH,
  }[type];
  return fn && fn(value);
};
