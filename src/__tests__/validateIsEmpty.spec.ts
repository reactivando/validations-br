import { validateIsEmpty } from '../index';

describe('Is empty?', () => {
  it('return true if string is empty', () => {
    expect(validateIsEmpty('')).toBe(true);
  });

  it('return true if string contains content', () => {
    expect(validateIsEmpty('test')).toBe(false);
  });
});