import { validateUF } from '../index';

describe('Validate UF', () => {
  it('should be able return true to valid UF', () => {
    expect(validateUF('SP')).toBe(true);
  });

  it('should be able return false to invalid UF', () => {
    expect(validateUF('AA')).toBe(false);
  });
});
