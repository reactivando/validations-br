import { validateIE } from '../index';

describe('Validate Email', () => {
  /**
   * True assetions
   */
  it('should be able return true to valid AC IE', () => {
    expect(validateIE('01.132.538/779-10', 'ac')).toBe(true);
  });
  it('should be able return true to valid AL IE', () => {
    expect(validateIE('248682954', 'al')).toBe(true);
  });
  it('should be able return true to valid AP IE', () => {
    expect(validateIE('039045820', 'ap')).toBe(true);
  });
  it('should be able return true to valid AM IE', () => {
    expect(validateIE('91.705.015-0', 'am')).toBe(true);
  });
  it('should be able return true to valid BA IE', () => {
    expect(validateIE('639843-00', 'ba')).toBe(true);
  });
  it('should be able return true to valid CE IE', () => {
    expect(validateIE('83618231-6', 'ce')).toBe(true);
  });
  it('should be able return true to valid DF IE', () => {
    expect(validateIE('07186140001-03', 'df')).toBe(true);
  });
  it('should be able return true to valid ES IE', () => {
    expect(validateIE('46392181-0', 'es')).toBe(true);
  });
  it('should be able return true to valid GO IE', () => {
    expect(validateIE('11.223.711-8', 'go')).toBe(true);
  });
  it('should be able return true to valid MA IE', () => {
    expect(validateIE('12351768-0', 'ma')).toBe(true);
  });
  it('should be able return true to valid MT IE', () => {
    expect(validateIE('8000633620-3', 'mt')).toBe(true);
  });
  it('should be able return true to valid MS IE', () => {
    expect(validateIE('28257092-6', 'ms')).toBe(true);
  });
  it('should be able return true to valid MG IE', () => {
    expect(validateIE('249.094.417/3923', 'mg')).toBe(true);
  });
  it('should be able return true to valid PA IE', () => {
    expect(validateIE('15-366247-6', 'pa')).toBe(true);
  });
  it('should be able return true to valid PB IE', () => {
    expect(validateIE('31202906-3', 'pb')).toBe(true);
  });
  it('should be able return true to valid PR IE', () => {
    expect(validateIE('003.15955-84', 'pr')).toBe(true);
  });
  it('should be able return true to valid PE IE', () => {
    expect(validateIE('0649706-39', 'pe')).toBe(true);
  });
  it('should be able return true to valid PI IE', () => {
    expect(validateIE('46518042-6', 'pi')).toBe(true);
  });
  it('should be able return true to valid RJ IE', () => {
    expect(validateIE('06.540.48-1', 'rj')).toBe(true);
  });
  it('should be able return true to valid RN IE', () => {
    expect(validateIE('20.450.229-2', 'rn')).toBe(true);
  });
  it('should be able return true to valid RS IE', () => {
    expect(validateIE('328/8345503', 'rs')).toBe(true);
  });
  it('should be able return true to valid RO IE', () => {
    expect(validateIE('3920683947486-0', 'ro')).toBe(true);
  });
  it('should be able return true to valid RR IE', () => {
    expect(validateIE('24768104-7', 'rr')).toBe(true);
  });
  it('should be able return true to valid SP IE', () => {
    expect(validateIE('499.173.379.216', 'sp')).toBe(true);
  });
  it('should be able return true to valid SC IE', () => {
    expect(validateIE('632.480.718', 'sc')).toBe(true);
  });
  it('should be able return true to valid SE IE', () => {
    expect(validateIE('82659404-2', 'se')).toBe(true);
  });
  it('should be able return true to valid TO IE', () => {
    expect(validateIE('2703591093-8', 'to')).toBe(true);
  });

  /**
   * False assetions
   */

  it('should return false for invalid state', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const invalidState: any[] = [
      'XX',
      'yY',
      'Zz',
      'a',
      NaN,
      {},
      0,
      ['1'],
      String,
    ];

    expect.assertions(invalidState.length);

    invalidState.forEach(state =>
      expect(validateIE('01.132.538/779-100', state)).toBe(false),
    );
  });

  it('should be able return false to invalid AC IE', () => {
    expect.assertions(2);

    expect(validateIE('01.132.538/779-100', 'ac')).toBe(false);
    expect(validateIE('02.132.538/779-10', 'ac')).toBe(false);
  });
  it('should be able return false to invalid AL IE', () => {
    expect(validateIE('2486829544', 'al')).toBe(false);
  });
  it('should be able return false to invalid AP IE', () => {
    expect.assertions(5);

    expect(validateIE('032919196', 'ap')).toBe(false);
    expect(validateIE('044270221', 'ap')).toBe(false);
    expect(validateIE('034270229', 'ap')).toBe(false);
    expect(validateIE('030000029', 'ap')).toBe(false);
    expect(validateIE('030170029', 'ap')).toBe(false);
  });
  it('should be able return false to invalid AM IE', () => {
    expect(validateIE('91.705.015-00', 'am')).toBe(false);
  });
  it('should be able return false to invalid BA IE', () => {
    expect(validateIE('639843-000', 'ba')).toBe(false);
  });
  it('should be able return false to invalid CE IE', () => {
    expect(validateIE('83618231-66', 'ce')).toBe(false);
  });
  it('should be able return false to invalid DF IE', () => {
    expect.assertions(2);

    expect(validateIE('08186140001-03', 'df')).toBe(false);
    expect(validateIE('07186140001-033', 'df')).toBe(false);
  });
  it('should be able return false to invalid ES IE', () => {
    expect(validateIE('46392181-00', 'es')).toBe(false);
  });
  it('should be able return false to invalid GO IE', () => {
    expect.assertions(2);

    expect(validateIE('10.116.999-8', 'go')).toBe(false);
    expect(validateIE('11.223.711-88', 'go')).toBe(false);
  });
  it('should be able return false to invalid MA IE', () => {
    expect.assertions(2);

    expect(validateIE('13351768-0', 'ma')).toBe(false);
    expect(validateIE('12351768-00', 'ma')).toBe(false);
  });
  it('should be able return false to invalid MT IE', () => {
    expect(validateIE('8000633620-33', 'mt')).toBe(false);
  });
  it('should be able return false to invalid MS IE', () => {
    expect.assertions(2);

    expect(validateIE('28257092-66', 'ms')).toBe(false);
    expect(validateIE('29257092-6', 'ms')).toBe(false);
  });
  it('should be able return false to invalid MG IE', () => {
    expect(validateIE('249.094.417/39233', 'mg')).toBe(false);
  });
  it('should be able return false to invalid PA IE', () => {
    expect.assertions(2);

    expect(validateIE('15-366247-66', 'pa')).toBe(false);
    expect(validateIE('16-366247-6', 'pa')).toBe(false);
  });
  it('should be able return false to invalid PB IE', () => {
    expect(validateIE('31202906-33', 'pb')).toBe(false);
  });
  it('should be able return false to invalid PR IE', () => {
    expect(validateIE('003.15955-844', 'pr')).toBe(false);
  });
  it('should be able return false to invalid PE IE', () => {
    expect(validateIE('0649706-399', 'pe')).toBe(false);
  });
  it('should be able return false to invalid PI IE', () => {
    expect(validateIE('46518042-66', 'pi')).toBe(false);
  });
  it('should be able return false to invalid RJ IE', () => {
    expect(validateIE('06.540.48-11', 'rj')).toBe(false);
  });
  it('should be able return false to invalid RN IE', () => {
    expect.assertions(2);

    expect(validateIE('20.450.229-22', 'rn')).toBe(false);
    expect(validateIE('21.450.229-2', 'rn')).toBe(false);
  });
  it('should be able return false to invalid RS IE', () => {
    expect(validateIE('328/83455033', 'rs')).toBe(false);
  });
  it('should be able return false to invalid RO IE', () => {
    expect(validateIE('3920683947486-00', 'ro')).toBe(false);
  });
  it('should be able return false to invalid RR IE', () => {
    expect.assertions(2);

    expect(validateIE('24768104-77', 'rr')).toBe(false);
    expect(validateIE('25768104-7', 'rr')).toBe(false);
  });
  it('should be able return false to invalid SP IE', () => {
    expect(validateIE('499.173.379.2166', 'sp')).toBe(false);
  });
  it('should be able return false to invalid SC IE', () => {
    expect(validateIE('632.480.7188', 'sc')).toBe(false);
  });
  it('should be able return false to invalid SE IE', () => {
    expect(validateIE('82659404-22', 'se')).toBe(false);
  });
  it('should be able return false to invalid TO IE', () => {
    expect(validateIE('2703591093-88', 'to')).toBe(false);
  });
});
