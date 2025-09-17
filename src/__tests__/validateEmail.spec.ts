import { describe, it, expect } from 'vitest';
import { validateEmail } from '../validations/validateEmail';

describe('validateEmail', () => {
  it('should return true for valid emails', () => {
    expect(validateEmail('email@email.com')).toBe(true);
    expect(validateEmail('email@email.co.uk')).toBe(true);
    expect(validateEmail('email.test@email.com')).toBe(true);
    expect(validateEmail('email_test@email.com')).toBe(true);
  });

  it('should return false for invalid emails', () => {
    expect(validateEmail('email@email')).toBe(false);
    expect(validateEmail('email.com')).toBe(false);
    expect(validateEmail('email@')).toBe(false);
    expect(validateEmail('@email.com')).toBe(false);
    expect(validateEmail('')).toBe(false);
  });
});
