import styled from "styled-components";

export const Container = styled.div`
    padding: 35px 180px;
    height: 95px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    background-color: var(--branco);
`

export const Logo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 210px;
        cursor: pointer;
    }

`

export const Pesquisa = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  input {
    width: 100%;
    padding: 10px 25px 10px 35px; 
    border-radius: 8px;
    border: none;
    box-shadow: 0 0 0 0.8px var(--secundaria); 
    outline: none;

    &:focus {
      box-shadow: 0 0 0 2px var(--primaria);
      border: none;
    }
  }

  span {
    position: absolute;
    left: 10px; 
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none; 
  }

  .Icon-pesquisa {
    color: grey;
    font-size: 16px;
  }
`;


export const Menu = styled.div`
    ul{
    display: flex;
    justify-content: center;
    align-items: center;
        li.Cadastro{
                border: 1px solid var(--primaria);
                background-color: var(--cinza);
                color: var(--primaria);
                border-radius: 10px;
                padding: 10px 20px;
                transition: all 0.3s ease;
                margin-right:5rem;
                    a{
                        text-decoration:none;
                        color:inherit;

                    }
                    span{
                        font-size: 1.2rem;
                        font-weight:400;
                        padding:5px
                    }
                &:hover{
                    background-color: var(--primaria);
                    color: var(--cinza);
                    cursor: pointer;
                    border: 1px solid var(--cinza);
                    transition: all 0.3s ease;
                }
            }

            li.Login, li.Perfil{
                border: 1px solid var(--primaria);
                background-color: var(--primaria);
                color: var(--cinza);
                border-radius: 10px;
                padding: 10px 30px;;
                transition: all 0.3s ease;
                margin-left:-4rem;
                margin-right:25px;
                    a{
                        text-decoration:none;
                        color:inherit;

                    }
                    span{
                        font-size: 1.2rem;
                        font-weight:400;
                    }
                    svg{
                        position:relative;
                        right:8px;
                        top:3px;
                    }

                &:hover{
                    background-color: var(--cinza);
                    color: var(--verde);
                    cursor: pointer;
                    border: 1px solid var(--verde);
                    transition: all 0.3s ease;
                }
            }

            li.Sair{
                border: 1px solid var(--primaria);
                background-color: var(--primaria);
                color: var(--cinza);
                border-radius: 10px;
                padding: 10px;
                transition: all 0.3s ease;
                    a{
                        text-decoration:none;
                        color:inherit;

                    }
                    span{
                        font-size: 1.2rem;
                        font-weight:400;
                        padding:2em;
                    }
                &:hover{
                    background-color: var(--cinza);
                    color: #ff6347;
                    cursor: pointer;
                    border: 1px solid #ff6347;
                    transition: all 0.3s ease;
                }
            }

    }


`