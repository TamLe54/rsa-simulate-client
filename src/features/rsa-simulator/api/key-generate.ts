import type { AxiosError } from 'axios';

import { useMutation } from '@tanstack/react-query';

import { apiUrls } from '@/constants';
import { axios } from '@/lib/axios';

export type AccountToGenerateKey = {
  email: string;
  password: string;
};

export type GeneralError = {
  message: string;
  success: boolean;
  errorId: string;
  errors: string[];
};

export const generateKeyPair = async (data: AccountToGenerateKey) => {
  try {
    const result = await axios.post(apiUrls.rsa.keyGenerate, data);

    return result.data;
  } catch (err) {
    throw err;
  }
};

export const useKeyGenerate = () => {
  return useMutation({
    mutationFn: generateKeyPair,
    onError: (error: AxiosError<GeneralError>) => {
      return error;
    },
  });
};
