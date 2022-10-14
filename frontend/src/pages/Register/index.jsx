/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../utils/fetch';

const initailStateValues = {
  name: '',
  email: '',
  password: '',
};

export default function Register() {
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

    register(values).then(() => {
      navigate('/login');
    });
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 p-10 bg-blue-600 rounded">
        <h1 className="text-4xl font-semibold text-white">Register</h1>

        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => handleChange(e.target)}
          value={values.name}
          name="name"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => handleChange(e.target)}
          value={values.email}
          name="email"
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => handleChange(e.target)}
          value={values.password}
          name="password"
        />

        <button
          type="submit"
          className="bg-white rounded px-4 py-1"
        >
          Criar conta
        </button>

        <Link to="/login" className="text-white text-sm">Já tenho uma conta</Link>
      </form>
    </main>
  );
}
