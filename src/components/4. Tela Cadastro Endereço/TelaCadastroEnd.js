import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import './styles.js';
import logoinvert from '../../assets/imagens/logoinvert.png';
import {LogoContainer, Container, FormContainerCadastroEndereco, TituloCadastroEnd, InputsCadastroEndereco, BotaoCadastroEndereco, LinkCadastro,
import AppHeader from '../AppHeader';


   //quando actualizar cada uno de esos campos tambem quero atulizar meu form

      

  
        


    const TelaCadastroEnd = () => {

      const history = useHistory();
      const irParaFeed = () => {
             history.push("/feed")
      }


      const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"

     

    const [form, setForm] = useState({
      rua: '',
      numero:0,
      nomebloco:'',
      bairro:'',
      cidade:'',
      estado:''
    })


     const onChangeInput = (event) => {
       const newValue = event.target.value
       const fielName = event.target.name

       setForm({...form, [fielName]: newValue})
     }

     

     

  
  
  

  console.log(form)


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
          value={form['rua']}
          onChange={onChangeInput}
          placeholder="Rua / Av."
          name={'rua'}
        />
          
        <InputsCadastroEndereco
          className="style-input"
          required
          id="outlined-required"
          label="Numero"
          type="number"
          variant="outlined"
          value={form['numero']}
          onChange={onChangeInput}
          placeholder="Numero"
          name={'numero'}
        />
      
      <InputsCadastroEndereco
          required
          id="outlined-required"
          label="Complemento"
          variant="outlined"
          value={form['nomebloco']}
          onChange={onChangeInput}
          placeholder="Apto. / Bloco"
          name={'nomebloco'}
        />
         
         <InputsCadastroEndereco
          required
          id="outlined-required"
          label="Bairro"
          variant="outlined"
          value={form['bairro']}
          onChange={onChangeInput}
          placeholder="Bairro"
          name={'bairro'}
        />

         <InputsCadastroEndereco
          required
          id="outlined-required"
          label="Cidade"
          variant="outlined"
          value={form['cidade']}
          onChange={onChangeInput}
          placeholder="Cidade"
          name={'cidade'}
        />
               
         <InputsCadastroEndereco
          required
          id="outlined-required"
          label="Estado"
          variant="outlined"
          value={form['estado']}
          onChange={onChangeInput}
          placeholder="Estado"
          name={'estado'}
        />
            
        <BotaoCadastroEndereco variant="contained" color="primary" onClick={irParaFeed}>Salvar</BotaoCadastroEndereco>
        <LinkCadastro to="/cadastro">
        </LinkCadastro>
    </FormContainerCadastroEndereco>
    
        )  
    }
    
export default TelaCadastroEnd
