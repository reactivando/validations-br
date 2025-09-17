import { describe, it, expect } from 'vitest';
import { validateCNPJ } from '../validations/validateCNPJ';

describe('validateCNPJ', () => {
  it('should return true for valid CNPJs', () => {
    expect(validateCNPJ('66.919.381/0001-15')).toBe(true);
  });

  it('should return false for invalid CNPJs', () => {
    expect(validateCNPJ('48.514.588/0001-70')).toBe(false);
    expect(validateCNPJ('48514588000170')).toBe(false);
    expect(validateCNPJ('12.732.455/0001-25')).toBe(false);
    expect(validateCNPJ('66.919.381/0001-10')).toBe(false);
    expect(validateCNPJ('123')).toBe(false);
  });

  it('should return false for empty or null strings', () => {
    expect(validateCNPJ('')).toBe(false);
  });

  it('should return false for CNPJs with all digits the same', () => {
    expect(validateCNPJ('11.111.111/1111-11')).toBe(false);
    expect(validateCNPJ('22222222222222')).toBe(false);
  });

  it('should return false for CNPJs with incorrect length', () => {
    expect(validateCNPJ('66.919.381/0001-1')).toBe(false);
    expect(validateCNPJ('66.919.381/0001-155')).toBe(false);
    expect(validateCNPJ('6691938100011')).toBe(false);
    expect(validateCNPJ('669193810001155')).toBe(false);
  });
});
