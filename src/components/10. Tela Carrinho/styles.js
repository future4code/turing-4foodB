import styled from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from '@material-ui/core';

export const CarrinhoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const EnderecoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 90px;
  background-color: #eee;
  width: 100%;
  height: 4.75rem;
`;

export const EnderecoTexto = styled.p`
  color: #b8b8b8!important;
  margin: 0 0 0.5rem 1rem;
`;

export const PerfilTexto = styled.p`
  margin: 0 0 0 1rem;
  font-weight: 700;
`;

export const CarrinhoVazioText = styled.p`
  text-align: center;
`;

export const EnderecoRestauranteCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 90px;
  width: 100%;
  height: 4.75rem;
`;

export const RestauranteNome = styled.p`
  margin: 0 0 0 0;
  color: #e8222e;
  letter-spacing: -0.39px;
  font-weight: 600;
`;

export const RestauranteEndereco = styled.p`
  color: #b8b8b8!important;
  margin: 0 0 0.5rem 0;
`;

export const PedidosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 13rem;
  overflow-y: scroll;
  ::-webkit-scrollbar { /* Chrome */
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

export const CardProduto = styled.div`
  display: grid; 
  grid-template-columns: repeat(9, 1fr); 
  grid-auto-rows: 2.3rem;  
  width: 21rem;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin-top: 0.8rem;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
`;

export const FotoProduto = styled.img`
  grid-column-start: 1; 
  grid-column-end: 4; 
  grid-row-start: 1; 
  grid-row-end: 4;
  width: 100%;
  height: 100%;
  border-radius: 8px 0px 0px 8px;
  -moz-border-radius: 8px 0px 0px 8px;
  -webkit-border-radius: 8px 0px 0px 8px;
  border: none;
`;

export const NomeProduto = styled.p`
  grid-column-start: 4; 
  grid-column-end: 9; 
  grid-row-start: 1; 
  grid-row-end: 2;
  color: #e8222e;
  margin-left: 1rem;
  font-weight: 600; 
`;

export const DescricaoProduto = styled.p`
  grid-column-start: 4; 
  grid-column-end: 10; 
  grid-row-start: 2; 
  grid-row-end: 3;
  font-size: 0.75rem;
  color: #b8b8b8;
  margin-left: 1rem;
`;

export const PrecoProduto = styled.p`
  grid-column-start: 4; 
  grid-column-end: 8; 
  grid-row-start: 3; 
  grid-row-end: 4;
  margin-left: 1rem;
  top: 0;
  align-self: self-end;
  font-weight: 600;  
`;

export const QtdProduto = styled.p`
  grid-column-start: 9; 
  grid-column-end: 10; 
  grid-row-start: 1; 
  grid-row-end: 2;
  border-radius: 0px 8px 0px 0px;
  -moz-border-radius: 0px 8px 0px 0px;
  -webkit-border-radius: 0px 8px 0px 0px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  border: solid 1px #e8222e;
  height: 100%;
  margin: 0;
  text-align: center;
  color: #e8222e;
`;

export const BotaoRemover = styled.button`
  grid-column-start: 7; 
  grid-column-end: 10; 
  grid-row-start: 3; 
  grid-row-end: 4;
  border-radius: 8px 0px 8px 0px;
  -moz-border-radius: 8px 0px 8px 0px;
  -webkit-border-radius: 8px 0px 8px 0px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  border: solid 1px #e8222e;
  height: 100%;
  margin: 0;
  text-align: center;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  color: #e8222e;
`;

export const TotaisContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  margin-top: 1rem;
  p{
    margin: 0;
  }
`;

export const SubtotalTexto = styled.div`
  align-self: flex-end;
  font-weight: 600;
  letter-spacing: -0.39px;
`;

export const FreteTexto = styled.div`
  font-weight: 600;
  letter-spacing: -0.39px;
`;

export const PrecoTexto = styled.div`
  color: #e8222e;
  letter-spacing: -0.43px;
  font-weight: 700;
  font-size: 1.125rem;
  margin-top: 0.5rem;
  text-align: right;
`;
export const PagamentosContainer = styled.div`
  padding: 0 1rem;
  margin-top: 1rem;
  font-weight: 600;
  letter-spacing: -0.39px;
  p{
    margin: 0;
  }
  hr{
    margin: 0.5rem 0;
  }
`;
export const InputPagamento = styled(FormControlLabel)`
  margin: 0;
  padding: 0;
  height: 30px;
`;

export const BotaoEntrar = styled(Button)`
  width: 21rem;
  height: 3rem; 
  margin: 0.5rem 0!important;
  background-color: #e8222e;
  border: 0;
  border-radius: 2px;
  color: black!important;
  text-transform: none!important;
  font-weight: 600!important;
`; 