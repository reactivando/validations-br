import {
  getValidCNPJ,
  getValidCPF,
  getValidCep,
  getValidEmail,
  getValidTelefone,
  getValidUF,
} from '../index';

describe('Validate CNPJ', () => {
  it('should be able return true to valid CNPJ', () => {
    expect(getValidCNPJ('66.919.381/0001-15')).toBe(true);
  });
});
