import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.js';
import logoinvert from '../../assets/imagens/logoinvert.png';
import {
  LogoContainer,
  FormContainer,
  TituloEntrar,
  InputsLogin,
  InputsPassword,
  BotaoEntrar,
  LinkCadastro,
  TextoLinkCadastro,
} from './styles';
import axios from 'axios';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
const baseUrl =
  'https://us-central1-missao-newton.cloudfunctions.net/fourFoodB';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  label: {
    marginTop: theme.spacing(20),
  },
  textField: {
    width: '21rem',
  },
}));

function TelaLogin() {
  const classes = useStyles();

  const history = useHistory();

  const proximaPagina = () => {
    history.push('/feed');
  };

  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const login = async () => {
    const loginBody = {
      email: values.email,
      password: values.password,
    };
    try {
      const response = await axios.post(`${baseUrl}/login`,
        loginBody,
      );
      window.localStorage.setItem('token', response.data.token);
      window.localStorage.setItem('user', JSON.stringify(response.data.user));
      proximaPagina();
    } catch (error) {
      console.log(error);
      setValues({email: '',
      password: '',})
      alert('Erro ao logar, usuário não autorizado');
    }
  };

  return (
    <FormContainer className={classes.root}>
      <LogoContainer src={logoinvert} alt="logotipo ifuture" />
      <TituloEntrar>Entrar</TituloEntrar>
      <InputsLogin
        required
        id="email"
        label="E-mail"
        variant="outlined"
        value={values.email}
        onChange={handleChange('email')}
        placeholder="email@email.com"
      />
        
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
        <InputLabel htmlFor="password">Senha</InputLabel>
        <OutlinedInput
          id="password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
      
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
