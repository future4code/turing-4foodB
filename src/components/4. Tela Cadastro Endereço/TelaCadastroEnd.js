import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import './styles.js';
import logoinvert from '../../assets/imagens/logoinvert.png';
import {LogoContainer, Container, FormContainerCadastroEndereco, TituloCadastroEnd, InputsCadastroEndereco, BotaoCadastroEndereco, LinkCadastro,
} from './styles'
import AppHeader from '../AppHeader';


const TelaCadastroEnd = () => {
    const history = useHistory()

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"

    const irParaFeed = () => {
        history.push("/feed")
    }
    return (
        <FormContainerCadastroEndereco>
        <AppHeader />
        <LogoContainer
          src={logoinvert}
          alt="logotipo ifuture"
        />

        <TituloCadastroEnd>Meu endereço</TituloCadastroEnd>

        <InputsCadastroEndereco
          required
          id="outlined-required"
          label="Logradouro"
          variant="outlined"
          // value={}
          // onChange={}
          placeholder="Rua / Av."
        />
          
        <InputsCadastroEndereco
          className="style-input"
          required
          id="outlined-required"
          label="Numero"
          type="number"
          variant="outlined"
          //value={}
          //onChange={}
          placeholder="Numero"
        />
      
      <InputsCadastroEndereco
          required
          id="outlined-required"
          label="Complemento"
          variant="outlined"
          // value={}
          // onChange={}
          placeholder="Apto. / Bloco"
        />
         
         <InputsCadastroEndereco
          required
          id="outlined-required"
          label="Bairro"
          variant="outlined"
          // value={}
          // onChange={}
          placeholder="Bairro"
        />

         <InputsCadastroEndereco
          required
          id="outlined-required"
          label="Cidade"
          variant="outlined"
          // value={}
          // onChange={}
          placeholder="Cidade"
        />
               
         <InputsCadastroEndereco
          required
          id="outlined-required"
          label="Estado"
          variant="outlined"
          // value={}
          // onChange={}
          placeholder="Estado"
        />
            
        <BotaoCadastroEndereco variant="contained" color="primary" onClick={irParaFeed}>Salvar</BotaoCadastroEndereco>
        <LinkCadastro to="/cadastro">
        </LinkCadastro>
    </FormContainerCadastroEndereco>
    
        )  
    }
    
export default TelaCadastroEnd
