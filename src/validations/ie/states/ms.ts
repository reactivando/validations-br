import { extractNumericChars } from '../../../utils';
import { validateCE } from './ce';

export function validateMS(ie: string): boolean {
  const ieStr = extractNumericChars(ie);

  if (ieStr.substr(0, 2) !== '28') return false;

  return validateCE(ieStr);
}
