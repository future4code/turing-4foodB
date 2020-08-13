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
  <div><CarrinhoVazioText>Carrinho com produtos</CarrinhoVazioText>
  {/* {itensNoCarrinho.map((item) => {
    return <CardProduto key={item.id}>
      <div>{item.photoUrl}</div>
      <img src={item.photoUrl} alt="boohoo" />
    </CardProduto>
  })} */}
  </div>
  : <CarrinhoVazioText>Carrinho vazio</CarrinhoVazioText>
console.log(itensNoCarrinho)
return (
  <CarrinhoContainer>

    <EnderecoContainer>
      <EnderecoTexto>Endereço de entrega</EnderecoTexto>
      <PerfilTexto>{perfil.address}</PerfilTexto>
    </EnderecoContainer>
    
    <EnderecoRestauranteCont>
      <RestauranteNome>Nome do restaurante</RestauranteNome>
      <EnderecoTexto>Endereço de entrega</EnderecoTexto>
    </EnderecoRestauranteCont>

    <PedidosContainer>
      <CardProduto>Carrinho com produtos

      </CardProduto>
    </PedidosContainer>


    
  </CarrinhoContainer>
  )  
}

