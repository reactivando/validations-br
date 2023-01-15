/**
 * Valida a CNH. A entrada pode ser com ou sem máscaras.
 * O tamanho deve ser respeitado como em '000000000-00' ou '00000000000'.
 * @param value
 */
export function validateCNH(value: string) {
  const clearValue = String(value).replace(/\D/g, '');
  if (
    !clearValue ||
    clearValue.replace(new RegExp(clearValue[0], 'g'), '').trim().length === 0
  ) {
    return false;
  }
  let val = 0;
  for (let i = 0, j = 9; i < 9; ++i, --j) {
    val += Number(value.charAt(i)) * j;
  }
  let dsc = 0;
  let vl1 = val % 11;
  if (vl1 >= 10) {
    vl1 = 0;
    dsc = 2;
  }
  val = 0;
  for (let i = 0, j = 1; i < 9; ++i, ++j) {
    val += Number(value.charAt(i)) * j;
  }
  const x = val % 11;
  const vl2 = x >= 10 ? 0 : x - dsc;
  return `${vl1}${vl2}` === value.substring(value.length - 2);
}
