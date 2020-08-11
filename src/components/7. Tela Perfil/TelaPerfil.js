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
} from './styles';
import edit from '../../assets/botoes/edit.png';

const TelaPerfil = () => {
  const baseUrl = `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB`;

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
        console.log(response);
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
        console.log(response);
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
      <div>
        <h3>Meu perfil</h3>
      </div>
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
      <div>
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
      </div>
    </>
  );
};

export default TelaPerfil;
