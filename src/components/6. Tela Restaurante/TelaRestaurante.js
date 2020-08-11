import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';
import { ContainerRestaurante, HeaderRestaurante, TituloRestaurante, FonteTitulo, 
    ContainerInfosRestaurante, ContainerMenu, FooterProvisorio, BotaoCarrinho, BotaoFeed, 
    BotaoPerfil, InfosFoto, InfosNome, InfosCategoria, InfosEntrega, InfosFrete, InfosEndereco } from './styles';
import CardItemMenu from './CardItemMenu'

const TelaRestaurante = () => {
    const history = useHistory()

    const params = useParams()

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"

    const [arrayItensMenu, setArrayItensMenu] = useState([])
    const [InfosRestaurante, setInfosRestaurante] = useState([])

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

    const irParaFeed = () => {
        history.push("/feed")
    }

    const irParaCarrinho = () => {
        history.push("/carrinho")
    }

    const irParaPerfil = () => {
        history.push("/perfil")
    }

return (
    <ContainerRestaurante>
        <HeaderRestaurante>
            <TituloRestaurante>
                <FonteTitulo>Restaurante</FonteTitulo>
            </TituloRestaurante>
        </HeaderRestaurante>
        <ContainerInfosRestaurante>
            <InfosFoto src={InfosRestaurante.logoUrl} alt="foto restaurante" />
            <InfosNome>{InfosRestaurante.name}</InfosNome> 
            <InfosCategoria>{InfosRestaurante.category}</InfosCategoria>
            <InfosEntrega>{InfosRestaurante.deliveryTime} minutos</InfosEntrega>
            <InfosFrete>Frete R${InfosRestaurante.shipping}</InfosFrete>
            <InfosEndereco>{InfosRestaurante.address}</InfosEndereco>
        </ContainerInfosRestaurante>
        <ContainerMenu>
        {arrayItensMenu.map((item) => {
            return <CardItemMenu 
            key={item.id}
            fotoItem={item.photoUrl}
            nomeItem={item.name}
            descricaoItem={item.description}
            precoItem={item.price}
            categoriaItem={item.category}
            />
        })}
        </ContainerMenu>
        <div>
            <p>Selecione a quantidade desejada</p>
            <input type="number" />
            <button>Adicionar ao carrinho</button>
        </div>
        <FooterProvisorio>
            <BotaoFeed onClick={irParaFeed}>🏠</BotaoFeed>
            <BotaoCarrinho onClick={irParaCarrinho}>🛒</BotaoCarrinho>
            <BotaoPerfil onClick={irParaPerfil}>👤</BotaoPerfil>
        </FooterProvisorio>
    </ContainerRestaurante>
    )  
}

export default TelaRestaurante