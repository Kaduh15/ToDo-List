import React, { useState } from 'react';
import useDidMount from '../../hooks/useDidMount';
import { getUser } from '../../utils/fetch';
import useStorage from '../../utils/useStorage';

export default function Home() {
  const [token] = useStorage('ACCESS_TOKEN');
  const [user, setUser] = useState({});

  useDidMount(async () => {
    const result = await getUser(token);
    console.log('aqui1', result);
  });

  return (
    <main>
      <header>
        {user.name}
      </header>
    </main>
  );
}
