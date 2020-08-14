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
} from './styles'
import AppHeader from '../AppHeader';
import { useForm } from '../hooks/useForm.js';


const TelaCadastro = () => {
  const history = useHistory()

  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB" 

  const irParaCadastroEnd = () => {
      history.push("/cadastro/endereco")
  }

  const repetirProcedimento = () => {
    history.push("/cadastro")
  }

  const { form, onChange } = useForm ({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmaPassword:""
  });

  const handleInputChange = event => {
    const { name, value } = event.target
    onChange(name, value)
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

  const handleFormValues = (event) => {
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
  <FormContainerCadastro>
    <AppHeader />  
    <LogoContainer
      src={logoinvert}
      alt="logotipo ifuture"
    />
    <TituloCadastro>Cadastrar</TituloCadastro>
    <InputsCadastro onSubmit={handleFormValues}
      required
      id="name"
      label="Nome"
      variant="outlined"
      value={form.name}
      onChange={handleInputChange}
      placeholder="Nome e sobrenome"
      name="name"
    />
    <InputsCadastro
      required
      id="email"
      label="E-mail"
      variant="outlined"
      value={form.email}
      onChange={handleInputChange}
      placeholder="email@email.com"
      name="email"
    />
    
    <InputsCadastro
      className="style-input"
      required
      id="cpf"
      label="CPF"
      type="number"
      variant="outlined"
      value={form.cpf}
      onChange={handleInputChange}
      placeholder="000.000.000-00"
      name="cpf"
    />
    
    <InputsCadastro
      className="style-input"
      required
      type="password"
      id="password"
      label="Senha"
      variant="outlined"
      value={form.password}
      onChange={handleInputChange}
      placeholder="Mínimo 6 caracteres"
      name="password"
    />
      
      <InputsCadastro
      className="style-input"
      required
      type="password"
      id="confirmaPassword"
      label="Confirmar"
      variant="outlined"
      value={form.confirmaPassword}
      onChange={handleInputChange}
      placeholder="Confirme a senha anterior"
      name="confirmaPassword"
    /> 
        
    <BotaoCadastro variant="contained" color="primary" onClick={handleFormValues}>Criar</BotaoCadastro>
    <LinkCadastro to="/cadastro"></LinkCadastro>
  </FormContainerCadastro>
)}

export default TelaCadastro


