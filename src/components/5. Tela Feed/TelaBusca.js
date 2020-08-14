import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {InputBusca, ContainerFeed, ContainerBusca} from './styles'
import CardRestaurantes from './CardRestaurantes';
import AppHeader from '../AppHeader';

const TelaLogin = (props) => {

    return (
        <ContainerFeed>
            <AppHeader />
            <InputBusca placeholder="Restaurante" onChange={props.onChange} value={props.valorBusca} onClick={props.preparaBusca}/>
            <ContainerBusca></ContainerBusca>
        </ContainerFeed>
    )
}

export default TelaLogin