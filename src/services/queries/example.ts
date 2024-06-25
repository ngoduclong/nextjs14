import { useQuery } from '@tanstack/react-query';

import { getExampleAPI } from '@/services/apis/example';

export const useGetExampleQuery = (exampleId: string, queryKey?: string[]) => {
  return useQuery({
    queryKey: queryKey ?? ['get-example', exampleId],
    queryFn: async (_options) => {
      try {
        const response = await getExampleAPI(exampleId);
        return response;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });
};
