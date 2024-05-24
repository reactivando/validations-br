import { validateCNH } from './validateCNH';
import { validateCNPJ } from './validateCNPJ';
import { validateCPF } from './validateCPF';
import { validateCep } from './validateCep';
import { validateEmail } from './validateEmail';
import { validatePIS } from './validatePIS';
import { validatePhone } from './validatePhone';
import { validateRG } from './validateRG';
import { validateUF } from './validateUF';

type ValidatorType =
  | 'cnpj'
  | 'cpf'
  | 'cep'
  | 'email'
  | 'pis'
  | 'phone'
  | 'uf'
  | 'cnh'
  | 'rg';

export const useValidationsBR = (
  type: ValidatorType,
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
    case 'rg':
      result = validateRG(value);
      break;
    default:
  }
  return result;
};
