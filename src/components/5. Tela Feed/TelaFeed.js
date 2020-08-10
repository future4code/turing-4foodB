import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const TelaFeed = () => {
    const history = useHistory()

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"

    const irParaRestaurante = () => {
        history.push("/restaurante")
    }

    const irParaCarrinho = () => {
        history.push("/carrinho")
    }

    const irParaPerfil = () => {
        history.push("/perfil")
    }

return (
    <div>
        <p>fourFoodB</p>
        <input placeholder="Restaurante" />
        <div>
            <p>Burger</p>
            <p>Asiática</p>
            <p>Massas</p>
            <p>Saudáveis</p>
        </div>
        <div>
            <p>Vinil Butantã</p>
            <span>50 - 60 minutos</span>
            <span>Frete: R$6,00</span>
        </div>
        <div>
            <p>Bullger Eldorado</p>
            <span>30 - 45 minutos</span>
            <span>Frete: R$6,00</span>
        </div>
        <div>
            <p>Pedido em andamento</p>
            <p>Bullguer Vila Madalena</p>
            <p>Subtotal R$67,00</p>
        </div>
        <button onClick={irParaRestaurante}>ir para Restaurante X</button>
        <button onClick={irParaCarrinho}>ir para Carrinho</button>
        <button onClick={irParaPerfil}>ir para Perfil</button>
    </div>
    )  
}

export default TelaFeed