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
    justify-content: space-evenly;
    height: 3.2rem;
    width: 22.5rem;
    align-items: center;
    overflow: hidden;
` 
export const TipoPrato = styled.div`
    width: 5.438rem;
    height: 1.125rem;
    letter-spacing: -0.39px;
    text-align: center;
`
export const ContainerRestaurantes = styled.div`
    height: 25rem;
    width: 22.5rem;
    overflow: auto;
`
export const CardRestaurante = styled.div`
    width: 20.5rem;
    height: 11.75rem;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    cursor: pointer;
`
export const FotoRestaurante = styled.img`
    width: 20.5rem;
    height: 7.5rem;
    object-fit: contain;
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