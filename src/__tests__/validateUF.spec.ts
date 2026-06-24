import { describe, expect, it } from 'vitest';
import { validateUF } from '../validations/validateUF';

describe('validateUF', () => {
  it('should return true for valid UFs', () => {
    expect(validateUF('SP')).toBe(true);
    expect(validateUF('rj')).toBe(true);
    expect(validateUF('AC')).toBe(true);
    expect(validateUF('to')).toBe(true);
  });

  it('should return false for invalid UFs', () => {
    expect(validateUF('S')).toBe(false);
    expect(validateUF('SPA')).toBe(false);
    expect(validateUF('AX')).toBe(false);
    expect(validateUF('12')).toBe(false);
    expect(validateUF('')).toBe(false);
  });

  it('should return false for invalid parameter type', () => {
    const parameters = [{}, [], 0, Number.NaN, Boolean, true] as string[];

    expect.assertions(parameters.length);

    for (const parameter of parameters) {
      expect(validateUF(parameter)).toBe(false);
    }
  });
});
