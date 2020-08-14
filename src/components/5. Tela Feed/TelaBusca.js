import React from 'react';

import {
  InputBusca, 
  ContainerFeed, 
  ContainerBusca
} from './styles'

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