import React from 'react';
import { Container, Text } from "./styles";
import { Link } from 'react-router-dom';

const Banner = () => {
 return (
   <Container>
    <Text>
        <h2>Seu novo lar te espera.</h2>
        <p>Explore centenas de imóveis para alugar com segurança, conforto e praticidade.</p>
        <Link to='/cadastro'><button>Cadastre seu anúncio</button></Link>
    </Text>
   </Container>
 )
}

export default Banner