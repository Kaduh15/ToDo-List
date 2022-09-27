import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <main className="flex justify-center items-center h-screen">
      <form className="flex flex-col items-center gap-4 p-4 bg-blue-600 rounded">
        <h1 className="text-2xl">Login</h1>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />

        <button type="submit">
          Login
        </button>

        <Link to="/register">Cria uma conta</Link>
      </form>
    </main>
  );
}
