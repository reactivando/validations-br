import { validateCE } from './ce';

export function validatePA(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  if (ieStr.substr(0, 2) !== '15') return false;

  return validateCE(ieStr);
}
