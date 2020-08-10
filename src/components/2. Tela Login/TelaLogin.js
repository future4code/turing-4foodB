import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const TelaLogin = () => {
    const history = useHistory()

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"

    const irParaFeed = () => {
        history.push("/feed")
    }

    const irParaCadastro = () => {
        history.push("/cadastro")
    }

return (
    <div>
        <p>fourFoodB</p>
        <p>Entrar</p>
        <form>
            <input placeholder="E-mail" />
            <input placeholder="Senha" />
            <button onClick={irParaFeed}>Entrar</button>
            <p onClick={irParaCadastro}>Não possui cadastro? Clique Aqui</p>
        </form>
    </div>
    )  
}

export default TelaLogin