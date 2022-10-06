import React, { useState, useEffect } from 'react';
import { getUser } from '../../utils/fetch';
import useStorage from '../../utils/useStorage';

export default function Home() {
  const [token] = useStorage('ACCESS_TOKEN');
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      const result = await getUser(token);
      setUser(result);
    })();
  }, []);

  return <main>{JSON.stringify(user, null, 2)}</main>;
}
