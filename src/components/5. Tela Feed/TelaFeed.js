import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {
  InputBusca, 
  ContainerFeed, 
  FeedTipos, 
  TipoPrato, 
  ContainerRestaurantes, 
  TipoPratoVermelho
} from './styles'
import CardRestaurantes from './CardRestaurantes';
import TelaBusca from './TelaBusca'
import AppFooter from '../AppFooter';
import AppHeader from '../AppHeader';

const TelaFeed = () => {
  const history = useHistory()

  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"

  const [arrayRestaurantes, setArrayRestaurantes] = useState([])
  const [filtroSelecionado, setFiltroSelecionado] = useState('')
  const [valorBusca, setValorBusca] = useState(null)

  useEffect(() => {
      mostraRestaurantes()
  }, [])

  const mostraRestaurantes = () => {
    const token = window.localStorage.getItem("token")
    axios.get(`${baseUrl}/restaurants`, {
      headers: {
        auth: token
      }
    }).then((response) => {
      setArrayRestaurantes(response.data.restaurants)
    }).catch((error) => {
      console.log(error.message)
    })
  }

  const irParaRestaurante = (idRestaurante) => {
    history.push(`/restaurante/${idRestaurante}`)
  }

  const filtros = (tipoCulinaria) => {
    switch (tipoCulinaria) {
      case 'Árabe':
      if (filtroSelecionado === ''){
        setFiltroSelecionado('Árabe')
      } else if (filtroSelecionado === "Árabe") {
        setFiltroSelecionado('')
      } else {
        setFiltroSelecionado('Árabe')
      }
      break;
    case 'Asiática':
      if (filtroSelecionado === ''){
        setFiltroSelecionado('Asiática')
      } else if (filtroSelecionado === "Asiática") {
        setFiltroSelecionado('')
      } else {
        setFiltroSelecionado('Asiática')
      }
      break;
    case 'Baiana':
      if (filtroSelecionado === ''){
        setFiltroSelecionado('Baiana')
      } else if (filtroSelecionado === "Baiana") {
        setFiltroSelecionado('')
      } else {
        setFiltroSelecionado('Baiana')
      }
      break;
    case 'Carnes':
      if (filtroSelecionado === ''){
        setFiltroSelecionado('Carnes')
      } else if (filtroSelecionado === "Carnes") {
        setFiltroSelecionado('')
      } else {
        setFiltroSelecionado('Carnes')
      }
      break;
    case 'Hamburguer':
      if (filtroSelecionado === ''){
          setFiltroSelecionado('Hamburguer')
      } else if (filtroSelecionado === "Hamburguer") {
          setFiltroSelecionado('')
      } else {
          setFiltroSelecionado('Hamburguer')
      }
      break;
    case 'Italiana':
      if (filtroSelecionado === ''){
        setFiltroSelecionado('Italiana')
      } else if (filtroSelecionado === "Italiana") {
        setFiltroSelecionado('')
      } else {
        setFiltroSelecionado('Italiana')
      }
      break;
    case 'Mexicana':
      if (filtroSelecionado === ''){
        setFiltroSelecionado('Mexicana')
      } else if (filtroSelecionado === "Mexicana") {
        setFiltroSelecionado('')
      } else {
        setFiltroSelecionado('Mexicana')
      }
      break;
    case 'Petiscos':
      if (filtroSelecionado === ''){
          setFiltroSelecionado('Petiscos')
      } else if (filtroSelecionado === "Petiscos") {
          setFiltroSelecionado('')
      } else {
          setFiltroSelecionado('Petiscos')
      }
      break;
    case 'Sorvetes':
      if (filtroSelecionado === ''){
          setFiltroSelecionado('Sorvetes')
      } else if (filtroSelecionado === "Sorvetes") {
          setFiltroSelecionado('')
      } else {
          setFiltroSelecionado('Sorvetes')
      }
      break;
    default:
      break;
    }
  }

  const onChangeBusca = event => {
    setValorBusca(event.target.value)
  }

  const renderTela = () => {
    if (valorBusca !== null) {
      return <TelaBusca 
      onChange={onChangeBusca()}
      valorBusca={valorBusca()}
      preparaBusca={preparaBusca()}
      />
    } else {
      return <div>
        <FeedTipos>
        {filtroSelecionado === 'Árabe' ? 
        <TipoPratoVermelho onClick={() => filtros('Árabe')}>Árabe</TipoPratoVermelho> : 
        <TipoPrato onClick={() => filtros('Árabe')}>Árabe</TipoPrato>}

        {filtroSelecionado === 'Asiática' ? 
        <TipoPratoVermelho onClick={() => filtros('Asiática')}>Asiática</TipoPratoVermelho> : 
        <TipoPrato onClick={() => filtros('Asiática')}>Asiática</TipoPrato>}

        {filtroSelecionado === 'Baiana' ? 
        <TipoPratoVermelho onClick={() => filtros('Baiana')}>Baiana</TipoPratoVermelho> : 
        <TipoPrato onClick={() => filtros('Baiana')}>Baiana</TipoPrato>}

        {filtroSelecionado === 'Carnes' ? 
        <TipoPratoVermelho onClick={() => filtros('Carnes')}>Carnes</TipoPratoVermelho> : 
        <TipoPrato onClick={() => filtros('Carnes')}>Carnes</TipoPrato>}

        {filtroSelecionado === 'Hamburguer' ? 
        <TipoPratoVermelho onClick={() => filtros('Hamburguer')}>Hamburguer</TipoPratoVermelho> : 
        <TipoPrato onClick={() => filtros('Hamburguer')}>Hamburguer</TipoPrato>}

        {filtroSelecionado === 'Italiana' ? 
        <TipoPratoVermelho onClick={() => filtros('Italiana')}>Italiana</TipoPratoVermelho> : 
        <TipoPrato onClick={() => filtros('Italiana')}>Italiana</TipoPrato>}

        {filtroSelecionado === 'Mexicana' ? 
        <TipoPratoVermelho onClick={() => filtros('Mexicana')}>Mexicana</TipoPratoVermelho> : 
        <TipoPrato onClick={() => filtros('Mexicana')}>Mexicana</TipoPrato>}

        {filtroSelecionado === 'Petiscos' ? 
        <TipoPratoVermelho onClick={() => filtros('Petiscos')}>Petiscos</TipoPratoVermelho> : 
        <TipoPrato onClick={() => filtros('Petiscos')}>Petiscos</TipoPrato>}

        {filtroSelecionado === 'Sorvetes' ? 
        <TipoPratoVermelho onClick={() => filtros('Sorvetes')}>Sorvetes</TipoPratoVermelho> : 
        <TipoPrato onClick={() => filtros('Sorvetes')}>Sorvetes</TipoPrato>}
    </FeedTipos>
    <ContainerRestaurantes>
      {arrayRestaurantes.map((restaurante) => {
        if (restaurante.category === filtroSelecionado){
          return <CardRestaurantes 
          key={restaurante.id}
          onClickCard={() => irParaRestaurante(restaurante.id)}
          fotoRestaurante={restaurante.logoUrl}
          nomeRestaurante={restaurante.name}
          tempoEntrega={restaurante.deliveryTime}
          freteEntrega={restaurante.shipping}
          />
        } else if (filtroSelecionado === '') {
          return <CardRestaurantes 
          key={restaurante.id}
          onClickCard={() => irParaRestaurante(restaurante.id)}
          fotoRestaurante={restaurante.logoUrl}
          nomeRestaurante={restaurante.name}
          tempoEntrega={restaurante.deliveryTime}
          freteEntrega={restaurante.shipping}
          />
        }
        return 
      })}
    </ContainerRestaurantes>
  </div>
  }}

  const preparaBusca = () => {
    history.push('/busca')
  }

return (
  <ContainerFeed>
    <AppHeader />
    <InputBusca placeholder="Restaurante" onChange={onChangeBusca} value={valorBusca} onClick={preparaBusca}/>
    <div>{renderTela()}</div>
    <AppFooter />
  </ContainerFeed>
  )  
}

export default TelaFeed