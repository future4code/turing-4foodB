import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.js';
import { FormContainer, InputsLogin, BotaoSalvar, TituloEntrar } from './styles';
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
        window.localStorage.setItem('token', response.data.token);
        window.localStorage.setItem('user', JSON.stringify(response.data.user));
        alert('endereco adicionado');
        goToProfile();
      })
      .catch((error) => {
        console.log("Por favor preencha todos os campos" + error);
      });
  };
  return (
    <div>
      <AppHeader />
      <FormContainer onSubmit={handleFormValues}>
        <TituloEntrar>Meu endereço</TituloEntrar>
        <InputsLogin
          id="street"
          type="text"
          required
          label="Logradouro"
          value={form.street}
          onChange={handleInputChange}
          name="street"
          variant="outlined"
        />

        <InputsLogin
          id="number"
          required
          type="number"
          label="Numero"
          value={form.number}
          name="number"
          onChange={handleInputChange}
          variant="outlined"
        />

        <InputsLogin
          id="complement"
          required
          type="text"
          label="Apto"
          value={form.complement}
          name="complement"
          onChange={handleInputChange}
          variant="outlined"
        />

        <InputsLogin
          id="neighbourhood"
          required
          type="text"
          label="Bairro"
          value={form.neighbourhood}
          name="neighbourhood"
          onChange={handleInputChange}
          variant="outlined"
        />

        <InputsLogin
          id="city"
          required
          type="text"
          label="Cidade"
          value={form.city}
          name="city"
          onChange={handleInputChange}
          variant="outlined"
        />

        <InputsLogin
          id="state"
          required
          type="text"
          label="Estado"
          value={form.state}
          name="state"
          onChange={handleInputChange}
          variant="outlined"
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
export default TelaCadastroEnd;
