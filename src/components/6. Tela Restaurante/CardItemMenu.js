import React from 'react';
import {
  CardItem, 
  FotoItem, 
  NomeItem, 
  DescricaoItem, 
  PrecoItem
} from './styles'

const CardItemMenu = (props) => {

  return (
    <CardItem>
      <FotoItem src={props.fotoItem} alt="foto" />
      <NomeItem>{props.nomeItem}</NomeItem>
      <DescricaoItem>{props.descricaoItem} minutos</DescricaoItem>
      <PrecoItem>Frete R${props.precoItem}</PrecoItem>
      <button onClick={props.adicionaItem}>adicionar</button>
    </CardItem>
  )
}

export default CardItemMenu