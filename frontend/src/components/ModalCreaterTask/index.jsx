/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createdTask } from '../../utils/fetch';

const initailStateValues = {
  email: '',
  password: '',
};

export default function CreatedTask() {
  const navigate = useNavigate();
  const [values, setValues] = useState(initailStateValues);

  const handleChange = ({ value, name }) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createdTask(values).then(() => {
      navigate('/');
    });
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 p-10 bg-green-600 rounded"
      >
        <h1 className="text-4xl font-semibold text-white">Criar Tarefa</h1>

        <input
          type="text"
          placeholder="Nome da Tarefa"
          onChange={(e) => handleChange(e.target)}
          value={values.nameTask}
          name="nameTask"
        />
        <input
          type="text"
          placeholder="Descição da Tarefa"
          onChange={(e) => handleChange(e.target)}
          value={values.description}
          name="description"
        />

        <button type="submit" className="bg-white rounded px-4 py-1">
          Criar tarefa
        </button>

        <Link to="/" className="text-white text-sm">
          voltar para tarefa
        </Link>
      </form>
    </main>
  );
}
