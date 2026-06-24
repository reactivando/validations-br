/**
 * The function `validateEmail` uses a regular expression to check if a given string is a valid email
 * address.
 * @param {string} value - The `value` parameter is a string that represents the email address that
 * needs to be validated.
 * @returns The `validateEmail` function returns a boolean value. It returns `true` if the email is
 * valid, and `false` otherwise.
 */
const emailRegex =
  /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[A-Z0-9-]+\.)+[A-Z]{2,24}$/i;

export function validateEmail(value: string): boolean {
  return emailRegex.test(value);
}
