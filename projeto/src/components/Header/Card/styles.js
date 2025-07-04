import styled from "styled-components"

export const Container = styled.div`
    width: 24%;
    margin-bottom: 12px;
    background-color: var(--branco);
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.1);
    border-radius:5px;
`

export const Img = styled.div`
    width: 100%;
        img {
            width:100%;
            height:280px;
            border-radius: 5px 5px 0 0px;

        }

`

export const Descricao = styled.div`
    padding: 15px;
    margin-top:1rem;
        a {
            display:flex;
            justify-content: space-between;
            align-items:center;
            color: var(--secundaria);
            
                svg {                    
                    color: var(--primaria);
                }
        }

    h4 {
        font-size: 1.5rem;
        font-weight:700;
        margin-bottom: 15px;
    }  
`

export const Itens = styled.div`
    display:flex;
    justify-content: space-evenly;
    flex-direction: column;
    font-size: 1.2rem;
        span{
            margin-bottom: 10px;
        }

`
