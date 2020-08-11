import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';

import logo from '../../assets/imagens/logo.png';

import { TelaInicialContainer, LogoContainer } from './styles'

const TelaInicial = () => {
  const history = useHistory()

  useEffect(() => {
      sleep()
  }, [])
  
  const sleep = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    
  sleep(3000).then(() => {
      history.push("/login")
  });

return (
  <TelaInicialContainer>
    <LogoContainer
      src={logo}
      alt="logotipo ifuture"
    />
  </TelaInicialContainer>
  )  
}

export default TelaInicial