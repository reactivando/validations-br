import { extractNumericChars } from '../../../utils';
import { validateCE } from './ce';

export function validatePA(ie: string): boolean {
  const ieStr = extractNumericChars(ie);

  if (ieStr.substr(0, 2) !== '15') return false;

  return validateCE(ieStr);
}
