/**
 * The function `validateCep` validates a Brazilian CEP (postal code) using a regular expression.
 * @param {string} cep - The `cep` parameter is a string that represents the CEP (Código de
 * Endereçamento Postal - Postal Addressing Code) to be validated.
 * @returns The `validateCep` function returns a boolean value. It returns `true` if the provided `cep`
 * is a valid CEP, and `false` otherwise.
 */
export function validateCep(cep: string): boolean {
  const regex = /^([\d]{8}|[\d]{5}-[\d]{3})$/;
  return typeof cep === 'string' && regex.test(cep);
}
