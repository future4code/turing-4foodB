import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.js';
import { FormContainer, InputsLogin, InputsNome, BotaoSalvar } from './styles';
import axios from 'axios';
import AppHeader from '../AppHeader/index.js';
import { useForm } from '../hooks/useForm.js';

const baseUrl =
  'https://us-central1-missao-newton.cloudfunctions.net/fourFoodB';

function TelaCadastroEnd() {
  const history = useHistory();
  const goToProfile = () => {
    history.push('/feed');
  };

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
  return (
    <div>
      <AppHeader />
      <FormContainer onSubmit={handleFormValues}>
        <InputsLogin
          id="nome"
          required
          label="Nome"
          value={form.name}
          onChange={handleInputChange}
          name="name"
          variant="outlined"
        />

        <InputsLogin
          id="street"
          type="text"
          required
          label="Logradouro"
          value={form.street}
          onChange={handleInputChange}
          name="rua"
          variant="outlined"
        ></InputsLogin>

        <InputsLogin
          id="number"
          required
          type="number"
          label="Numero"
          value={form.number}
          name="Numero"
          onChange={handleInputChange}
          variant="outlined"
        ></InputsLogin>

        <InputsLogin
          id="complement"
          required
          type="text"
          label="Apto"
          value={form.complement}
          name="complemento"
          onChange={handleInputChange}
          variant="outlined"
        ></InputsLogin>

        <InputsLogin
          id="neighbourhood"
          required
          type="text"
          label="Bairro"
          value={form.neighbourhood}
          name="Bairro"
          onChange={handleInputChange}
          variant="outlined"
        ></InputsLogin>

        <InputsLogin
          id="city"
          required
          type="text"
          label="Cidade"
          value={form.city}
          name="cidade"
          onChange={handleInputChange}
          variant="outlined"
        ></InputsLogin>

        <InputsLogin
          id="state"
          required
          type="text"
          label="Estado"
          value={form.state}
          name="estado"
          onChange={handleInputChange}
          variant="outlined"
        ></InputsLogin>

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
export default TelaCadastroEnd;
