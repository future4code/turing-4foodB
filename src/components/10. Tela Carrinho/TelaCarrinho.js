import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const TelaCarrinho = () => {
    const history = useHistory()

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"

    const irParaFeed = () => {
        history.push("/feed")
    }

    const irParaPerfil = () => {
        history.push("/perfil")
    }

return (
    <div>
        <p>Meu Carrinho</p>
        <div>
            <p>Endereço de entrega</p>
            <p>Rua Alessandra Vieira, 42</p>
        </div>
        <p>Bullguer Vila Madadela</p>
        <p>R. Fradique Coutinho, 1136 - Vila Madalena</p>
        <p>30 - 45 min</p>
        <div>
            <img src="" alt="foto outro hamburger" />
            <p>Stencil</p>
            <p>2</p>
            <p>Pão, carne, queijo, cebola roxa, tomate, alface e molho</p>
            <p>R$23,00</p>
            <button>adicionar</button>
        </div>
        <div>
            <img src="" alt="foto batata frita" />
            <p>Cheese Fries</p>
            <p>Porção de fritas temperadas com páprica e queijo derretido</p>
            <p>R$15,00</p>
            <button>adicionar</button>
        </div>
        <p>Frete R$6,00</p>
        <span>SUBTOTAL</span>
        <span>R$67,00</span>
        <p>Forma de pagamento</p>
        <hr />
        <div>
            <input type="radio" value="Dinheiro" id ="dinheiro" name="pagamento" checked />
            <label for="Dinheiro">Dinheiro</label>
            <input type="radio" value="Cartão de crédito" id="cartão" name="pagamento" />
            <label for="Cartão de crédito">Cartão de crédito</label>
        </div>
        <button>Confirmar</button>
        <button onClick={irParaFeed}>ir para Feed</button>
        <button onClick={irParaPerfil}>ir para Perfil</button>
    </div>
    )  
}

export default TelaCarrinho