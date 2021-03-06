import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.js';
import { 
  FormContainer, 
  InputsLogin, 
  BotaoSalvar 
} from './styles';
import axios from 'axios';
import AppHeader from '../AppHeader/index.js';
import { useForm } from '../hooks/useForm.js';

const baseUrl =
  'https://us-central1-missao-newton.cloudfunctions.net/fourFoodB';

function TelaEditaPerfil() {
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
  };

  const editProfile = () => {
    const token = window.localStorage.getItem('token');
    const body = {
      name: `${form.name}`,
      email: `${form.email}`,
      cpf: `${form.cpf}`,
    };
    const axiosConfig = {
      headers: {
        auth: token,
      },
    };
    axios
      .put(`${baseUrl}/profile`, body, axiosConfig)
      .then((response) => {
        goToProfile();
      })
      .catch((error) => {
        alert("errororor")
      });
  };

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
          id="nome"
          required
          label= "Nome"
          placeholder= {profile.name}
          value={form.name}
          onChange={handleInputChange}
          name="name"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        
        <InputsLogin
          id="email"
          required
          type="email"
          label="E-mail"
          placeholder= {profile.email}
          value={form.email}
          name="email"
          onChange={handleInputChange}
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />

        <InputsLogin
          id="cpf"
          required
          type="number"
          label="cpf"
          placeholder= {profile.cpf}
          value={form.cpf}
          name="cpf"
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

export default TelaEditaPerfil;
