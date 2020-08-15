import { validatePhone } from '../index';

describe('Validate Phone', () => {
  it('should be able return true to valid Phone', () => {
    expect(validatePhone('+(14) 99676-9472')).toBe(true);
  });

  it('should be able return false to invalid Phone', () => {
    expect(validatePhone('+(14) 99676-94722')).toBe(false);
  });

  it('should be able return false to pass over 11 length', () => {
    expect(validatePhone('+(14) 99676-947222')).toBe(false);
  });

  it('should be able return false to pass only 9', () => {
    expect(validatePhone('+(99) 99999-9999')).toBe(false);
  });

  it('should be able return false to pass a wrong DDD', () => {
    expect(validatePhone('+(00) 99676-9472')).toBe(false);
  });

  it('should be able return false to pass a wrong initial fixed phone', () => {
    expect(validatePhone('+(14) 9676-9472')).toBe(false);
  });

  it('should be able return false to pass a cell phone without 9 initial digit', () => {
    expect(validatePhone('+(14) 89676-9472')).toBe(false);
  });
});
