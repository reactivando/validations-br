import { validateIE } from '../index';

describe('validateIE', () => {
  describe('valid IEs', () => {
    it('should return true for valid AC IE', () => {
      expect(validateIE('01.132.538/779-10', 'ac')).toBe(true);
      expect(validateIE('01.132.538/779-10', 'AC')).toBe(true);
    });
    it('should return true for valid AL IE', () => {
      expect(validateIE('248682954', 'al')).toBe(true);
      expect(validateIE('248682954', 'AL')).toBe(true);
    });
    it('should return true for valid AP IE', () => {
      expect(validateIE('039045820', 'ap')).toBe(true);
      expect(validateIE('039045820', 'AP')).toBe(true);
    });
    it('should return true for valid AM IE', () => {
      expect(validateIE('91.705.015-0', 'am')).toBe(true);
      expect(validateIE('91.705.015-0', 'AM')).toBe(true);
    });
    it('should return true for valid BA IE', () => {
      expect(validateIE('639843-00', 'ba')).toBe(true);
      expect(validateIE('639843-00', 'BA')).toBe(true);
    });
    it('should return true for valid CE IE', () => {
      expect(validateIE('83618231-6', 'ce')).toBe(true);
      expect(validateIE('83618231-6', 'CE')).toBe(true);
    });
    it('should return true for valid DF IE', () => {
      expect(validateIE('07186140001-03', 'df')).toBe(true);
      expect(validateIE('07186140001-03', 'DF')).toBe(true);
    });
    it('should return true for valid ES IE', () => {
      expect(validateIE('46392181-0', 'es')).toBe(true);
      expect(validateIE('46392181-0', 'ES')).toBe(true);
    });
    it('should return true for valid GO IE', () => {
      expect(validateIE('11.223.711-8', 'go')).toBe(true);
      expect(validateIE('20.002.703-4', 'GO')).toBe(true);
    });
    it('should return true for valid MA IE', () => {
      expect(validateIE('12351768-0', 'ma')).toBe(true);
      expect(validateIE('12351768-0', 'MA')).toBe(true);
    });
    it('should return true for valid MT IE', () => {
      expect(validateIE('8000633620-3', 'mt')).toBe(true);
      expect(validateIE('8000633620-3', 'MT')).toBe(true);
    });
    it('should return true for valid MS IE', () => {
      expect(validateIE('28257092-6', 'ms')).toBe(true);
      expect(validateIE('28257092-6', 'MS')).toBe(true);
    });
    it('should return true for valid MG IE', () => {
      expect(validateIE('249.094.417/3923', 'mg')).toBe(true);
      expect(validateIE('249.094.417/3923', 'MG')).toBe(true);
    });
    it('should return true for valid PA IE', () => {
      expect(validateIE('15-366247-6', 'pa')).toBe(true);
      expect(validateIE('15-366247-6', 'PA')).toBe(true);
    });
    it('should return true for valid PB IE', () => {
      expect(validateIE('31202906-3', 'pb')).toBe(true);
      expect(validateIE('31202906-3', 'PB')).toBe(true);
    });
    it('should return true for valid PR IE', () => {
      expect(validateIE('003.15955-84', 'pr')).toBe(true);
      expect(validateIE('003.15955-84', 'PR')).toBe(true);
    });
    it('should return true for valid PE IE', () => {
      expect(validateIE('0649706-39', 'pe')).toBe(true);
      expect(validateIE('0649706-39', 'PE')).toBe(true);
    });
    it('should return true for valid PI IE', () => {
      expect(validateIE('46518042-6', 'pi')).toBe(true);
      expect(validateIE('46518042-6', 'PI')).toBe(true);
    });
    it('should return true for valid RJ IE', () => {
      expect(validateIE('06.540.48-1', 'rj')).toBe(true);
      expect(validateIE('06.540.48-1', 'RJ')).toBe(true);
    });
    it('should return true for valid RN IE', () => {
      expect(validateIE('20.450.229-2', 'rn')).toBe(true);
      expect(validateIE('20.450.229-2', 'RN')).toBe(true);
    });
    it('should return true for valid RS IE', () => {
      expect(validateIE('328/8345503', 'rs')).toBe(true);
      expect(validateIE('328/8345503', 'RS')).toBe(true);
    });
    it('should return true for valid RO IE', () => {
      expect(validateIE('3920683947486-0', 'ro')).toBe(true);
      expect(validateIE('3920683947486-0', 'RO')).toBe(true);
    });
    it('should return true for valid RR IE', () => {
      expect(validateIE('24768104-7', 'rr')).toBe(true);
      expect(validateIE('24768104-7', 'RR')).toBe(true);
    });
    it('should return true for valid SP IE', () => {
      expect(validateIE('499.173.379.216', 'sp')).toBe(true);
      expect(validateIE('499.173.379.216', 'SP')).toBe(true);
    });
    it('should return true for valid SC IE', () => {
      expect(validateIE('632.480.718', 'sc')).toBe(true);
      expect(validateIE('632.480.718', 'SC')).toBe(true);
    });
    it('should return true for valid SE IE', () => {
      expect(validateIE('82659404-2', 'se')).toBe(true);
      expect(validateIE('82659404-2', 'SE')).toBe(true);
    });
    it('should return true for valid TO IE', () => {
      expect(validateIE('2703591093-8', 'to')).toBe(true);
      expect(validateIE('2703591093-8', 'TO')).toBe(true);
    });
  });

  describe('invalid IEs', () => {
    it('should return false for invalid state', () => {
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

      invalidState.forEach(state =>
        expect(validateIE('01.132.538/779-100', state)).toBe(false),
      );
    });

    it('should return false for invalid AC IE', () => {
      expect(validateIE('01.132.538/779-100', 'ac')).toBe(false);
      expect(validateIE('02.132.538/779-10', 'AC')).toBe(false);
    });
    it('should return false for invalid AL IE', () => {
      expect(validateIE('2486829544', 'al')).toBe(false);
    });
    it('should return false for invalid AP IE', () => {
      expect(validateIE('032919196', 'ap')).toBe(false);
      expect(validateIE('044270221', 'AP')).toBe(false);
    });
    it('should return false for invalid AM IE', () => {
      expect(validateIE('91.705.015-00', 'am')).toBe(false);
    });
    it('should return false for invalid BA IE', () => {
      expect(validateIE('639843-000', 'ba')).toBe(false);
    });
    it('should return false for invalid CE IE', () => {
      expect(validateIE('83618231-66', 'ce')).toBe(false);
    });
    it('should return false for invalid DF IE', () => {
      expect(validateIE('08186140001-03', 'df')).toBe(false);
      expect(validateIE('07186140001-033', 'DF')).toBe(false);
    });
    it('should return false for invalid ES IE', () => {
      expect(validateIE('46392181-00', 'es')).toBe(false);
    });
    it('should return false for invalid GO IE', () => {
      expect(validateIE('10.116.999-8', 'go')).toBe(false);
      expect(validateIE('11.223.711-88', 'GO')).toBe(false);
    });
    it('should return false for invalid MA IE', () => {
      expect(validateIE('13351768-0', 'ma')).toBe(false);
      expect(validateIE('12351768-00', 'MA')).toBe(false);
    });
    it('should return false for invalid MT IE', () => {
      expect(validateIE('8000633620-33', 'mt')).toBe(false);
    });
    it('should return false for invalid MS IE', () => {
      expect(validateIE('28257092-66', 'ms')).toBe(false);
      expect(validateIE('29257092-6', 'MS')).toBe(false);
    });
    it('should return false for invalid MG IE', () => {
      expect(validateIE('249.094.417/39233', 'mg')).toBe(false);
    });
    it('should return false for invalid PA IE', () => {
      expect(validateIE('15-366247-66', 'pa')).toBe(false);
      expect(validateIE('16-366247-6', 'PA')).toBe(false);
    });
    it('should return false for invalid PB IE', () => {
      expect(validateIE('31202906-33', 'pb')).toBe(false);
    });
    it('should return false for invalid PR IE', () => {
      expect(validateIE('003.15955-844', 'pr')).toBe(false);
    });
    it('should return false for invalid PE IE', () => {
      expect(validateIE('0649706-399', 'pe')).toBe(false);
    });
    it('should return false for invalid PI IE', () => {
      expect(validateIE('46518042-66', 'pi')).toBe(false);
    });
    it('should return false for invalid RJ IE', () => {
      expect(validateIE('06.540.48-11', 'rj')).toBe(false);
    });
    it('should return false for invalid RN IE', () => {
      expect(validateIE('20.450.229-22', 'rn')).toBe(false);
      expect(validateIE('21.450.229-2', 'RN')).toBe(false);
    });
    it('should return false for invalid RS IE', () => {
      expect(validateIE('328/83455033', 'rs')).toBe(false);
    });
    it('should return false for invalid RO IE', () => {
      expect(validateIE('3920683947486-00', 'ro')).toBe(false);
    });
    it('should return false for invalid RR IE', () => {
      expect(validateIE('24768104-77', 'rr')).toBe(false);
      expect(validateIE('25768104-7', 'RR')).toBe(false);
    });
    it('should return false for invalid SP IE', () => {
      expect(validateIE('499.173.379.2166', 'sp')).toBe(false);
    });
    it('should return false for invalid SC IE', () => {
      expect(validateIE('632.480.7188', 'sc')).toBe(false);
    });
    it('should return false for invalid SE IE', () => {
      expect(validateIE('82659404-22', 'se')).toBe(false);
    });
    it('should return false for invalid TO IE', () => {
      expect(validateIE('2703591093-88', 'to')).toBe(false);
    });
  });
});
