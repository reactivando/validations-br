import { validateCPF } from '../index';

describe('Validate CPF', () => {
  it('should be able return true to valid CPF', () => {
    expect.assertions(4);

    expect(validateCPF('012.345.678-90')).toBe(true);
    expect(validateCPF('248.283.728-65')).toBe(true);
    expect(validateCPF('241.845.620-00')).toBe(true);
    expect(validateCPF('551.137.567-50')).toBe(true);
  });

  it('should be able return false to invalid CPF', () => {
    expect.assertions(3);

    expect(validateCPF('248.283.728-66')).toBe(false);
    expect(validateCPF('425.719.798-04')).toBe(false);
    expect(validateCPF('012.345.678-91')).toBe(false);

  });

  it('should be able return false to pass a empty string', () => {
    expect(validateCPF('')).toBe(false);
  });

  it('should be able return false to pass a only repeated numbers', () => {
    expect(validateCPF('000.000.000-00')).toBe(false);
    expect(validateCPF('111.111.111-11')).toBe(false);
  });
});
