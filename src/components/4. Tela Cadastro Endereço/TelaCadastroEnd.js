import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const TelaCadastroEnd = () => {
    const history = useHistory()

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"

    const irParaFeed = () => {
        history.push("/feed")
    }

return (
    <div>
        <p>Meu endereço</p>
        <form>
            <input placeholder="Logradouro" />
            <input placeholder="Número" />
            <input placeholder="Complemento" />
            <input placeholder="Bairro" />
            <input placeholder="Cidade" />
            <input placeholder="Estado" />
            <button onClick={irParaFeed}>Salvar</button>
        </form>
    </div>
    )  
}

export default TelaCadastroEnd