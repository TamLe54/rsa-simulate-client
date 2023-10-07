import type { RuleObject, StoreValue } from 'rc-field-form/lib/interface';

import { emailPattern, passwordPattern } from '@/utils';

export const errorMessages = {
  required: 'Required',
  shopId: '*Please enter a valid spa ID.',
  password: {
    invalid: '*Include 8 to 20 characters, lower and upper case characters, numbers, and special characters combined',
    missMatch: '*Your password and confirm password does not match',
  },
  email: {
    invalid: '*Invalid email, please try again',
  },
};

export const requiredRule = { required: true, message: errorMessages.required };
export const requiredShopIdRule = { required: true, message: errorMessages.shopId };

export const passwordFormat = (msg: string) => (_: RuleObject, value: StoreValue) =>
  passwordPattern.test(value) ? Promise.resolve() : Promise.reject(new Error(msg));

export const emailFormat = (msg: string) => (_: RuleObject, value: StoreValue) => {
  return emailPattern.test(value) ? Promise.resolve() : Promise.reject(new Error(msg));
};

export const shouldBeEqual = (val: any, msg: string) => (_: RuleObject, value: StoreValue) =>
  value === val ? Promise.resolve() : Promise.reject(msg);
