import { extractNumericChars, mod11, generateRervedNumbers } from '../utils';

// gera apenas uma vez um array com ['00000000000000', ... , '99999999999999'];
const knownInvalidCNPJs = generateRervedNumbers(14);

/**
 * Valida o CNPJ. A entrada pode ser com ou sem máscaras.
 * O tamanho deve ser respeitado como em '00.000.000/0000-00' ou '00000000000000'.
 * @param value
 * @returns True se o CNPJ é válido, falso caso contrário
 */
export function validateCNPJ(value: string): boolean {
  const clearValue = extractNumericChars(value);
  // Tamanho diferente do exigido
  if (clearValue.length !== 14) return false;
  // Valores carteados já conhecidos como inválidos
  if (knownInvalidCNPJs.includes(clearValue)) {
    return false;
  }
  // O CNPJ possui 2 DVs, excluíndo para validar
  const valWithoutDvs = clearValue.substring(0, 12);
  const dv1 = mod11(valWithoutDvs, 9);
  const dv2 = mod11(valWithoutDvs + dv1, 9);
  // Compara com a informação passada como paramêtro
  return valWithoutDvs + dv1 + dv2 === clearValue;
}
