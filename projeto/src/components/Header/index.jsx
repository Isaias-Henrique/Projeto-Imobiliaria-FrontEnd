import React, { useEffect, useState } from 'react'
import LogoImg from "../Header/assets/LogoImg.png"
import { BotaoBuscar, Container, Logo, Menu, Pesquisa } from './styles';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaTimes } from 'react-icons/fa';
import { useLocation, useHistory } from "react-router-dom";
import axios from 'axios';

const Header = () => {
  const handleLogoff = () => {
    window.location.href="/login"
    localStorage.clear();
  }

  const userLogged = localStorage.getItem('Yt');

  const location =useLocation();
  const history = useHistory();


  const [todasCidades, setTodasCidades] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [cidadesFiltradas, setCidadesFiltradas] = useState([]);

  //aqui eu busco todas as cidades
  useEffect(() => {
    axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/municipios")
    .then(response => {
      const nomes = response.data.map(cidade => cidade.nome);
      setTodasCidades(nomes);
    })
    .catch(() => {
      console.log("Erro ao buscar cidades.")
    });
  }, []);


  useEffect(() => {
    if (inputValue.length > 0) {
      const filtradas = todasCidades.filter(cidade => cidade.toLowerCase().startsWith(inputValue.toLowerCase())
    );
      setCidadesFiltradas(filtradas.slice(0, 5));
    } else {
      setCidadesFiltradas([]);
    }
  }, [inputValue, todasCidades]);


  const handleSelectCity = (cidade) => {
    setInputValue(cidade);
    setCidadesFiltradas([]);
  }

  return (
    <Container>
    <Logo>
        <Link to='/'><img src={LogoImg} alt="" /></Link>
    </Logo>

  {location.pathname === '/' && (

     <Pesquisa>
        <input type="text" 
        placeholder='Pesquise a cidade do imóvel...'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={() => setTimeout(() =>setCidadesFiltradas([]), 10)}
        />
        <span><FaSearch className='Icon-pesquisa'/></span>    

        {/*Botão limpa input pesquisa*/}
        {inputValue && (
          <button
            className="ClearInput"
            onClick={() => {
              setInputValue('');
              history.push('/');
            }}
            type="button"
          >
            <FaTimes />
          </button>
        )}

        <BotaoBuscar onClick= {() => {
          if (inputValue) {
            history.push(`/?cidade=${encodeURIComponent(inputValue.trim())}`)
          }
        }}>Buscar</BotaoBuscar>  

    {cidadesFiltradas.length > 0 && (
      <ul className='autocomplete-list'> 
      {cidadesFiltradas.map((cidade, index) =>(
        <li key={index} onMouseDown={() => handleSelectCity(cidade)}>
        {cidade}
        </li>
      ))}
       </ul>
    )}
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