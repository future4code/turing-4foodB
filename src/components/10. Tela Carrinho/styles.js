import styled from 'styled-components';

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
  height: 20rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
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
  border: 0px solid #000000;
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
  border: solid 1px #e8222e;
  height: 100%;
  margin: 0;
  text-align: center;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  color: #e8222e;
`;