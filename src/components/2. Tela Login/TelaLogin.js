import React from 'react';
import { useHistory} from 'react-router-dom';
import './styles.js';
import logoinvert from '../../assets/imagens/logoinvert.png';
import {LogoContainer, Container, FormContainer, TituloEntrar, InputsLogin, BotaoEntrar, LinkCadastro,
TextoLinkCadastro, Body} from './styles'
import { Button } from '@material-ui/core'

const TelaLogin = () => {
  const history = useHistory();

  const baseUrl =
    'https://us-central1-missao-newton.cloudfunctions.net/fourFoodB';

  const irParaFeed = () => {
    history.push('/feed');
  };

  const irParaCadastro = () => {
    history.push('/cadastro');
  };

  return (
   <FormContainer>
        <LogoContainer
          src={logoinvert}
          alt="logotipo ifuture"
        />
        <TituloEntrar>Entrar</TituloEntrar>
        <InputsLogin
          required
          id="outlined-required"
          label="E-mail"
          variant="outlined"
          // value={}
          // onChange={}
          placeholder="email@email.com"
        />
        <InputsLogin
          className="style-input"
          required
          type="password"
          id="outlined-required"
          label="Senha"
          variant="outlined"
          //value={}
          //onChange={}
          placeholder="Mínimo 6 caracteres"
        />
        <BotaoEntrar variant="contained" color="primary" onClick={'#'}>Entrar</BotaoEntrar>
        <LinkCadastro to="/cadastro">
          <TextoLinkCadastro>Não possui cadastro? Clique aqui.</TextoLinkCadastro>
        </LinkCadastro>
    </FormContainer>
  );
};

export default TelaLogin;
