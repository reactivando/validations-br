import { validateUF } from '../index';

describe('Validate UF', () => {
  it('should be able return true to valid UF', () => {
    expect(validateUF('SP')).toBe(true);
  });

  it('should be able return false to invalid UF', () => {
    expect(validateUF('AA')).toBe(false);
  });

  it('should be able return false if invalid parameter type', () => {
    expect(validateUF((undefined as unknown) as string)).toBe(false);
    expect(validateUF((null as unknown) as string)).toBe(false);
    expect(validateUF((0 as unknown) as string)).toBe(false);
    expect(validateUF(({} as unknown) as string)).toBe(false);
    expect(validateUF(([] as unknown) as string)).toBe(false);
    expect(validateUF((true as unknown) as string)).toBe(false);
  });
});
