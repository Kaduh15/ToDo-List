/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import Task from '../../components/Task';
import { getUser } from '../../utils/fetch';
import useStorage from '../../utils/useStorage';

const initialStateUserTasks = {
  id: 0,
  name: '',
  email: '',
  tasks: [],
};

export default function Home() {
  const [token] = useStorage('ACCESS_TOKEN');
  const [{ tasks }, setUser] = useState(initialStateUserTasks);

  useEffect(() => {
    (async () => {
      const result = await getUser(token);
      setUser(result);
    })();
  }, []);

  return (
    <main>
      <div className="flex flex-col gap-2">
        {tasks.length !== 0
          && tasks.map((task) => <Task key={task.id} {...task} />)}
      </div>
    </main>
  );
}
