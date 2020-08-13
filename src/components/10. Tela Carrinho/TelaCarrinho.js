import React, {useState, useEffect} from 'react';

import axios from 'axios';
import { baseUrl } from '../../constants/axios'

import { 
  CarrinhoContainer,
  EnderecoContainer,
  EnderecoTexto,
  CardProduto,
  CarrinhoVazioText,
  PerfilTexto,
  EnderecoRestauranteCont,
  RestauranteNome,
  PedidosContainer,
  FotoProduto,
  RestauranteEndereco,
} from './styles'

export default function TelaCarrinho () {
  const [itensNoCarrinho, setItensNoCarrinho] = useState([])
  const [perfil, setPerfil] = useState('');

  useEffect(() => {
    if (localStorage.carrinho) {
      const carrinhoRecuperado = (localStorage.getItem("carrinho"))
      setItensNoCarrinho(JSON.parse(carrinhoRecuperado))
    };
    pegaPerfil()  
  }, [])

  const pegaPerfil = () => {
    const token = window.localStorage.getItem('token');
    const axiosConfig = {
      headers: {
        auth: token,
      },
    };
    axios
      .get(
        `${baseUrl}profile`, 
        axiosConfig
        )
      .then((response) => {
        setPerfil(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

const carrinho = itensNoCarrinho.length !== 0 ? 
  <div>
    <EnderecoRestauranteCont>
      <RestauranteNome>{itensNoCarrinho[0].restaurantName}</RestauranteNome>
      <RestauranteEndereco>{itensNoCarrinho[0].restaurantAddress}</RestauranteEndereco>
    </EnderecoRestauranteCont>
  {itensNoCarrinho.map((item) => {
    return (
    <CardProduto>
      <FotoProduto src={item.photoUrl} />
      <p>{item.name}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <p>{item.quantity}</p>
    </CardProduto>
  )})}
  </div>
  : <CarrinhoVazioText>Carrinho vazio</CarrinhoVazioText>

return (
  <CarrinhoContainer>

    <EnderecoContainer>
      <EnderecoTexto>Endereço de entrega</EnderecoTexto>
      <PerfilTexto>{perfil.address}</PerfilTexto>
    </EnderecoContainer>
    
    <PedidosContainer>
      {carrinho}
    </PedidosContainer>


    
  </CarrinhoContainer>
  )  
}

