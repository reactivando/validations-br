import { describe, it, expect } from 'vitest';
import { validatePIS } from '../validations/validatePIS';

describe('validatePIS', () => {
  it('should return true for valid PIS numbers', () => {
    expect(validatePIS('120.38617.52-1')).toBe(true);
    expect(validatePIS('120.83210.63-0')).toBe(true);
    expect(validatePIS('12083210630')).toBe(true);
  });

  it('should return false for invalid PIS numbers', () => {
    expect(validatePIS('120.38617.52-5')).toBe(false);
    expect(validatePIS('120.83210.63-8')).toBe(false);
    expect(validatePIS('120.83210.63-9')).toBe(false);
    expect(validatePIS('123')).toBe(false);
  });

  it('should return false for empty or null strings', () => {
    expect(validatePIS('')).toBe(false);
  });

  it('should return false for PIS numbers with all digits the same', () => {
    expect(validatePIS('11111111111')).toBe(false);
    expect(validatePIS('222.22222.22-2')).toBe(false);
  });

  it('should return false for PIS numbers with incorrect length', () => {
    expect(validatePIS('120.38617.52-51')).toBe(false);
    expect(validatePIS('120.38617.52-')).toBe(false);
    expect(validatePIS('120386175251')).toBe(false);
    expect(validatePIS('1203861752')).toBe(false);
  });
});
