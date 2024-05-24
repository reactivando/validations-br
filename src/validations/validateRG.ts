/**
 * Valida o número de RG.
 *
 * Um número válido:
 * - Deve incluir o dígito verificador.
 * - Deve conter 9 ou 11 dígitos.
 * - Gerar o mesmo dígito verificador com o que foi fornecido.
 * - Conter ou não separadores como pontos e traços.
 *
 * @param {string} value O número de RG, com ou sem separadores.
 * @returns {boolean} `true` se o número estiver corretamente formatado e o dígito verificador
 * calculado for o mesmo do fornecido.
 */
export function validateRG(value: string): boolean {
  // Validando tipo de dado da entrada.
  if (typeof value !== 'string') {
    return false;
  }

  // Validando se existem 9 dígitos.
  const numbers = value.replace(/[^0-9]/g, '');
  if (!numbers.match(/([0-9]{9}|[0-9]{11})/g)) {
    return false;
  }

  // Obtendo dígito verificador.
  const numberParts = numbers.split('');
  const validatorDigit = Number(numberParts.pop());

  // Gerando novo dígito usando os 8 primeiros números.
  let sum = 0;
  for (let i = 0; i < numberParts.length; i++) {
    const num = Number(numberParts[i]);
    const multiplier = i + 2;
    const result = num * multiplier;
    sum += result;
  }
  const remainder = sum % 11;
  const calculatedDigit = 11 - remainder;

  // Checando dígito calculado com o encontrado
  const isValid = validatorDigit === calculatedDigit;
  return isValid;
}
