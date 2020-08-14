import { validateCE } from './ce';

export function validateMS(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  if (ieStr.substr(0, 2) !== '28') return false;

  return validateCE(ieStr);
}
