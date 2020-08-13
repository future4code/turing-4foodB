import styled from 'styled-components';

export const BoxIndividual = styled.div`
  margin-bottom: 0.25rem;
  margin-left: 1rem;
  width: 20.5rem;
  height: 1.125rem;
  font-family: Roboto;
  font-size: 1rem;
  letter-spacing: -0.39px;
  color: var(--black);
`;

export const BoxPerfil = styled.div`
  padding: 1rem 0;
  width: 100%;
  margin: 0 0 0 0;
  background-color: #f8f8f8;
`;

export const BoxEnderecoCadastrado = styled.div`
  width: 100%;
  height: 4rem;
  padding: 1rem 0;
  align-items: center;
  background-color: #eeeeee;
`;

export const BoxIndividualEndereco = styled.div`
  margin-bottom: 0.25rem;
  margin-left: 1rem;
  width: 20.5rem;
  height: 1.125rem;
  font-family: Roboto;
  font-size: 1rem;
  letter-spacing: -0.39px;
  color: var(--black);
`;

export const Pedido = styled.div`
  width: 22.5rem;
  height: 6.875rem;
  padding: 1rem 0;
`;
export const Historico = styled.div`
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const BoxDosPedidos = styled.div`
  width: 22.5rem;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Icone = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
  float: right;
  padding: 0.8rem;

  :hover {
    opacity: 0.5;
  }
  :active {
    opacity: 1;
  }
`;
