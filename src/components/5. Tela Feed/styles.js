import styled from 'styled-components'

export const HeaderFeed = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    width: 22.5rem;
    height: 4rem;
`
export const TituloFeed = styled.div`
    width: 10.938rem;
    height: 2.75rem;
`
export const FonteTitulo = styled.p`
    letter-spacing: -0.39px;
    text-align: center;
`
export const ContainerFeed = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 22.5rem;
`
export const InputBusca = styled.input`
    width: 20.5rem;
    height: 3.5rem;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
    margin: 0.5rem 0 0 0;
`
export const FeedTipos = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 2.625rem;
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
export const BotaoCarrinho = styled.div`
    cursor: pointer;
    font-size: 1.688rem;
    object-fit: contain;
`
export const BotaoFeed = styled.div`
    cursor: pointer;
    font-size: 1.688rem;
    object-fit: contain;
`
export const BotaoPerfil = styled.div`
    cursor: pointer;
    font-size: 1.688rem;
    object-fit: contain;
`
export const FooterProvisorio = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 22.5rem;
    height: 3.063rem;
    box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
`