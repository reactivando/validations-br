import { validatePIS } from '../index';

describe('Validate PIS', () => {
  it('should be able return true to valid PIS', () => {
    expect(validatePIS('219.88440.79-5')).toBe(true);
  });

  it('should be able return false to invalid PIS', () => {
    expect.assertions(2);

    expect(validatePIS('220.88440.79-5')).toBe(false);
    expect(validatePIS('999.99999.99-9')).toBe(false);
  });
});
