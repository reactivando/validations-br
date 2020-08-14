import { validateCNPJ } from '../index';

describe('Validate CNPJ', () => {
  it('should be able return true to valid CNPJ', () => {
    expect(validateCNPJ('66.919.381/0001-15')).toBe(true);
  });

  it('should be able return false to invalid CNPJ', () => {
    expect.assertions(2);

    expect(validateCNPJ('12.732.455/0001-25')).toBe(false);
    expect(validateCNPJ('66.919.381/0001-10')).toBe(false);
  });

  it('should be able return false to pass a empty string', () => {
    expect(validateCNPJ('')).toBe(false);
  });

  it('should be able return false to pass a string over 14 characters', () => {
    expect(validateCNPJ('66.919.381/00001-14')).toBe(false);
  });

  it('should be able return false to pass a only repeated numbers', () => {
    expect(validateCNPJ('11.111.111/1111-11')).toBe(false);
  });
});
