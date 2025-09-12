import { validateCep } from '../index';

describe('validateCep', () => {
  it('should return true for valid CEPs', () => {
    expect(validateCep('57040-520')).toBe(true);
    expect(validateCep('57040520')).toBe(true);
    expect(validateCep('00000-000')).toBe(true);
    expect(validateCep('99999-999')).toBe(true);
  });

  it('should return false for invalid CEPs', () => {
    expect(validateCep('57040-52')).toBe(false);
    expect(validateCep('57040-5201')).toBe(false);
    expect(validateCep('57040-520a')).toBe(false);
    expect(validateCep('57040 520')).toBe(false);
    expect(validateCep('')).toBe(false);
  });

  it('should return false for invalid parameter type', () => {
    const parameters = [{}, [], 0, NaN, Boolean, true] as string[];

    expect.assertions(parameters.length);

    parameters.forEach(parameter => expect(validateCep(parameter)).toBe(false));
  });
});
