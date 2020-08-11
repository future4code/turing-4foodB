import React, { useState, useEffect } from 'react';
import { 
  AppHeaderWrapper, 
  VoltarIcone,
} from './styles'
import { useHistory } from 'react-router-dom';

export default function AppHeader () {
  const history = useHistory();
  const atualUrl = (window.location.pathname);
  const [titulo, setTitulo] = useState() 

  useEffect(() => {
    pegaTitulo()
  }, [])

  const pegaTitulo = () => {
  switch (atualUrl) {
    case '/feed':
      setTitulo('iFuture')
      break;
    case '/restaurante':
      setTitulo('Restaurante')
      break;
    case '/perfil':
      setTitulo('Meu perfil')
      break;
    case '/editar':
      setTitulo('Editar')
      break;
    case '/endereço':
      setTitulo('Endereço')
      break;   
    default:
      setTitulo('')
    }
  };
  return(
    <AppHeaderWrapper>
      <VoltarIcone onClick={() => history.goBack()} />
      <p>{titulo}</p>
    </AppHeaderWrapper>
  )
}