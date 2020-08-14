import React from 'react';
import {CardRestaurante, FotoRestaurante, NomeRestaurante, TempoEntrega, FreteEntrega, 
Imagem} from './styles'

const CardRestaurantes = (props) => {

    return (
        <CardRestaurante onClick={props.onClickCard}>
            <FotoRestaurante><Imagem src={props.fotoRestaurante} alt="foto" /></FotoRestaurante>
            <NomeRestaurante>{props.nomeRestaurante}</NomeRestaurante>
            <TempoEntrega>{props.tempoEntrega} minutos</TempoEntrega>
            <FreteEntrega>Frete R${props.freteEntrega}</FreteEntrega>
        </CardRestaurante>
    )
}

export default CardRestaurantes