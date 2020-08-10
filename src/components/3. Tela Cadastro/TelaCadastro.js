import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const TelaCadastro = () => {
    const history = useHistory()

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"

    const irParaCadastroEnd = () => {
        history.push("/cadastro/endereco")
    }

return (
    <div>
        <p>fourFoodB</p>
        <p>Cadastrar</p>
        <form>
            <input placeholder="Nome" />
            <input placeholder="Email" />
            <input placeholder="CPF" />
            <input placeholder="Senha" />
            <input placeholder="Confirmar" />
            <button onClick={irParaCadastroEnd}>Criar</button>
        </form>
    </div>
    )  
}

export default TelaCadastro