  import React, { Fragment, useEffect, useRef, useState } from 'react'
  import Card from "../../components/Header/Card/"
  import Banner from "../../components/Header/Banner"
  import { Header, Wrapper } from './styles'
  import Api from '../../services/Api'
  import { useLocation } from 'react-router-dom'
  import { BsEmojiTear } from "react-icons/bs";

  const Home = () => {
    const [imovel, setImovel] = useState([]);
    const location = useLocation();
    const anunciosRef = useRef(null);

    const params = new URLSearchParams(location.search);
    const cidadeBusca = params.get('cidade');

    useEffect(() => {
      Api.get('/listimovel')
      .then((response) => {
        setImovel(response.data)
      })
      .catch(() => {
        console.log("Erro: erro no sistema..");
      })
    }, [])

    //scroll da página
    useEffect(() =>{
      if (cidadeBusca && anunciosRef.current) {
        anunciosRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [cidadeBusca]);


    // Filtrar imóveis pela cidade
    const imoveisFiltrados = cidadeBusca
    ? imovel.filter((item) =>
    item.cidade.toLowerCase().includes(cidadeBusca.toLowerCase())
  ) : imovel;


    return (
      <Fragment>
        <Banner/>
          <Header>
              <h2>Encontre o imóvel dos seus sonhos!</h2>
              {cidadeBusca && (
                <p style= {{ fontSize: '1.2rem', marginTop: '10px' }}>
                  Resultado para: <strong>{cidadeBusca}</strong> </p>
              )}
          </Header>
          <Wrapper ref={anunciosRef}>
            {imoveisFiltrados.length === 0 ? (
              <p style={{fontSize: '1.2rem' }}> Nenhum imóvel encontrado para "{cidadeBusca}" 😕</p>
            ) : (
            imoveisFiltrados.map(itens => (
              <Card
              key={itens.id}
              thumb={itens.thumb}
              tipo={itens.tipo}
              uf={itens.uf}
              cidade={itens.cidade}
              valor={itens.valor}
              slug={itens.slug}
              />
            ))
            )}
          </Wrapper>
      </Fragment>
    );
  };

  export default Home;