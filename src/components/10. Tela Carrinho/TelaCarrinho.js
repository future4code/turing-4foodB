import React, {useState, useEffect} from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

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
  TotaisContainer,
  SubtotalTexto,
  FreteTexto,
  PrecoTexto,
  PagamentosContainer,
  InputPagamento,
  BotaoEntrar,
} from './styles'

export default function TelaCarrinho () {
  const [itensNoCarrinho, setItensNoCarrinho] = useState([])
  const [perfil, setPerfil] = useState('');
  const [precoTotal, setPrecoTotal] = useState('');
  const [frete, setFrete] = useState('');
  const [pagamento, setPagamento] = React.useState('cartao');

  useEffect(() => {
    if (localStorage.carrinho) {
      const carrinhoRecuperado = (localStorage.getItem("carrinho"))
      setItensNoCarrinho(JSON.parse(carrinhoRecuperado))
    };
    pegaPerfil()
    pegaTotal()  
  }, [])

  const mudaPagamento = (event) => {
    setPagamento(event.target.value);
  };

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
    if (localStorage.carrinho !== '[]') {
      const carrinhoRecuperado = (localStorage.getItem("carrinho"))
      const pegaCarrinho = JSON.parse(carrinhoRecuperado)

      setFrete(pegaCarrinho[0].restaurantShipping.toFixed(2))  

      let valorTotal = 0;
      pegaCarrinho.forEach(item => {
        valorTotal += (item.price * item.quantity);
        setPrecoTotal(valorTotal.toFixed(2))        
      });
    }else {
      let valorTotal = 0;
      setPrecoTotal(valorTotal.toFixed(2))
      setFrete(valorTotal.toFixed(2))
    }
   
  }
  
  const removeProdutoCarrinho = (ItemId) => {
    const novoCarrinho = itensNoCarrinho.filter(item => item.id !== ItemId);
    setItensNoCarrinho(novoCarrinho)
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho))
    pegaTotal() 
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
      <BotaoRemover onClick={() => removeProdutoCarrinho(item.id)}>remover</BotaoRemover>
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

    <TotaisContainer>
      <SubtotalTexto>
        <p>SUBTOTAL</p>
      </SubtotalTexto>
      <div>
        <FreteTexto>Frete R${frete}</FreteTexto>
        <PrecoTexto>R${precoTotal}</PrecoTexto>
      </div>
    </TotaisContainer>

    <PagamentosContainer>
      <p>Forma de pagamento</p>
      <hr/>
      <FormControl component="fieldset">
        <RadioGroup name="pagamento" value={pagamento} onChange={mudaPagamento}>
          <InputPagamento value="dinheiro" control={<Radio color="default" />} label="Dinheiro" />
          <InputPagamento value="cartao" control={<Radio color="default" />} label="Cartão de crédito" />
        </RadioGroup>
      </FormControl>
      <BotaoEntrar variant="contained" color="primary" >
        Confirmar
      </BotaoEntrar>
    </PagamentosContainer>
  </CarrinhoContainer>
  )  
}

