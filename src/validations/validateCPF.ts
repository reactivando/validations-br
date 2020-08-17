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
  const ret = ref.replace(
    new RegExp(
      ref[0], 
      'g'
    ), ''
  ).trim().length === 0;
  return ret;
}
/**
 * Valida o CPF. A entrada pode ser com ou sem máscaras.
 * O tamanho deve ser respeitado como em '000.000.000-00' ou '00000000000'.
 * @param value 
 */
export function validateCPF(value: string): boolean {
  // Campo sem máscara 
  const clearValue = String(value).replace(/\D/g, '');
  // O CPF possui 2 DVs, excluíndo para validar
  const valWithoutDvs = clearValue.substring(0, clearValue.length-2);
  let sum = 0;
  let rest;
  // Valida se está vazio ou é valor repetido
  if (!clearValue || isRepeated(clearValue) ){ 
    return false;
  }
  // Calcula o primeiro DV
  const dv1 = mod11(valWithoutDvs, 12);
  // Calcula o segundo DV2
  const dv2 = mod11(valWithoutDvs + dv1, 12);
  // Compara com a informação passada como paramêtro
  return (valWithoutDvs + dv1 + dv2) === clearValue;
}
