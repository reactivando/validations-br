import { extractNumericChars, generateRervedNumbers, mod11 } from '../utils';

// gera apenas uma vez um array com ['00000000000', ... , '99999999999'];
const knownInvalidCPFs = generateRervedNumbers(11);

/**
 * Valida o CPF. A entrada pode ser com ou sem máscaras.
 * O tamanho deve ser respeitado como em '000.000.000-00' ou '00000000000'.
 * @param value
 */
export function validateCPF(value: string): boolean {
  const clearValue = extractNumericChars(value);
  if (clearValue.length !== 11) {
    return false;
  }
  if (knownInvalidCPFs.includes(clearValue)) {
    return false;
  }
  const valWithoutDvs = clearValue.substring(0, 9);
  const dv1 = mod11(valWithoutDvs, 12);
  const dv2 = mod11(valWithoutDvs + dv1, 12);
  return valWithoutDvs + dv1 + dv2 === clearValue;
}
