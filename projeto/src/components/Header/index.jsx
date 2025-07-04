import React from 'react'
import LogoImg from "../Header/assets/LogoImg.png"
import { Container, Logo, Menu, Pesquisa } from './styles';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser } from 'react-icons/fa';
import { useLocation } from "react-router-dom"

const Header = () => {
  const handleLogoff = () => {
    window.location.href="/login"
    localStorage.clear();
  }

  const userLogged = localStorage.getItem('Yt');

  const location =useLocation();


  return (
    <Container>
    <Logo>
        <Link to='/'><img src={LogoImg} alt="" /></Link>
    </Logo>

  {location.pathname === '/' && (

     <Pesquisa>
        <input type="text" placeholder='Pesquise a cidade do imóvel...'/>
        <span><FaSearch className='Icon-pesquisa'/></span>      
    </Pesquisa>
 )}
    <Menu>

<ul>
  {!userLogged ? (
    <>
      <li className='Cadastro'><Link to='/cadastro'><span>Cadastre-se</span></Link></li>
      <li className='Login'><Link to='/login'><span>Login</span></Link></li>
    </>
   ) : (
    <>
    <li className='Perfil'><Link to='/perfil'><FaUser/><span>Perfil</span></Link></li>
    <li className='Sair'><a onClick={handleLogoff}><span>Sair</span></a></li>
     </>
     )}
     
</ul>
    </Menu>
    </Container>
  )
}
export default Header;