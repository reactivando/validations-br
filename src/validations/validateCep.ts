/**
 * The function `validateCep` validates a Brazilian CEP (postal code) using a regular expression.
 * @param {string} cep - The `cep` parameter is a string that represents the CEP (Código de
 * Endereçamento Postal - Postal Addressing Code) to be validated.
 * @returns The `validateCep` function returns a boolean value. It returns `true` if the provided `cep`
 * is a valid CEP, and `false` otherwise.
 */
const cepRegex = /^(\d{8}|\d{5}-\d{3})$/;

export function validateCep(cep: string): boolean {
  return typeof cep === 'string' && cepRegex.test(cep);
}
