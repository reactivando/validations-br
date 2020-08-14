import { validateCep } from '../index';

describe('Validate CEP', () => {
  it('should be able return true to valid CEP', () => {
    expect(validateCep('17280-000')).toBe(true);
  });

  it('should be able return false to invalid CEP', () => {
    expect(validateCep('172800-0000')).toBe(false);
  });
});
