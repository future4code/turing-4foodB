import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {CardItem, FotoItem, NomeItem, DescricaoItem, PrecoItem} from './styles'

const CardItemMenu = (props) => {

    return (
        <CardItem>
            <FotoItem src={props.fotoItem} alt="foto" />
            <NomeItem>{props.nomeItem}</NomeItem>
            <DescricaoItem>{props.descricaoItem} minutos</DescricaoItem>
            <PrecoItem>Frete R${props.precoItem}</PrecoItem>
            <button>adicionar</button>
        </CardItem>
    )
}

export default CardItemMenu