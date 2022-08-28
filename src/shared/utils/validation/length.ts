import { LengthOptions } from './models/options/LengthOptions';
import { ValidatorFn } from './models/ValidatorFn';

const _validateLength: ValidatorFn = (
  text: string,
  options?: LengthOptions
): boolean => {
  const textLength = text.trim().length;

  // TODO: Change the hard coded number to options.min
  if (options !== undefined && textLength < 4) {
    return false;
  }
  // TODO: change the hard coded number to options.max
  if (options !== undefined && textLength > 20) {
    return false;
  }

  return true;
};

export const validateNameLength: ValidatorFn = (text: string): boolean => {
  return _validateLength(text, { min: 4 });
};

export const validatePasswordLength: ValidatorFn = (text: string): boolean => {
  return _validateLength(text, { min: 4, max: 20 });
};
