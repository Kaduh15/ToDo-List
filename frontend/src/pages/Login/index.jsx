import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../utils/fetch';

const initailStateValues = {
  email: '',
  password: '',
};

export default function Login() {
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

    login(values).then(() => {
      navigate('/');
    });
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 p-10 bg-blue-600 rounded">
        <h1 className="text-4xl font-semibold text-white">Login</h1>

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
          Login
        </button>

        <Link to="/register" className="text-white text-sm">Cria uma conta</Link>
      </form>
    </main>
  );
}
