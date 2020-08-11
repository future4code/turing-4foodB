import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import './styles.js';
import logoinvert from '../../assets/imagens/logoinvert.png';
import {LogoContainer, Container, FormContainerCadastro, TituloCadastro, InputsCadastro, BotaoCadastro, LinkCadastro,
} from './styles'


const TelaCadastro = () => {
    const history = useHistory()

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"

    const irParaCadastroEnd = () => {
        history.push("/cadastro/endereco")
    }

return (
    <FormContainerCadastro>
    <LogoContainer
      src={logoinvert}
      alt="logotipo ifuture"
    />
    <TituloCadastro>Cadastrar</TituloCadastro>
    <InputsCadastro
      required
      id="outlined-required"
      label="Nome"
      variant="outlined"
      // value={}
      // onChange={}
      placeholder="Nome e sobrenome"
    />
    <InputsCadastro
      required
      id="outlined-required"
      label="E-mail"
      variant="outlined"
      // value={}
      // onChange={}
      placeholder="email@email.com"
    />
  
    <InputsCadastro
      className="style-input"
      required
      id="outlined-required"
      label="CPF"
      type="number"
      variant="outlined"
      //value={}
      //onChange={}
      placeholder="000.000.000-00"
    />
  
    <InputsCadastro
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
     
     <InputsCadastro
      className="style-input"
      required
      type="password"
      id="outlined-required"
      label="Confirmar"
      variant="outlined"
      //value={}
      //onChange={}
      placeholder="Confirme a senha anterior"
    /> 
        
    <BotaoCadastro variant="contained" color="primary" onClick={irParaCadastroEnd}>Criar</BotaoCadastro>
    <LinkCadastro to="/cadastro">
    
    </LinkCadastro>
</FormContainerCadastro>

    )  
}

export default TelaCadastro


