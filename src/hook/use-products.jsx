import { useState, useEffect } from 'react';
import { envVars } from '../vars/envVars';
import {
  useQuery,
  //   useMutation,
  //   useQueryClient,
  //   QueryClient,
  //   QueryClientProvider,
} from '@tanstack/react-query';

export default function useProducts({ sigun_nm }) {
  const { API_KEY, API_KIDS_KEY } = envVars;

  async function postData(url = '') {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'x-cors-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  }
  const {
    isLoading,
    error,
    data: kids,
    // refetch,
  } = useQuery(
    ['kids', sigun_nm],
    async () => {
      const url = `https://proxy.cors.sh/https://openapi.gg.go.kr/Kidscafe?Key=${API_KIDS_KEY}&pindex=1&SIGUN_NM=${sigun_nm}&pSize=100`;
      return postData(url);
    },
    {
      staleTime: 1000 * 60 * 4,
    },
  );

  return [isLoading, error, kids];
}
