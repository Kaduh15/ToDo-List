import React, { useState } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import useStorage from './utils/useStorage';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { isAuth } from './utils/fetch';
import useDidMount from './hooks/useDidMount';

function PrivateRoute({ children }) {
  const [token] = useStorage('ACCESS_TOKEN');
  const [auth, setAuth] = useState(false);

  useDidMount(async () => {
    setAuth(await isAuth(token));
  });

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
                <Home />
              </PrivateRoute>
          )}
          />
        </>
      </Routes>
    </BrowserRouter>
  );
}
