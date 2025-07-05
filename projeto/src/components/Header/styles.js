import styled from "styled-components";
import Button from "../../components/Button";

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
  width: 40%;
  margin-right: 350px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  input {
    flex: 1;
    padding: 10px 25px 10px 35px;
    border-radius: 8px;
    border: none;
    box-shadow: 0 0 0 0.8px var(--secundaria);
    outline: none;

    &:focus {
      box-shadow: 0 0 0 2px var(--primaria);
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

  .autocomplete-list {
    position: absolute;
    top: 80%;
    left: 0px;
    width: calc(78% + 0px); 
    background: white;
    border: 1px solid var(--primaria);
    border-top: none;
    z-index: 999;
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 200px;
    overflow-y: auto;
    border-radius: 0px 0px 10px 10px;
  }

  .autocomplete-list li {
    font-size: 15px;
    padding: 8px;
    cursor: pointer;
    background-color: var(--cinza);
  }

  .autocomplete-list li:hover {
    background-color: #eee;
  }

  button.ClearInput {
  position: relative;
  right: 40px; 
  top: 2px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: var(--secundaria);
  padding: 5px;
}

button.ClearInput:hover {
  color: #555;
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
                        padding:5px;
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

export const BotaoBuscar = styled(Button)`
  margin-left: 8px;
  width: 100px;
  background-color: var(--primaria);
  color: #fff;
  font-weight: bold;
  border: none;
  padding: 8px 10px ;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--cinza);
    color: var(--primaria);
    border: 1px solid var(--primaria)
  }
`;

