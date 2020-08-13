import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.js';
import { FormContainer, InputsLogin, InputsNome, BotaoSalvar } from './styles';
import axios from 'axios';
import AppHeader from '../AppHeader/index.js';
import { useForm } from '../hooks/useForm.js';

const baseUrl =
  'https://us-central1-missao-newton.cloudfunctions.net/fourFoodB';

  

function EditaTelaCadastroEnd() {
  const history = useHistory();
  const goToProfile = () => {
    history.push('/perfil');
  };

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      history.push('/login');
    }
  });

  const { form, onChange } = useForm({
    name: '',
    street: '',
    number: '',
    neighbourhood: '',
    city: '',
    state: '',
    complement: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };
  const handleFormValues = (event) => {
    event.preventDefault();
    editProfile();
    goToProfile();
  };
  const editProfile = () => {
    const token = window.localStorage.getItem('token');
    const body = {
      name: `${form.name}`,
      street: `${form.street}`,
      number: `${form.number}`,
      neighbourhood: `${form.neighbourhood}`,
      city: `${form.city}`,
      state: `${form.state}`,
      complement: `${form.complement}`,
    };
    const axiosConfig = {
      headers: {
        auth: token,
      },
    };
    axios
      .put(`${baseUrl}/address`, body, axiosConfig)
      .then((response) => {
        console.log(response.data);
        alert('endereco adicionado');
      })
      .catch((error) => {
        console.log('Algo errado não está certo' + error);
      });
  };

  

  // Pegar Endereço
  const [profile, setProfile] = useState('');
  const getProfile = () => {
    const token = window.localStorage.getItem('token');

    const axiosConfig = {
      headers: {
        auth: token,
      },
    };

    axios
      .get(`${baseUrl}/profile`, axiosConfig)
      .then((response) => {
        setProfile(response.data.user);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getProfile();
  }, []);
  
  return (
    <div>
         <AppHeader />
      <FormContainer onSubmit={handleFormValues}>
        <InputsLogin
          id="street"
          type="text"
          required
          label="Logradouro"
          placeholder= {profile.address}
          value={form.street}
          onChange={handleInputChange}
          name="street"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />

        <InputsLogin
          id="number"
          required
          type="number"
          label="Número"
          placeholder= {profile.address}
          value={form.number}
          name="number"
          onChange={handleInputChange}
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />

        <InputsLogin
          id="complement"
          type="text"
          label="Complemento"
          placeholder= {profile.address}
          value={form.complement}
          name="complement"
          onChange={handleInputChange}
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />

        <InputsLogin
          id="neighbourhood"
          required
          type="text"
          label="Bairro"
          placeholder= {profile.address}
          value={form.neighbourhood}
          name="neighbourhood"
          onChange={handleInputChange}
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />

        <InputsLogin
          id="city"
          required
          type="text"
          label="Cidade"
          placeholder= {profile.address}
          value={form.city}
          name="city"
          onChange={handleInputChange}
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />

        <InputsLogin
          id="state"
          required
          type="text"
          label="Estado"
          placeholder= {profile.address}
          value={form.state}
          name="state"
          onChange={handleInputChange}
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />

        <BotaoSalvar
          variant="contained"
          color="primary"
          onClick={handleFormValues}
        >
          SALVAR
        </BotaoSalvar>
      </FormContainer>
    </div>
  );
}
export default EditaTelaCadastroEnd;
