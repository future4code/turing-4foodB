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
  margin: 0 0 0 1rem;
  color: #e8222e;
  letter-spacing: -0.39px;
  font-weight: 600;
`;

export const PedidosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 7rem;
`;

export const CardProduto = styled.div`
  width: 20.5rem;
  height: 7rem;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
`;