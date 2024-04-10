/**
 * Recebe uma string e outra string removendo caracteres não numéricos.
 * @param value Uma string qualquer
 * @returns Retorna uma string sem caracteres não numéricos
 */
export const extractNumericChars = (value: string) =>
  String(value).replace(/\D/g, '');

/**
 * Calcula o MOD11 para o número informado
 * @param valor Número base para o calculo
 * @param limite Limite da casa de multiplicação
 * Para CPF assume o valor de 12, para CNPJ o valor de 9.
 * @returns Retorna o DV calculado
 */
export const mod11 = (clearValue: string, limite: number): number => {
  const valor = extractNumericChars(clearValue);
  let sum = 0;
  let mult = 2;

  for (let i = valor.length - 1; i >= 0; i--) {
    sum += mult * +valor[i];
    if (++mult > limite) {
      mult = 2;
    }
  }
  const dv = ((sum * 10) % 11) % 10;
  return dv;
};

/**
 * Função auxiliar para gerar números reservados
 * @param charLength A quantidade de caracteres de cada item do array
 * @returns Retorna um array
 * @example
 *
 * const knownInvalidCPFs = generateRervedNumbers(9);
 * // => ['000000000', '111111111', '222222222', ... '999999999']
 *
 */
export const generateRervedNumbers = (charLength: number) =>
  Array.from({ length: 10 }, (_, i) => String(i).repeat(charLength));
