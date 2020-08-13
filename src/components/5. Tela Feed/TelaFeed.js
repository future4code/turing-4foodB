import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {InputBusca, ContainerFeed, FeedTipos, TipoPrato, ContainerRestaurantes} from './styles'
import CardRestaurantes from './CardRestaurantes';
import AppFooter from '../AppFooter';
import AppHeader from '../AppHeader';

const TelaFeed = () => {
    const history = useHistory()

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"

    const [arrayRestaurantes, setArrayRestaurantes] = useState([])

    useEffect(() => {
        mostraRestaurantes()
    }, [])

    const mostraRestaurantes = () => {
        const token = window.localStorage.getItem("token")
        axios.get(`${baseUrl}/restaurants`, {
            headers: {
                auth: token
            }
        }).then((response) => {
            setArrayRestaurantes(response.data.restaurants)
        }).catch((error) => {
            alert("errororororor")
            console.log(error.message)
        })
    }

    const irParaRestaurante = (idRestaurante) => {
        history.push(`/restaurante/${idRestaurante}`)
    }

return (
    <ContainerFeed>
        <AppHeader />
        <InputBusca placeholder="Restaurante" />
        <FeedTipos>
            <TipoPrato>Burger</TipoPrato>
            <TipoPrato>Asiática</TipoPrato>
            <TipoPrato>Massas</TipoPrato>
            <TipoPrato>Saudáveis</TipoPrato>
            <TipoPrato>Pizzas</TipoPrato>
        </FeedTipos>
        <ContainerRestaurantes>
        {arrayRestaurantes.map((restaurante) => {
            return <CardRestaurantes 
            key={restaurante.id}
            onClickCard={() => irParaRestaurante(restaurante.id)}
            fotoRestaurante={restaurante.logoUrl}
            nomeRestaurante={restaurante.name}
            tempoEntrega={restaurante.deliveryTime}
            freteEntrega={restaurante.shipping}
            />
        })}
        </ContainerRestaurantes>
        <AppFooter />
    </ContainerFeed>
    )  
}

export default TelaFeed