import React from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import './styles.js';
import logoinvert from '../../assets/imagens/logoinvert.png';
import {
  LogoContainer, 
  FormContainerCadastro, 
  TituloCadastro, 
  InputsCadastro, 
  BotaoCadastro, 
  LinkCadastro,
  FormContainer,
  InputsLogin
} from './styles'
import AppHeader from '../AppHeader';
import { useForm } from '../hooks/useForm.js';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';

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

const TelaCadastro = () => {
  const classes = useStyles();

  const history = useHistory()

  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB" 

  const irParaCadastroEnd = () => {
      history.push("/cadastro/endereco")
  }

  const repetirProcedimento = () => {
    history.push("/cadastro")
  }

  const [form, setform] = React.useState({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmaPassword:""
  });
  
  const handleInputChange = (prop) => (event) => {
    setform({ ...form, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setform({ ...form, showPassword: !form.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const checkPassword = () => {
    const password1 = form.password
    const password2 = form.confirmaPassword
      if (password1 === password2) {
        registerUser()
      } else {
        alert("sua senha não é igual")
        repetirProcedimento()
      }
  }

  const handleFormform = (event) => {
    checkPassword()   
    event.preventDefault()   
  };

  const registerUser = () => {
    axios
      .post(`${baseUrl}/signup`, form)
      .then((response) => {
        window.localStorage.setItem('token', response.data.token);
        window.localStorage.setItem('user', JSON.stringify(response.data.user));
        alert("Vamos para a segunda etapa")
        irParaCadastroEnd()
      })
      .catch((error) => {
        console.log(error.response.data.message)
        alert(error.response.data.message + ", cadastro não realizado");
      })
  };
    
  
return (
  <FormContainer className={classes.root} onSubmit={handleFormform}> 
    <LogoContainer
      src={logoinvert}
      alt="logotipo ifuture"
    />

    <TituloCadastro>Cadastrar</TituloCadastro>
    <InputsLogin 
      required
      id="name"
      label="Nome"
      type="text"
      variant="outlined"
      value={form.name}
      onChange={handleInputChange('name')}
      placeholder="Nome e sobrenome"
    />

    <InputsLogin
      required
      id="email"
      label="E-mail"
      type="email"
      variant="outlined"
      value={form.email}
      onChange={handleInputChange('email')}
      placeholder="email@email.com"
    />
    
    <InputsCadastro
      className="style-input"
      required
      id="cpf"
      label="CPF"
      type="number"
      variant="outlined"
      value={form.cpf}
      onChange={handleInputChange('cpf')}
      placeholder="000.000.000-00"
    />
    
    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
      <InputLabel htmlFor="password">Senha</InputLabel>
      <OutlinedInput
        id="password"
        type={form.showPassword ? 'text' : 'password'}
        value={form.password}
        onChange={handleInputChange('password')}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {form.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />
    </FormControl>

    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
      <InputLabel htmlFor="password">Confirmar</InputLabel>
      <OutlinedInput
        id="confirmaPassword"
        type={form.showPassword ? 'text' : 'password'}
        value={form.confirmaPassword}
        onChange={handleInputChange('confirmaPassword')}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {form.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />
    </FormControl>
        
    <BotaoCadastro variant="contained" color="primary" onClick={handleFormform}>Criar</BotaoCadastro>
    <LinkCadastro to="/cadastro"></LinkCadastro>
  </FormContainer>
)}

export default TelaCadastro


