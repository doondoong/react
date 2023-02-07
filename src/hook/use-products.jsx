import { useState, useEffect } from 'react';
import { envVars } from '../vars/envVars';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
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
      //   .then((data) => data.kidscafe[1].row)
      //   .catch((e) => console.log(e));
    },
    {
      staleTime: 1000 * 60 * 4,
    },
  );
  //   useEffect(() => {
  //     refetch();
  //   }, [sigun_nm]);
  //   const [data, setData] = useState();
  //   const [error, setError] = useState();
  //   const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     setLoading(true);

  //     postData(url)
  //       .then((data) => {
  //         setData(data.Kidscafe[1].row);
  //       })
  //       .catch((e) => {
  //         setError(`api error: ${e}`);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   }, [sigun_nm]);

  return [isLoading, error, kids];
}
