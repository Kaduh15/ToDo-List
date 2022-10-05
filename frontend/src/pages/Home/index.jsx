import React, { useState } from 'react';
import useDidMount from '../../hooks/useDidMount';
import { getUser } from '../../utils/fetch';
import useStorage from '../../utils/useStorage';

export default function Home() {
  const [token] = useStorage('ACCESS_TOKEN');
  const [user, setUser] = useState({});

  useDidMount(async () => {
    const result = await getUser(token);
    setUser(result);
  });

  return (
    <main>
      <header>
        {JSON.stringify(user, null, 2)}
      </header>
    </main>
  );
}
