import { validateCNH } from '../index';

describe('Validate CNH', () => {
  it('should be able return true to valid CNH', () => {
    expect.assertions(4);

    expect(validateCNH('134621966-24')).toBe(true);
    expect(validateCNH('766232046-44')).toBe(true);
    expect(validateCNH('825626620-61')).toBe(true);
  });

  it('should be able return false to invalid CNH', () => {
    expect.assertions(3);

    expect(validateCNH('134621966-23')).toBe(false);
    expect(validateCNH('766232046-41')).toBe(false);
    expect(validateCNH('825626620-62')).toBe(false);
  });

  it('should be able return false to pass a empty string', () => {
    expect(validateCNH('')).toBe(false);
  });

  it('should be able return false to pass a only repeated numbers', () => {
    expect(validateCNH('000.000.000-00')).toBe(false);
    expect(validateCNH('111.111.111-11')).toBe(false);
  });
});
