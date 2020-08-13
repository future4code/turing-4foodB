import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 36rem;
  margin-top: 0rem;
`;

export const TituloEntrar = styled.h4`
  margin: 1rem 1rem 2rem 1rem;
`;

export const InputsLogin = styled(TextField)`
  width: 21rem;
  height: 4rem;
  margin: 0.5rem 1rem 0.5rem 1rem;
`;

export const BotaoSalvar = styled(Button)`
  width: 21rem;
  height: 3rem;
  margin: 0.5rem 1rem 0.5rem 1rem;
  background-color: #e8222e;
  border: 0;
  border-radius: 2px;
  color: black !important;
  text-transform: none !important;
  font-weight: 600 !important;
`;
