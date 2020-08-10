import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import './TelaLogin.css';
import logoinvert from '../../assets/imagens/logoinvert.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.5rem;
  height: 55rem;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
    <Container>
      <FormContainer>
        <img
          src={logoinvert}
          className="imagemlogovermelho"
          alt="logotipo ifuture"
        />
        <h4 className="style-tittle">Entrar</h4>
        <TextField
          className="style-input"
          required
          id="outlined-required"
          label="E-mail"
          variant="outlined"
          // value={}
          // onChange={}
          placeholder="email@email.com"
        />
        <TextField
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
        <button onClick={'#'} className="style-button">
          Entrar
        </button>
        <Link to="/cadastro" className="link-text">
          <p className="style-text">Não possui cadastro? Clique aqui.</p>
        </Link>
      </FormContainer>
    </Container>
  );
};

export default TelaLogin;
