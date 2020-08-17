import { mod11 } from './mod11';

/**
 * Valida o CNPJ. A entrada pode ser com ou sem máscaras.
 * O tamanho deve ser respeitado como em '00.000.000/0000-00' ou '00000000000000'.
 * @param value
 * @returns True se o CNPJ é válido, falso caso contrário
 */
export function validateCNPJ(value: string): boolean {
  const clearValue = String(value).replace(/[^\d]+/g, '');
  // Campo sem máscara
  if (clearValue === '') return false;
  // Tamanho diferente do exigido
  if (clearValue.length !== 14) return false;
  // Valores carteados já conhecidos como inválidos
  if (
    clearValue === '00000000000000' ||
    clearValue === '11111111111111' ||
    clearValue === '22222222222222' ||
    clearValue === '33333333333333' ||
    clearValue === '44444444444444' ||
    clearValue === '55555555555555' ||
    clearValue === '66666666666666' ||
    clearValue === '77777777777777' ||
    clearValue === '88888888888888' ||
    clearValue === '99999999999999'
  ) {
    return false;
  }
  // O CNPJ possui 2 DVs, excluíndo para validar
  const valWithoutDvs = clearValue.substring(0, clearValue.length - 2);
  const dv1 = mod11(valWithoutDvs, 9);
  const dv2 = mod11(valWithoutDvs + dv1, 9);
  // Compara com a informação passada como paramêtro
  return valWithoutDvs + dv1 + dv2 === clearValue;
}
