import { whichCountryBarcode } from '../index';

describe('Is empty?', () => {
  it('return Brazilian', () => {
    expect(whichCountryBarcode('7894900011531')).toBe('Brasil');
  });

  it('return Spain', () => {
    expect(whichCountryBarcode('8404900011531')).toBe("Espanha");
  });

  it('return Country Not Found', () => {
    expect(whichCountryBarcode('1')).toBe("Country Not Found");
  });

  it('return Invalid barcode', () => {
    expect(whichCountryBarcode('')).toBe("Invalid Barcode");
  });
});