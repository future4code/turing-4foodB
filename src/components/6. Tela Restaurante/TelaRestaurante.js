import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { ContainerRestaurante, ContainerInfosRestaurante, ContainerMenu, InfosFoto, InfosNome, InfosCategoria, 
    InfosEntrega, InfosFrete, InfosEndereco, ContainerQuantidade, TextoQuantidade, InputQuantidade, BotaoQuantidade } from './styles';
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
    const [itensNoCarrinho, setItensNoCarrinho] = useState([])

    useEffect(() => {
        mostraPratos()
    }, [])

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

    const abreEscolheQuantidade = (idItem) => {
        setEscolheQuantidade(!escolheQuantidade)
        setIdItemSelecionado(idItem)
    }

    const adicionaAoCarrinho = () => {
        const idEQuantidade = {
            id: idItemSelecionado,
            quantity: Number(qtdItemSelecionado)
        }
        const produtoNoCarrinho = itensNoCarrinho.find(
            produto => produto.id === idEQuantidade.id
        )
        let novoCarrinho = [...itensNoCarrinho]
        
        if (produtoNoCarrinho === undefined) {
            setItensNoCarrinho([...itensNoCarrinho, idEQuantidade])
            alert("Adicionado ao carrinho!")
            setEscolheQuantidade(!escolheQuantidade)
        } else {
            novoCarrinho = itensNoCarrinho.map((produto) => {
                if (produto.id === idEQuantidade.id){
                    alert("Adicionado ao carrinho!")
                    setEscolheQuantidade(!escolheQuantidade)
                    return {...produto, quantity: Number(produto.quantity) + Number(idEQuantidade.quantity)}
                }
                return produto
            })
            return setItensNoCarrinho(novoCarrinho)
        }
    }

    const mostraArray = () => {
        console.log(itensNoCarrinho)
    }

return (
    <ContainerRestaurante>
        <AppHeader />
        <ContainerInfosRestaurante>
            <InfosFoto src={InfosRestaurante.logoUrl} alt="foto restaurante" />
            <InfosNome>{InfosRestaurante.name}</InfosNome> 
            <InfosCategoria>{InfosRestaurante.category}</InfosCategoria>
            <InfosEntrega>{InfosRestaurante.deliveryTime} minutos</InfosEntrega>
            <InfosFrete>Frete R${InfosRestaurante.shipping}</InfosFrete>
            <InfosEndereco>{InfosRestaurante.address}</InfosEndereco>
        </ContainerInfosRestaurante>
        <button onClick={mostraArray}>aqui</button>
        <ContainerMenu>
        {arrayItensMenu.map((item) => {
            return <CardItemMenu 
            key={item.id}
            fotoItem={item.photoUrl}
            nomeItem={item.name}
            descricaoItem={item.description}
            precoItem={item.price}
            categoriaItem={item.category}
            adicionaItem={() => abreEscolheQuantidade(item.id)}
            />
        })}
        </ContainerMenu>
        {escolheQuantidade ? 
        <ContainerQuantidade>
            <TextoQuantidade>Selecione a quantidade desejada</TextoQuantidade>
            <InputQuantidade type="number" onChange={onChangeQuantidadeItem} value={qtdItemSelecionado}/>
            <BotaoQuantidade onClick={adicionaAoCarrinho}>Adicionar ao carrinho</BotaoQuantidade>
        </ContainerQuantidade> : <div></div>}
    </ContainerRestaurante>
    )  
}

export default TelaRestaurante