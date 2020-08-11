import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
  BoxPerfil,
  BoxIndividual,
  BoxEnderecoCadastrado,
  BoxIndividualEndereco,
  Pedido,
} from './styles';

const TelaPerfil = () => {
  const baseUrl = `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB`;

  const [profile, setProfile] = useState('');

  const getProfile = () => {
    const token = window.localStorage.getItem('token');

    const axiosConfig = {
      headers: {
        auth: token,
      },
    };

    axios
      .get(
        'https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile',
        axiosConfig,
      )
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
    <>
      <div>
        <h3>Meu perfil</h3>
      </div>
      <BoxPerfil>
        <BoxIndividual>{profile.name}</BoxIndividual>
        <BoxIndividual>{profile.email}</BoxIndividual>
        <BoxIndividual>{profile.cpf}</BoxIndividual>
      </BoxPerfil>
      <BoxEnderecoCadastrado>
        <BoxIndividualEndereco>Endereço cadastrado</BoxIndividualEndereco>
        <BoxIndividualEndereco>{profile.address}</BoxIndividualEndereco>
      </BoxEnderecoCadastrado>
      <Pedido>
        Histórico de pedidos <hr></hr>
      </Pedido>
    </>
  );
};

export default TelaPerfil;
