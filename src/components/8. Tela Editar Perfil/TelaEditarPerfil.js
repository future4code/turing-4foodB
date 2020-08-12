import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import AppHeader from '../AppHeader';

const TelaEditarPerfil = () => {
    const history = useHistory()

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"

    const irParaPerfil = () => {
        history.push("/perfil")
    }

return (
    <div>
        <AppHeader />
        <input placeholder="Nome" />
        <input placeholder="Email" />
        <input placeholder="CPF" />
        <button onClick={irParaPerfil}>Salvar</button>
    </div>
    )  
}

export default TelaEditarPerfil