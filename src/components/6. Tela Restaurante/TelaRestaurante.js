import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const TelaRestaurante = () => {
    const history = useHistory()

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"

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
    <div>
        <p>Restaurante</p>
        <img src="" alt="foto restaurante" />
        <h1>Bullger Vila Madalena</h1>
        <p>Burger</p>
        <span>50 - 60 minutos</span>
        <span>Frete: R$6,00</span>
        <p>R. Fradique Coutinho, 1136 - Vila Madalena</p>
        <p>Principais</p>
        <hr />
        <div>
            <img src="" alt="foto hamburger" />
            <p>Bullguer</p>
            <p>Pão, carne, picles e molho</p>
            <p>R$20,00</p>
            <button>adicionar</button>
        </div>
        <div>
            <img src="" alt="foto outro hamburger" />
            <p>Stencil</p>
            <p>2</p>
            <p>Pão, carne, queijo, cebola roxa, tomate, alface e molho</p>
            <p>R$23,00</p>
            <button>adicionar</button>
        </div>
        <p>Acompanhamentos</p>
        <hr />
        <div>
            <img src="" alt="foto batata frita" />
            <p>Cheese Fries</p>
            <p>Porção de fritas temperadas com páprica e queijo derretido</p>
            <p>R$15,00</p>
            <button>adicionar</button>
        </div>
        <div>
            <p>Selecione a quantidade desejada</p>
            <input type="number" />
            <button>Adicionar ao carrinho</button>
        </div>
        <button onClick={irParaFeed}>ir para Feed</button>
        <button onClick={irParaCarrinho}>ir para Carrinho</button>
        <button onClick={irParaPerfil}>ir para Perfil</button>
    </div>
    )  
}

export default TelaRestaurante