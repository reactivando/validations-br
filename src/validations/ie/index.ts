/**
 * The function `validateIE` validates a Brazilian state registration number (IE) for a given state
 * (UF) by dynamically importing the validation function for the specified state.
 * @param {string} ie - The `ie` parameter is a string that represents the "Inscrição Estadual" (State
 * Registration) number of a company in Brazil.
 * @param {string} uf - The `uf` parameter is the state (UF) for which the IE is being validated. It
 * can be in uppercase or lowercase.
 * @returns The `validateIE` function returns a `Promise<boolean>`. It returns `true` if the provided `ie`
 * is a valid state registration number for the given state `uf`, and `false` otherwise.
 */
export async function validateIE(ie: string, uf: string): Promise<boolean> {
  const upperUf = uf.toUpperCase();
  try {
    const {
      default: validate,
    } = await import(`./states/${upperUf.toLowerCase()}`);
    return validate(ie);
  } catch (error) {
    // If the module for the UF doesn't exist, we consider it an invalid UF.
    return false;
  }
}
