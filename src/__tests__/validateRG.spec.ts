import { validateRG } from '../validations/validateRG';

describe('Validate RG', () => {
  describe('9 digits', () => {
    it('should return true when a valid RG is given', () => {
      expect(validateRG('48.103.830-9')).toBe(true);
      expect(validateRG('12.333.857-8')).toBe(true);

      expect(validateRG('190141736')).toBe(true);
      expect(validateRG('318600274')).toBe(true);
    });
    it('should return false when a invalid RG is given', () => {
      // Expected digit was 0
      expect(validateRG('11.193.759-2')).toBe(false);

      // Expected digit was 4
      expect(validateRG('24.897.804-3')).toBe(false);

      // Expected digit was 7
      expect(validateRG('330011779')).toBe(false);

      // Expected digit was 0
      expect(validateRG('144037271')).toBe(false);
    });
  });
  describe('11 digits', () => {
    it('should return true when a valid RG is given', () => {
      expect(validateRG('2008978254-7')).toBe(true);
    });
    it('should return false when a invalid RG is given', () => {
      expect(validateRG('2008978254-5')).toBe(false);
    });
  });
  it('should return false on invalid inputs', () => {
    expect(validateRG('')).toBe(false);
    expect(validateRG('abcdefghi')).toBe(false);
    // @ts-expect-error
    expect(validateRG(318600274)).toBe(false);
  });
});
