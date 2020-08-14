import { validateEmail } from '../index';

describe('Validate Email', () => {
  it('should be able return true to valid Email', () => {
    expect(validateEmail('johndoe@email.com')).toBe(true);
  });

  it('should be able return false to invalid Email', () => {
    expect(validateEmail('johndoe.email.com')).toBe(false);
  });
});
