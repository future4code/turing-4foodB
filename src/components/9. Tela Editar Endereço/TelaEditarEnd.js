import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import AppHeader from '../AppHeader';

const TelaEditarEnd = () => {
    const history = useHistory()

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"

    const irParaPerfil = () => {
        history.push("/perfil")
    }

return (
    <div>
        <AppHeader />
        <input placeholder="Logradouro" />
        <input placeholder="Número" />
        <input placeholder="Complemento" />
        <input placeholder="Bairro" />
        <input placeholder="Cidade" />
        <input placeholder="Estado" />
        <button onClick={irParaPerfil}>Salvar</button>
    </div>
    )  
}

export default TelaEditarEnd