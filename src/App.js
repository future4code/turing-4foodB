import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import TelaInicial from './components/1. Tela Inicial/TelaInicial'
import TelaLogin from './components/2. Tela Login/TelaLogin'
import TelaCadastro from './components/3. Tela Cadastro/TelaCadastro'
import TelaCadastroEnd from './components/4. Tela Cadastro Endereço/TelaCadastroEnd'
import TelaFeed from './components/5. Tela Feed/TelaFeed'
import TelaRestaurante from './components/6. Tela Restaurante/TelaRestaurante'
import TelaPerfil from './components/7. Tela Perfil/TelaPerfil'
import TelaEditarPerfil from './components/8. Tela Editar Perfil/TelaEditarPerfil'
import TelaEditarEnd from './components/9. Tela Editar Endereço/TelaEditarEnd'
import TelaCarrinho from './components/10. Tela Carrinho/TelaCarrinho'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/">
          <TelaInicial />
        </Route>
        <Route exact path ="/login">
          <TelaLogin />
        </Route>
        <Route exact path ="/cadastro">
          <TelaCadastro />
        </Route>
        <Route exact path ="/cadastro/endereco">
          <TelaCadastroEnd />
        </Route>
        <Route exact path ="/feed">
          <TelaFeed />
        </Route>
        <Route exact path ="/restaurante">
          <TelaRestaurante />
        </Route>
        <Route exact path ="/perfil">
          <TelaPerfil />
        </Route>
        <Route exact path ="/perfil/editar">
          <TelaEditarPerfil />
        </Route>
        <Route exact path ="/perfil/editar/endereco">
          <TelaEditarEnd />
        </Route>
        <Route exact path ="/carrinho">
          <TelaCarrinho />
        </Route>
        <Route path ="/">
          <h1>Erro 404 - Página não encontrada</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;