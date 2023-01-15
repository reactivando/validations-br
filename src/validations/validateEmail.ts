export function validateEmail(value: string): boolean {
  const regex = /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[A-Z0-9-]+\.)+[A-Z]{2,10}$/i;
  const email = value;
  if (regex.test(email)) {
    return Boolean(email);
  }
  return false;
}
