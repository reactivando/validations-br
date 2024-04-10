import { extractNumericChars } from '../../../utils';
import { validateCE } from './ce';

export function validateMA(ie: string): boolean {
  const ieStr = extractNumericChars(ie);

  if (ieStr.substr(0, 2) !== '12') return false;

  return validateCE(ieStr);
}
