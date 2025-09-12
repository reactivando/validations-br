import { validatePhone } from '../index';

describe('validatePhone', () => {
  it('should return true for valid phone numbers', () => {
    expect(validatePhone('98888-8888')).toBe(true);
    expect(validatePhone('8298888-8888')).toBe(true);
    expect(validatePhone('828888-8888')).toBe(true);
    expect(validatePhone('11999999999')).toBe(true);
    expect(validatePhone('1188888888')).toBe(true);
  });

  it('should return false for invalid phone numbers', () => {
    expect(validatePhone('98888-888')).toBe(false);
    expect(validatePhone('8298888-888')).toBe(false);
    expect(validatePhone('828888-888')).toBe(false);
    expect(validatePhone('123')).toBe(false);
    expect(validatePhone('')).toBe(false);
  });

  it('should return false for phone numbers with all digits the same', () => {
    expect(validatePhone('11111111111')).toBe(false);
    expect(validatePhone('22222222')).toBe(false);
  });
});
