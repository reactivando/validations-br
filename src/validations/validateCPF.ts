import { mod11 } from './mod11';

/**
 * Função que valida se a string é apenas
 * números repetidos.
 *
 * @param ref String númerica
 * @returns True se for contida por apenas caracteres repetidos,
 * false caso contrário
 */
const isRepeated = (ref: string) => {
  const ret = ref.replace(new RegExp(ref[0], 'g'), '').trim().length === 0;
  return ret;
};
/**
 * Valida o CPF. A entrada pode ser com ou sem máscaras.
 * O tamanho deve ser respeitado como em '000.000.000-00' ou '00000000000'.
 * @param value
 */
export function validateCPF(value: string): boolean {
  const clearValue = String(value).replace(/\D/g, '');
  if (clearValue.length !== 11) {
    return false;
  }
  const valWithoutDvs = clearValue.substring(0, clearValue.length - 2);
  if (!clearValue || isRepeated(clearValue)) {
    return false;
  }
  const dv1 = mod11(valWithoutDvs, 12);
  const dv2 = mod11(valWithoutDvs + dv1, 12);
  return valWithoutDvs + dv1 + dv2 === clearValue;
}
