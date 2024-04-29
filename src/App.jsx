import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './assets/pages/Home.jsx';
import Login from './assets/pages/login.jsx';
import Cadastro from './assets/pages/cadastro.jsx';
import Idev2 from './assets/pages/idev2.jsx';
import Aluno1 from './assets/pages/aluno1.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} /> 
        <Route path="/idev2" element={<Idev2 />} />
        <Route path="/aluno1" element={<Aluno1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
