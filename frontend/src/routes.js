import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="page2" element={<h1>page2</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
