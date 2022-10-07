/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';

import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [token] = useStorage('ACCESS_TOKEN');
  const [{ tasks }, setUser] = useState(initialStateUserTasks);

  useEffect(() => {
    (async () => {
      const result = await getUser(token);
      setUser(result);
    })();
  }, []);

  return (
    <main className="flex flex-col gap-6 p-2 justify-center items-center">
      <button
        type="button"
        className="flex gap-4 justify-center m-2 items-center text-white bg-green-800 p-4"
        onClick={
          () => navigate('/create-task')
        }
      >
        Criar nova tarefa
        <FiPlus color="white" size={30} />
      </button>
      <div className="flex flex-col gap-2">
        {tasks.length !== 0
          && tasks.map((task) => <Task key={task.id} {...task} />)}
      </div>
    </main>
  );
}
