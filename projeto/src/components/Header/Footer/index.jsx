import React, { Fragment } from 'react'
import { Container, Item, Copy, ItemImg } from './styles'
import {} from 'react-icons'
import LogoImg from "../assets/LogoImg.png";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <Fragment>
          <Container>
       <ItemImg >
        <img src={LogoImg} alt="" />
        <p>Achei Casa - o lugar certo para</p> <p>comprar, alugar ou vender seu imóvel.</p>
        <nav>
          <li><span className='facebook'><FaFacebookSquare size={32}/></span></li>
          <li><span className='instagram'><FaInstagram size={32}/></span></li>
          <li><span className='whatssapp'><FaWhatsapp size={32}/></span></li>
        </nav>
        </ItemImg> 

        <Item>
          <h3>Nossos serviços</h3>
        <ul>
          <li><span>Comprar</span></li>
          <li><span>Alugar</span></li>
          <li><span>Vender</span></li>
        </ul>
        </Item> 

        <Item>
          <h3>Informações</h3>
        <ul>
          <li><span>Sobre nós</span></li>
          <li><span>Fale conosco</span></li>
          <li><span>Trabalhe conosco</span></li>
        </ul>        
        </Item> 

        <Item>
          <h3>Segurança</h3>
        <ul>
          <li><span>Política de privacidade</span></li>
          <li><span>Termos de uso</span></li>
          <li><span>Política de cookies</span></li>
        </ul>
        </Item> 
    </Container>
    <Copy>
      <p>© 2025 Achei Casa. Todos os direitos reservados.</p>

    </Copy>
    </Fragment>
  )
}

export default Footer