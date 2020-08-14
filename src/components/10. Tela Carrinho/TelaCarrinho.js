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
  NomeProduto,
  DescricaoProduto,
  PrecoProduto,
  QtdProduto,
  RestauranteEndereco,
  BotaoRemover,
} from './styles'

export default function TelaCarrinho () {
  const [itensNoCarrinho, setItensNoCarrinho] = useState([])
  const [perfil, setPerfil] = useState('');
  const [precoTotal, setPrecoTotal] = useState('');
  const [frete, setFrete] = useState('');

  useEffect(() => {
    if (localStorage.carrinho) {
      const carrinhoRecuperado = (localStorage.getItem("carrinho"))
      setItensNoCarrinho(JSON.parse(carrinhoRecuperado))
    };
    pegaPerfil()
    pegaTotal()  
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

  const pegaTotal = () => {
    if (localStorage.carrinho) {
      const carrinhoRecuperado = (localStorage.getItem("carrinho"))
      const pegaCarrinho = JSON.parse(carrinhoRecuperado)

      setFrete(pegaCarrinho[0].restaurantShipping)  

      let valorTotal = 0;
      pegaCarrinho.forEach(item => {
        valorTotal += (item.price * item.quantity);
        setPrecoTotal(valorTotal.toFixed(2))
          
      });
    };
  }
  
const carrinho = itensNoCarrinho.length !== 0 ? 
  <div>
    <EnderecoRestauranteCont>
      <RestauranteNome>{itensNoCarrinho[0].restaurantName}</RestauranteNome>
      <RestauranteEndereco>{itensNoCarrinho[0].restaurantAddress}</RestauranteEndereco>
    </EnderecoRestauranteCont>
  {itensNoCarrinho.map((item) => {
    return (
    <CardProduto key={item.id}>
      <FotoProduto src={item.photoUrl} />
      <NomeProduto>{item.name}</NomeProduto>
      <DescricaoProduto>{item.description}</DescricaoProduto>
      <PrecoProduto>R${item.price.toFixed(2)}</PrecoProduto>
      <QtdProduto>{item.quantity}</QtdProduto>
      <BotaoRemover>remover</BotaoRemover>
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

    <div>
      <p>SUBTOTAL</p>
      <p>Frete R${frete}</p>
      <p>R${precoTotal}</p>
    </div>
    
  </CarrinhoContainer>
  )  
}

