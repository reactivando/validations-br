export function validatePhone(value: string): boolean {
  const regex = /^[1-9]{2}9?[1-9]\d{7}$/;
  const phone = value.replace(/\D/g, '');
  if (regex.test(phone)) {
    return Boolean(phone);
  }
  return false;
}
