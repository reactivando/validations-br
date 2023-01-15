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
  let result = false;
  switch (type) {
    case 'cnpj':
      result = validateCNPJ(value);
      break;
    case 'cpf':
      result = validateCPF(value);
      break;
    case 'cep':
      result = validateCep(value);
      break;
    case 'email':
      result = validateEmail(value);
      break;
    case 'pis':
      result = validatePIS(value);
      break;
    case 'cnh':
      result = validateCNH(value);
      break;
    case 'phone':
      result = validatePhone(value);
      break;
    case 'uf':
      result = validateUF(value);
      break;
    default:
  }
  return result;
};
