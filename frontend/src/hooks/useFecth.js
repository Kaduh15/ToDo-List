import useSWR from 'swr';
import userStore from '../stores/userStore';

export default function useFetch(path, body) {
  const { token } = userStore((store) => store);
  const options = {
    ...(body && { body }),
    ...(token && {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    }),
  };

  const { data, error, mutate } = useSWR(`${process.env.REACT_APP_URL_API}/${path}`, async (url) => {
    const response = await fetch(url, options);
    const dataFecth = await response.json();

    return dataFecth;
  });

  return { data, error, mutate };
}
