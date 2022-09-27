/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = (set, value) => {
    set(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(
      'http://localhost:3001/login',
      {
        email,
        password,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ).then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 p-10 bg-blue-600 rounded">
        <h1 className="text-4xl font-semibold text-white">Login</h1>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => handleInput(setEmail, e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => handleInput(setPassword, e.target.value)}
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
