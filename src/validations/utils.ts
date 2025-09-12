/**
 * The function `isRepeated` checks if a given string consists of repeated characters.
 * @param {string} ref - The `ref` parameter is a string that you want to check for repeated
 * characters.
 * @returns a boolean value.
 */
export const isRepeated = (ref: string) => {
  const ret = ref.replace(new RegExp(ref[0], 'g'), '').trim().length === 0;
  return ret;
};

/**
 * The `mod11` function calculates the MOD11 checksum for a given value with a specified limit.
 * @param {string} clearValue - The `clearValue` parameter is a string that represents the numeric
 * value for which you want to calculate the MOD11 checksum. It should not contain any non-digit
 * characters.
 * @param {number} limite - The `limite` parameter in the `mod11` function represents the upper limit
 * for the multiplier used in the calculation. The multiplier starts at 2 and increments by 1 for each
 * digit of the input `clearValue`. When the multiplier exceeds the `limite`, it resets back to 2.
 * @returns The `mod11` function returns a number, which is the calculated check digit (DV).
 */
export const mod11 = (clearValue: string, limite: number): number => {
  const valor = String(clearValue).replace(/\D/g, '');
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
