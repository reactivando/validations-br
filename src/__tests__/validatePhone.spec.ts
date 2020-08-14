import { validatePhone } from '../index';

describe('Validate Phone', () => {
  it('should be able return true to valid Phone', () => {
    expect(validatePhone('+(14) 99676-9472')).toBe(true);
  });

  it('should be able return false to invalid Phone', () => {
    expect(validatePhone('+(14) 99676-94722')).toBe(false);
  });
});
