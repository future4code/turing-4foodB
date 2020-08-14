import styled from 'styled-components'

export const InputBusca = styled.input`
    width: 20.5rem;
    height: 3.5rem;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
    margin: 1rem 0 0 0;
`
export const ContainerFeed = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 22.5rem;
`
export const FeedTipos = styled.div`
    display: flex;
    justify-content: space-between;
    height: 3.2rem;
    width: 20.8rem;
    align-items: center;
    padding-left: 1.6rem;
    overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
` 
export const TipoPrato = styled.div`
    width: 5.438rem;
    height: 1.125rem;
    padding: 0 5px;
    letter-spacing: -0.39px;
    text-align: center;
    cursor: pointer;
`
export const TipoPratoVermelho = styled.div`
    width: 5.438rem;
    height: 1.125rem;
    padding: 0 5px;
    color: red;
    letter-spacing: -0.39px;
    text-align: center;
    cursor: pointer;
`
export const ContainerRestaurantes = styled.div`
    height: 25rem;
    width: 22.5rem;
    padding-left: 1.9rem;
    overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`
export const CardRestaurante = styled.div`
    width: 20.5rem;
    height: 11.75rem;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    cursor: pointer;
`
export const FotoRestaurante = styled.div`
    width: 20.5rem;
    height: 7.5rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
`
export const Imagem = styled.img`
    max-width: 100%;
    align-self: center;
`
export const NomeRestaurante = styled.p`
    font-size: 10px;
`
export const TempoEntrega = styled.span`
    font-size: 10px;
`
export const FreteEntrega = styled.span`
    font-size: 10px;
`
export const ContainerBusca = styled.div`
    height:31.2rem;
`