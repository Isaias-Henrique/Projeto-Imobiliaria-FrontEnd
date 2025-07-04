import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

 *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  
  :root{
    --primaria: #2084FF;
    --secundaria: #2C2C2C;
    --cinza: #F7F9FC;
    --verde: #2ECC71;
    --branco: #fff;
  }
  
  body {
    background-color: var(--cinza);
    color: var(--secundaria);
    font-size:1.2rem;
    font-weight:400;
    font-family: "Poppins", sans-serif;
  }

  ul, nav {list-style: none;}
  a{text-decoration:none;}
  `