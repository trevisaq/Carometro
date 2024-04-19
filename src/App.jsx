import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home.jsx';
import Login from './assets/pages/login.jsx';
import Cadastro from './assets/pages/cadastro.jsx'
import Alunos from './assets/pages/alunos.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/alunos" element={<Alunos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
