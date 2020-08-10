import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LogoContainer = styled.img`
  width: 7rem;
  height: 4rem;
  margin: 1rem;
`

export const TituloEntrar = styled.h4`
  margin: 1rem 1rem 2rem 1rem;
`

export const InputsLogin = styled(TextField)`
  width: 21rem;
  height: 4rem;
  margin: 0.5rem 1rem 0.5rem 1rem;
`

export const BotaoEntrar = styled(Button)`
  /* width: 21rem;
  height: 3rem; */
  margin: 0.5rem 1rem 0.5rem 1rem;
  background-color: #e8222e;
  border: 0;
  border-radius: 2px;
  color: black!important;
  text-transform: none!important;
  font-weight: 600!important;


  width: 18.5rem;
  height: 1.125rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
`

export const TextoLinkCadastro = styled.p`
  margin: 1rem 2rem 1rem 2rem;
  font-size: 1em;
  font-weight: 700;
`

export const LinkCadastro = styled.div`
  text-decoration: none;
  color: inherit;
`
