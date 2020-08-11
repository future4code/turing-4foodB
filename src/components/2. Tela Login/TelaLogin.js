import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.js';
import logoinvert from '../../assets/imagens/logoinvert.png';
import {
  LogoContainer,
  FormContainer,
  TituloEntrar,
  InputsLogin,
  BotaoEntrar,
  LinkCadastro,
  TextoLinkCadastro,
} from './styles';
import axios from 'axios';

const baseUrl =
  'https://us-central1-missao-newton.cloudfunctions.net/fourFoodB';

function TelaLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const proximaPagina = () => {
    history.push('/feed');
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const login = async () => {
    const loginBody = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(`{baseURL}`, loginBody);
      window.localStorage.setItem('token', response.data.token);
      window.localStorage.setItem('user', JSON.stringify(response.data.user));
      alert('Seja bem vindo ao FourFood');
      proximaPagina();
    } catch (error) {
      console.log(error);
      alert('Erro ao logar, usuário não autorizado');
    }
  };

  return (
    <FormContainer>
      <LogoContainer src={logoinvert} alt="logotipo ifuture" />
      <TituloEntrar>Entrar</TituloEntrar>
      <InputsLogin
        required
        id="outlined-required"
        label="E-mail"
        variant="outlined"
        value={email}
        onChange={handleEmail}
        placeholder="email@email.com"
      />
      <InputsLogin
        className="style-input"
        required
        type="password"
        id="outlined-required"
        label="Senha"
        variant="outlined"
        value={password}
        onChange={handlePassword}
        placeholder="Mínimo 6 caracteres"
      />
      <BotaoEntrar variant="contained" color="primary" onClick={login}>
        Entrar
      </BotaoEntrar>
      <LinkCadastro to="/cadastro">
        <TextoLinkCadastro>Não possui cadastro? Clique aqui.</TextoLinkCadastro>
      </LinkCadastro>
    </FormContainer>
  );
}

export default TelaLogin;
