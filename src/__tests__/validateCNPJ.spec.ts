import { describe, it, expect } from 'vitest';
import { validateCNPJ } from '../validations/validateCNPJ';

describe('validateCNPJ', () => {
  it('should return true for valid CNPJs', () => {
    expect(validateCNPJ('66.919.381/0001-15')).toBe(true);
    expect(validateCNPJ('12.ABC.345/01DE-35')).toBe(true);
    expect(validateCNPJ('12ABC34501DE35')).toBe(true);
  });

  it('should return false for invalid CNPJs', () => {
    expect(validateCNPJ('48.514.588/0001-70')).toBe(false);
    expect(validateCNPJ('48514588000170')).toBe(false);
    expect(validateCNPJ('12.732.455/0001-25')).toBe(false);
    expect(validateCNPJ('66.919.381/0001-10')).toBe(false);
    expect(validateCNPJ('123')).toBe(false);
    expect(validateCNPJ('12.ABC.345/01DE-34')).toBe(false);
    expect(validateCNPJ('VQ.A8K.XRA/0001-49')).toBe(false);
    expect(validateCNPJ('12abc34501de35')).toBe(false);
    expect(validateCNPJ('49YYDYRJ000168')).toBe(false);
    expect(validateCNPJ('12ABC34501DEAB')).toBe(false);
  });

  it('should return false for empty or null strings', () => {
    expect(validateCNPJ('')).toBe(false);
  });

  it('should return false for CNPJs with all characters the same', () => {
    expect(validateCNPJ('11.111.111/1111-11')).toBe(false);
    expect(validateCNPJ('22222222222222')).toBe(false);
    expect(validateCNPJ('BB.BBB.BBB/BBBB-BB')).toBe(false);
    expect(validateCNPJ('AAAAAAAAAAAAAA')).toBe(false);
  });

  it('should return false for CNPJs with incorrect length', () => {
    expect(validateCNPJ('66.919.381/0001-1')).toBe(false);
    expect(validateCNPJ('66.919.381/0001-155')).toBe(false);
    expect(validateCNPJ('6691938100011')).toBe(false);
    expect(validateCNPJ('669193810001155')).toBe(false);
    expect(validateCNPJ('12.ABC.345/01DE-3')).toBe(false);
    expect(validateCNPJ('12.ABC.345/01DE-355')).toBe(false);
    expect(validateCNPJ('12ABC34501DE3')).toBe(false);
    expect(validateCNPJ('12ABC34501DE355')).toBe(false);
  });
});
