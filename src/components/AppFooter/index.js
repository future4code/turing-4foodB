import React from 'react';
import { 
  AppFooterWrapper, 
  HomeIcon, 
  HomeIconRed,
  CartIcon, 
  CartIconRed,
  PersonIcon,
  PersonIconRed,
} from './styles'
import { useHistory } from 'react-router-dom';

export default function AppFooter () {
  const history = useHistory();
  const atualUrl = (window.location.pathname); 

  const handleClick = (choice) => {
    const nav = choice;
    switch (nav) {
      case 'feed':
        history.push('/feed');
        break;
      case 'perfil':
        history.push('/perfil');
        break;
      case 'carrinho':
        history.push('/carrinho');
        break;
      default:
        history.push('/');
    }
  };

  const inicioUrl = atualUrl === '/feed' 
    ? <HomeIconRed onClick={() => handleClick('feed')}/>
      : <HomeIcon onClick={() => handleClick('feed')}/>
  
  const carrinhoUrl = atualUrl === '/carrinho' 
    ? <CartIconRed onClick={() => handleClick('carrinho')}/>
      : <CartIcon onClick={() => handleClick('carrinho')}/>
  
  const perfilUrl = atualUrl === '/perfil' 
    ? <PersonIconRed onClick={() => handleClick('perfil')}/> 
      : <PersonIcon onClick={() => handleClick('perfil')}/> 

  return(
    <AppFooterWrapper>
      {inicioUrl} 
      {carrinhoUrl}
      {perfilUrl}
    </AppFooterWrapper>
  )
}