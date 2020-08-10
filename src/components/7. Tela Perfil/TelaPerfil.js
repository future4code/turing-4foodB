import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const TelaPerfil = () => {
    const history = useHistory()

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"

    const irParaFeed = () => {
        history.push("/feed")
    }

    const irParaCarrinho = () => {
        history.push("/carrinho")
    }

    const irParaEditarPerfil = () => {
        history.push("/perfil/editar")
    }

    const irParaEditarEndereco = () => {
        history.push("/perfil/editar/endereco")
    }

return (
    <div>
        <p>Meu perfil</p>
        <p>Bruna Oliveira</p>
        <p>bruna_O@gmail.com</p>
        <p>333.333.333-33</p>
        <button onClick={irParaEditarPerfil}>✏</button>
        <div>
            <p>Endereço cadastrado</p>
            <p>Rua Alessandra Vieira, 42 - Santana</p>
            <button onClick={irParaEditarEndereco}>✏</button>
        </div>
        <p>Histórico de pedidos</p>
        <hr />
        <div>
            <p>Bullguer Vila Madalena</p>
            <p>23 de outubro 2019</p>
            <b>SUBTOTAL R$67,00</b>
        </div>
        <div>
            <p>Vinil Burguer Butantã</p>
            <p>30 de setembro 2019</p>
            <b>SUBTOTAL R$89,00</b>
        </div>
        <div>
            <p>Bullguer Vila Madalena</p>
            <p>10 de setembro 2019</p>
            <b>SUBTOTAL R$77,00</b>
        </div>
        <button onClick={irParaFeed}>ir para Feed</button>
        <button onClick={irParaCarrinho}>ir para Carrinho</button>
    </div>
    )  
}

export default TelaPerfil