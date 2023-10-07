import { useMutation } from '@tanstack/react-query';

import { apiUrls } from '@/constants';
import { axios } from '@/lib/axios';

export type RequestToDecrypt = {
  email: string;
  password: string;
  encryptedData: string;
  privateKey: string;
};

export const dataToDecrypt = async (data: RequestToDecrypt) => {
  const result = await axios.post(apiUrls.rsa.decrypt, data);

  return result.data;
};

export const useDataDecryption = () => {
  return useMutation({
    mutationFn: dataToDecrypt,
  });
};
