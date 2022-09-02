import React from 'react';
import Cadastro from './Pages/Cadastro';
import Contato from './Pages/Contato';
import Cronograma from './Pages/Cronograma';
import Dicas from './Pages/Dicas';
import Erro from './Pages/Erro';
import Home from './Pages/Home';
import Produtos from './Pages/Produtos';
import Refs from './Pages/Refs';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
// import * as S from './styles/Sheader'
import Logo from './img/galery/logo_todecacho.png'

export default function App(){
  return(
    <Router>

      <>
        <Link to='/'>
            <li><img src={Logo} alt="Logo Cachos" /></li>
        </Link>
        <Link to='/dicas'><li>Dicas</li></Link>
        <Link to='/cronograma'><li>Cronograma Capilar</li></Link>
        <Link to='/produtos'><li>Produtos</li></Link>
        <Link to='/referencias'><li>Referências</li></Link>
        <Link to='/cadastro'><li>Cadastre-se</li></Link>
        <Link to='/contato'><li>Contato</li></Link>
      </>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cadastro' element={<Cadastro />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='/cronograma' element={<Cronograma />}/>
        <Route path='/dicas' element={<Dicas />}/>
        <Route path='/produtos' element={<Produtos />}/>
        <Route path='/referencias' element={<Refs />}/>
        <Route path='*' element={<Erro />}/>
      </Routes>
      
    </Router>
  )
}
