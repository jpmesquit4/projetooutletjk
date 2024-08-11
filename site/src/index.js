import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/home';
import ResultadoDeBusca from './pages/resultadoDeBusca';
import SobreNos from './pages/sobreNos';
import LoginCliente from './pages/loginCliente';
import CadastroCliente from './pages/cadastroCliente';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/resultadodebusca' element={<ResultadoDeBusca /> } />
        <Route path='/sobrennos' element={<SobreNos /> } />
        <Route path='/login' element={<LoginCliente /> } />
        <Route path='/cadastro' element={<CadastroCliente /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

