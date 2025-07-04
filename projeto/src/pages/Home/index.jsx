import React, { Fragment, useEffect, useState } from 'react'
import Card from "../../components/Header/Card/"
import Banner from "../../components/Header/Banner"
import { Header, Wrapper } from './styles'
import Api from '../../services/Api'

const Home = () => {
  const [imovel, setImovel] = useState([]);
  useEffect(() => {
    Api.get('/listimovel')
    .then((response) => {
      setImovel(response.data)
    })
    .catch(() => {
      console.log("Erro: erro no sistema..");
    })
  }, [])

  return (
    <Fragment>
      <Banner/>
        <Header>
            <h2>Encontre o imóvel dos seus sonhos!</h2>
        </Header>
        <Wrapper>
          {imovel.map(itens => (
            <Card
            key={itens.id}
            thumb={itens.thumb}
            tipo={itens.tipo}
            cidade={itens.cidade}
            valor={itens.valor}
            slug={itens.slug}
            />
          ))}
        </Wrapper>
    </Fragment>
  )
}

export default Home;