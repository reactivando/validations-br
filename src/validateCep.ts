export function validateCep(value: string): boolean {
  const regex = /^\d{5}-\d{3}$/;
  const cep = value;
  if (regex.test(cep)) {
    return Boolean(cep);
  }
  return false;
}
