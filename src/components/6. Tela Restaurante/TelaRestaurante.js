import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {   
  ContainerMenu, 
  InfosFoto, 
  InfosNome,
  InfosCategoria, 
  InfosEntrega, 
  InfosFrete, 
  InfosEndereco, 
  ContainerQuantidade, 
  TextoQuantidade, 
  InputQuantidade, 
  BotaoQuantidade 
} from './styles';
import CardItemMenu from './CardItemMenu'
import AppHeader from '../AppHeader';

const TelaRestaurante = () => {
  const params = useParams()

  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"

  const [arrayItensMenu, setArrayItensMenu] = useState([])
  const [InfosRestaurante, setInfosRestaurante] = useState([])
  const [escolheQuantidade, setEscolheQuantidade] = useState(false)
  const [idItemSelecionado, setIdItemSelecionado] = useState("")
  const [qtdItemSelecionado, setQtdItemSelecionado] = useState(0)
  const [fotoItemSelecionado, setFotoItemSelecionado] = useState("")
  const [nomeItemSelecionado, setNomeItemSelecionado] = useState("")
  const [descricaoItemSelecionado, setDescricaoItemSelecionado] = useState("")
  const [precoItemSelecionado, setPrecoItemSelecionado] = useState(0)
  const [itensNoCarrinho, setItensNoCarrinho] = useState([])

  useEffect(() => {
    mostraPratos()
    if (localStorage.carrinho) {
      const carrinhoRecuperado = (localStorage.getItem("carrinho"))
      setItensNoCarrinho(JSON.parse(carrinhoRecuperado))
    }  
  }, [])

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(itensNoCarrinho))
  }, [itensNoCarrinho])

  const mostraPratos = () => {
    const token = window.localStorage.getItem("token")
    axios.get(`${baseUrl}/restaurants/${params.idRestaurante}`, {
      headers: {
        auth: token
      }
    }).then((response) => {
      setArrayItensMenu(response.data.restaurant.products)
      setInfosRestaurante(response.data.restaurant)
    }).catch((error) => {
      console.log(error.message)
    })
  }

  const onChangeQuantidadeItem = event => {
    setQtdItemSelecionado(event.target.value)
  }

  const abreEscolheQuantidade = (idItem, fotoItem, nomeItem, descricaoItem, precoItem) => {
    setEscolheQuantidade(!escolheQuantidade)
    setIdItemSelecionado(idItem)
    setFotoItemSelecionado(fotoItem)
    setNomeItemSelecionado(nomeItem)
    setDescricaoItemSelecionado(descricaoItem)
    setPrecoItemSelecionado(precoItem)
  }

  const adicionaAoCarrinho = () => {
    const infosItemERestaurante = {
      id: idItemSelecionado,
      quantity: Number(qtdItemSelecionado),
      price: Number(precoItemSelecionado),
      name: nomeItemSelecionado,
      description: descricaoItemSelecionado,
      photoUrl: fotoItemSelecionado,
      restaurantName:InfosRestaurante.name,
      restaurantAddress:InfosRestaurante.address,
      restaurantDeliveryTime:InfosRestaurante.deliveryTime,
      restaurantShipping:InfosRestaurante.shipping,
    }
    const produtoNoCarrinho = itensNoCarrinho.find(
      produto => produto.id === infosItemERestaurante.id
    )
    let novoCarrinho = [...itensNoCarrinho]
    
    if (produtoNoCarrinho === undefined) {
      setItensNoCarrinho([...itensNoCarrinho, infosItemERestaurante])
      alert("Adicionado ao carrinho!")
      setEscolheQuantidade(!escolheQuantidade)
    } else {
      novoCarrinho = itensNoCarrinho.map((produto) => {
        if (produto.id === infosItemERestaurante.id){
          alert("Adicionado ao carrinho!")
          setEscolheQuantidade(!escolheQuantidade)
          localStorage.setItem("carrinho", JSON.stringify(itensNoCarrinho))
          return {...produto, quantity: Number(produto.quantity) + Number(infosItemERestaurante.quantity)}
        }
        return produto
      })
      return setItensNoCarrinho(novoCarrinho)
    }  
  }

return (
  <div>
    <AppHeader />
    <div>
      <InfosFoto src={InfosRestaurante.logoUrl} alt="foto restaurante" />
      <InfosNome>{InfosRestaurante.name}</InfosNome> 
      <InfosCategoria>{InfosRestaurante.category}</InfosCategoria>
      <InfosEntrega>{InfosRestaurante.deliveryTime} minutos</InfosEntrega>
      <InfosFrete>Frete R${InfosRestaurante.shipping}</InfosFrete>
      <InfosEndereco>{InfosRestaurante.address}</InfosEndereco>
    </div>

    <ContainerMenu>
      {arrayItensMenu.map((item) => {
        return <CardItemMenu 
        key={item.id}
        fotoItem={item.photoUrl}
        nomeItem={item.name}
        descricaoItem={item.description}
        precoItem={item.price}
        categoriaItem={item.category}
        adicionaItem={() => abreEscolheQuantidade(item.id, item.photoUrl, item.name, item.description, item.price)}
        />
      })}
    </ContainerMenu>

    {escolheQuantidade && 
      <ContainerQuantidade>
        <TextoQuantidade>Selecione a quantidade desejada</TextoQuantidade>
        <InputQuantidade type="number" onChange={onChangeQuantidadeItem} value={qtdItemSelecionado}/>
        <BotaoQuantidade onClick={adicionaAoCarrinho}>Adicionar ao carrinho</BotaoQuantidade>
      </ContainerQuantidade>
    }
  </div>
  )  
}

export default TelaRestaurante