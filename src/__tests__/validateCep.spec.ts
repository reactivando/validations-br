import { validateCep } from '../index';

describe('Validate CEP', () => {
  it('should be able return true to valid CEP', () => {
    expect.assertions(1);

    expect(validateCep('17280-000')).toBe(true);
  });

  it('should be able return false to invalid CEP', () => {
    const parameters = [
      '172800-0000',
      '17280000',
      '172800-000',
      '17280-0000',
      '',
    ];

    expect.assertions(parameters.length);

    parameters.forEach(parameter => expect(validateCep(parameter)).toBe(false));
  });

  it('should return false for invalid parameter type', () => {
    const parameters = [{}, [], 0, NaN, Boolean, true];

    expect.assertions(parameters.length);

    parameters.forEach(parameter =>
      expect(validateCep((parameter as unknown) as string)).toBe(false),
    );
  });
});
