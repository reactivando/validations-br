import { validateCE } from './ce';

export function validateMA(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  if (ieStr.substr(0, 2) !== '12') return false;

  return validateCE(ieStr);
}
