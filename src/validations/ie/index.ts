import * as validations from './states';

const ufs = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
];

// eslint-disable-next-line no-unused-vars
const validationFns: { [key: string]: (_ie: string) => boolean } = {};

ufs.forEach(uf => {
  const fnName = `validate${uf}` as keyof typeof validations;
  const fn = validations[fnName];
  if (fn) {
    validationFns[uf] = fn;
    validationFns[uf.toLowerCase()] = fn;
  }
});

/**
 * The function `validateIE` validates a Brazilian state registration number (IE) for a given state
 * (UF).
 * @param {string} ie - The `ie` parameter is a string that represents the "Inscrição Estadual" (State
 * Registration) number of a company in Brazil.
 * @param {string} uf - The `uf` parameter is the state (UF) for which the IE is being validated. It
 * can be in uppercase or lowercase.
 * @returns The `validateIE` function returns a boolean value. It returns `true` if the provided `ie`
 * is a valid state registration number for the given state `uf`, and `false` otherwise.
 */
export function validateIE(ie: string, uf: string): boolean {
  const validationFn = validationFns[uf];
  return validationFn ? validationFn(ie) : false;
}
