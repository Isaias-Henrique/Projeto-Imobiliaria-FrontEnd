import React from 'react'
import { Container, Texto } from './styles';
import { urlApi } from '../../services/Api';

const TopBanner = ({tipo, descricao, thumb}) => {
  const imgUrl = `${urlApi}/uploads/${thumb}`;
  return (
    <Container style={{ backgroundImage: `url(${imgUrl})`}}>
        <Texto>
            <h2>{tipo}</h2>
            <p>{descricao}</p>
        </Texto>
    </Container>
  )
}

export default TopBanner;