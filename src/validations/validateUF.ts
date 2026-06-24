/**
 * The function `validateUF` validates a Brazilian state abbreviation (UF) using a regular expression.
 * @param {string} uf - The `uf` parameter is a string that represents the Brazilian state
 * abbreviation (e.g., 'SP', 'RJ', 'MG').
 * @returns The `validateUF` function returns a boolean value. It returns `true` if the provided `uf`
 * is a valid Brazilian state abbreviation, and `false` otherwise.
 */
const ufRegex =
  /^(?:ac|al|ap|am|ba|ce|df|es|go|ma|mt|ms|mg|pa|pb|pr|pe|pi|rj|rn|rs|ro|rr|sc|sp|se|to)$/i;

export function validateUF(uf: string): boolean {
  return typeof uf === 'string' && ufRegex.test(uf);
}
