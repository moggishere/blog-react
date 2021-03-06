import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import './App.css';
import CadastroUsuario from './pages/cadastrousuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: '100vh' }}>

          <Route exact path='/'>
            <Login />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>
          <Route path='/temas'>
            <ListaTema />
          </Route>
          <Route path='/posts'>
            <ListaPostagem />
          </Route>

          <Route exact path='/formularioPostagem'>
            {/* <CadastroPost /> */}
          </Route>
          <Route exact path='/formularioPostagem/:id'>
            {/* <CadastroPost /> */}
          </Route>
          <Route exact path='/formularioTema'>
            {/* <CadastroTema /> */}
          </Route>
          <Route exact path='/formularioTema/:id'>
            {/* <CadastroTema /> */}
          </Route>
          <Route path='/deletarPostagem/:id'>
            {/* <DeletarPostagem /> */}
          </Route>
          <Route path='/deletarTema/:id'>
            {/* <DeletarTema /> */}
          </Route>


        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;