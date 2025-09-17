import { describe, it, expect } from 'vitest';
import { validateCPF } from '../validations/validateCPF';

describe('validateCPF', () => {
  it('should return true for valid CPFs', () => {
    expect(validateCPF('012.345.678-90')).toBe(true);
    expect(validateCPF('248.283.728-65')).toBe(true);
    expect(validateCPF('241.845.620-00')).toBe(true);
    expect(validateCPF('551.137.567-50')).toBe(true);
    expect(validateCPF('55113756750')).toBe(true);
  });

  it('should return false for invalid CPFs', () => {
    expect(validateCPF('248.283.728-66')).toBe(false);
    expect(validateCPF('425.719.798-04')).toBe(false);
    expect(validateCPF('012.345.678-91')).toBe(false);
    expect(validateCPF('123')).toBe(false);
  });

  it('should return false for empty or null strings', () => {
    expect(validateCPF('')).toBe(false);
  });

  it('should return false for CPFs with all digits the same', () => {
    expect(validateCPF('000.000.000-00')).toBe(false);
    expect(validateCPF('111.111.111-11')).toBe(false);
    expect(validateCPF('22222222222')).toBe(false);
  });

  it('should return false for CPFs with incorrect length', () => {
    expect(validateCPF('123.456.789-0')).toBe(false);
    expect(validateCPF('123.456.789-012')).toBe(false);
    expect(validateCPF('1234567890')).toBe(false);
    expect(validateCPF('123456789012')).toBe(false);
  });
});
