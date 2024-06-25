import { api } from '@/services';
import { TGetExampleRes } from '@/types/example';
import axios, { AxiosResponse } from 'axios';

export const getExampleAPI = async (exampleId: string) => {
  // example with fetch
  // const response = await useFetch(exampleId);
  // return response?.json();
  const response: AxiosResponse<TGetExampleRes> = await api.get(
    `https://jsonplaceholder.typicode.com/users/${exampleId}`,
  );
  return response.data;
};
