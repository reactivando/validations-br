import { validateCNH } from '../index';

describe('validateCNH', () => {
  it('should return true for valid CNHs', () => {
    expect(validateCNH('01212208633')).toBe(true);
    expect(validateCNH('04338787610')).toBe(true);
    expect(validateCNH('13462196624')).toBe(true);
  });

  it('should return false for invalid CNHs', () => {
    expect(validateCNH('01212208630')).toBe(false);
    expect(validateCNH('123')).toBe(false);
  });

  it('should return false for empty or null strings', () => {
    expect(validateCNH('')).toBe(false);
  });

  it('should return false for CNHs with all digits the same', () => {
    expect(validateCNH('11111111111')).toBe(false);
    expect(validateCNH('22222222222')).toBe(false);
  });

  it('should return false for CNHs with incorrect length', () => {
    expect(validateCNH('0121220863')).toBe(false);
    expect(validateCNH('012122086331')).toBe(false);
  });
});
