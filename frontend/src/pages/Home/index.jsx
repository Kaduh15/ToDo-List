/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import Task from '../../components/Task';
import useFetch from '../../hooks/useFecth';

export default function Home() {
  const navigate = useNavigate();
  const { data } = useFetch('user');

  if (!data) return <h1>Carregando...</h1>;
  const { tasks } = data;

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
