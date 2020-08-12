import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.js';
import { FormContainer, InputsLogin, InputsNome, BotaoSalvar } from './styles';
import axios from 'axios';
import AppHeader from '../AppHeader/index.js';
import { useForm } from '../hooks/useForm.js';

const baseUrl =
  'https://us-central1-missao-newton.cloudfunctions.net/fourFoodB';

function TelaEditaPerfil() {
  useEffect(() => {
    editProfile();
  }, []);

  const history = useHistory();
  const goToProfile = () => {
    history.push('/perfil');
  };

  const { form, onChange } = useForm({
    name: '',
    email: '',
    cpf: '',
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

    const axiosConfig = {
      headers: {
        auth: token,
      },
    };

    axios
      .put(
        'https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile',
        form,
        axiosConfig,
      )
      .then((response) => {
        console.log(response.data);
        alert('Perfil editado com sucesso');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <AppHeader />
      <FormContainer onSubmit={handleFormValues}>
        <InputsLogin
          id="outlined-required"
          required
          label="Nome"
          value={form.name}
          onChange={handleInputChange}
          name="name"
          variant="outlined"
        />

        <InputsLogin
          id="outlined-required"
          required
          type="email"
          label="E-mail"
          value={form.email}
          name="email"
          onChange={handleInputChange}
          variant="outlined"
        ></InputsLogin>

        <InputsLogin
          id="outlined-required"
          required
          type="number"
          label="CPF"
          value={form.cpf}
          name="cpf"
          onChange={handleInputChange}
          variant="outlined"
        ></InputsLogin>

        <BotaoSalvar variant="contained" color="primary" type="Submit">
          SALVAR
        </BotaoSalvar>
      </FormContainer>
    </div>
  );
}

export default TelaEditaPerfil;
