import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import useStorage from './utils/useStorage';

import Login from './pages/login';
import Register from './pages/register';
import { isAuth } from './utils/axios';

function PrivateRoute({ children }) {
  const [token] = useStorage('ACCESS_TOKEN');

  const auth = isAuth(token);
  return auth ? children : <Navigate to="/login" />;
}

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={(
              <PrivateRoute>
                <h1>Home</h1>
              </PrivateRoute>
          )}
          />
        </>
      </Routes>
    </BrowserRouter>
  );
}
