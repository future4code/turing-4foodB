import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const TelaInicial = () => {
    const history = useHistory()

    useEffect(() => {
        irParaLogin()
    }, [])
    
    const irParaLogin = () => {
        history.push("/login")
    }

return (
    <div>
        <h1>fourFoodB</h1>
    </div>
    )  
}

export default TelaInicial