import { describe, expect, it } from 'vitest';
import { validateCNPJ } from '../validations/validateCNPJ';

describe('validateCNPJ', () => {
  it('should return true for valid numeric CNPJs', () => {
    expect(validateCNPJ('66.919.381/0001-15')).toBe(true);
    expect(validateCNPJ('04.740.714/0001-97')).toBe(true);
    expect(validateCNPJ('44.108.058/0001-29')).toBe(true);
    expect(validateCNPJ('00000000000191')).toBe(true);
  });

  it('should return true for valid alphanumeric CNPJs', () => {
    // Official examples from the Receita Federal reference implementation.
    expect(validateCNPJ('12.ABC.345/01DE-35')).toBe(true);
    expect(validateCNPJ('12ABC34501DE35')).toBe(true);
    expect(validateCNPJ('90.021.382/0001-22')).toBe(true);
    expect(validateCNPJ('90.024.778/0001-23')).toBe(true);
    expect(validateCNPJ('90.025.108/0001-21')).toBe(true);
    expect(validateCNPJ('90.025.255/0001-00')).toBe(true);
    expect(validateCNPJ('90.024.420/0001-09')).toBe(true);
    expect(validateCNPJ('90.024.781/0001-47')).toBe(true);
    expect(validateCNPJ('90.024.780/0001-00')).toBe(true);
    expect(validateCNPJ('90.024.779/0001-78')).toBe(true);
    expect(validateCNPJ('ABCDEFGHIJKL80')).toBe(true);
  });

  it('should return false for invalid check digits', () => {
    expect(validateCNPJ('48.514.588/0001-70')).toBe(false);
    expect(validateCNPJ('48514588000170')).toBe(false);
    expect(validateCNPJ('12.732.455/0001-25')).toBe(false);
    expect(validateCNPJ('66.919.381/0001-10')).toBe(false);
    expect(validateCNPJ('12.ABC.345/01DE-34')).toBe(false);
    expect(validateCNPJ('00000000000192')).toBe(false);
    expect(validateCNPJ('ABCDEFGHIJKL81')).toBe(false);
  });

  it('should return false for lowercase letters in the base', () => {
    expect(validateCNPJ('12.ABc.345/01DE-35')).toBe(false);
    expect(validateCNPJ('12abc34501de35')).toBe(false);
  });

  it('should return false for non-numeric check digits', () => {
    expect(validateCNPJ('0000000000019L')).toBe(false);
    expect(validateCNPJ('000000000001P1')).toBe(false);
  });

  it('should return false for disallowed characters', () => {
    expect(validateCNPJ("'!@#$%&*-_=+^~")).toBe(false);
    expect(validateCNPJ('$0123456789ABC')).toBe(false);
    expect(validateCNPJ('0123456?789ABC')).toBe(false);
    expect(validateCNPJ('0123456789ABC#')).toBe(false);
  });

  it('should return false for empty or null strings', () => {
    expect(validateCNPJ('')).toBe(false);
  });

  it('should return false for the zeroed CNPJ', () => {
    expect(validateCNPJ('00000000000000')).toBe(false);
    expect(validateCNPJ('00.000.000/0000-00')).toBe(false);
  });

  it('should return false for CNPJs with all characters the same', () => {
    expect(validateCNPJ('11.111.111/1111-11')).toBe(false);
    expect(validateCNPJ('22222222222222')).toBe(false);
  });

  it('should return false for CNPJs with incorrect length', () => {
    expect(validateCNPJ('66.919.381/0001-1')).toBe(false);
    expect(validateCNPJ('66.919.381/0001-155')).toBe(false);
    expect(validateCNPJ('6691938100011')).toBe(false);
    expect(validateCNPJ('669193810001155')).toBe(false);
    expect(validateCNPJ('123')).toBe(false);
  });
});
