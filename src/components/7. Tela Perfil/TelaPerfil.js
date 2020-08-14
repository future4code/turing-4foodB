import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
  BoxPerfil,
  BoxIndividual,
  BoxEnderecoCadastrado,
  BoxIndividualEndereco,
  Pedido,
  BoxDosPedidos,
  Icone,
  Historico,
} from './styles';
import edit from '../../assets/botoes/edit.png';
import AppFooter from '../AppFooter';
import AppHeader from '../AppHeader';

const TelaPerfil = () => {
  const baseUrl = `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB`;

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      history.push('/login');
    }
  });

  const [profile, setProfile] = useState('');
  const [historicoDePedidos, sethistoricoDePedidos] = useState([]);

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

  const gethistoricoDePedidos = () => {
    const token = window.localStorage.getItem('token');

    const axiosConfig = {
      headers: {
        auth: token,
      },
    };
    axios
      .get(`${baseUrl}/orders/history`, axiosConfig)
      .then((response) => {
        sethistoricoDePedidos(response.data.orders);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getProfile();
    gethistoricoDePedidos();
  }, []);

  const history = useHistory();
  const irParaEditarEndereco = () => {
    history.push('/perfil/editar/endereco');
  };

  const irParaEditarPerfil = () => {
    history.push('/perfil/editar');
  };

  return (
    <>
      <AppHeader />
      <BoxPerfil>
        <Icone onClick={irParaEditarPerfil} src={edit} />
        <BoxIndividual>{profile.name}</BoxIndividual>
        <BoxIndividual>{profile.email}</BoxIndividual>
        <BoxIndividual>{profile.cpf}</BoxIndividual>
      </BoxPerfil>
      <BoxEnderecoCadastrado>
        <Icone onClick={irParaEditarEndereco} src={edit} />
        <BoxIndividualEndereco>Endereço cadastrado</BoxIndividualEndereco>
        <BoxIndividualEndereco>{profile.address}</BoxIndividualEndereco>
      </BoxEnderecoCadastrado>
      <Pedido>
        Histórico de pedidos <hr></hr>
      </Pedido>
      <Historico>
        {historicoDePedidos.length > 0
          ? historicoDePedidos.map((order) => {
              const date = new Date(order.expiresAt).toLocaleDateString(
                'pt-br',
              );
              return (
                <BoxDosPedidos>
                  <div>{order.restaurantName}</div>
                  <div>{date}</div>
                  <p>SUBTOTAL R${order.totalPrice}</p>
                </BoxDosPedidos>
              );
            })
          : 'Você não realizou nenhum pedido '}
      </Historico>
      <AppFooter />
    </>
  );
};

export default TelaPerfil;
