import React, { useEffect, useState } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ModalCreatedTask from './components/ModalCreaterTask';
import { isAuth } from './utils/fetch';

function PrivateRoute({ children }) {
  const [auth, setAuth] = useState();

  useEffect(() => {
    isAuth().then((res) => setAuth(res));
  }, []);

  if (auth !== undefined) return auth ? children : <Navigate to="/login" />;
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
          <Route
            path="/create-task"
            element={(
              <PrivateRoute>
                <ModalCreatedTask />
              </PrivateRoute>
          )}
          />
        </>
      </Routes>
    </BrowserRouter>
  );
}
