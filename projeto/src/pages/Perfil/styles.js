import styled from "styled-components";

export const Container = styled.div`
    padding: 20px 50px;
    display:flex;
    justify-content: space-between;
 
 `;

 export const Esquerda = styled.div`

  padding: 10px;
  min-height: 300px;
  position: relative;

  .sem-mensagens {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-size: 18px;
    color: #999;
    text-align: center;
  }
`;


export const Direita = styled.div`
  width: 49%;
  padding: 20px;

  h2 {
    font-size: 1.17em;
    display: flex;
    align-items: center;
    justify-content:space-between;
  }
    button[name="BtnAnuncios"] {
      margin:auto;
      display: flex;
      align-items: center;
      padding: 10px 16px;
      border-radius: 5px;
      gap:5px;
      transition: transform 0.4s ease;

      &:hover{
        transform: translateX(8px);
      }
    }
 
  svg{
    font-size:2rem
  }
`;

   export const Form = styled.form`
    background-color: var(--branco);
    margin-top: 10px;
    padding: 40px;  

      input[name="uf"] {
      width:4rem;
      box-shadow: 0 0 0 0.8px var(--secundaria); 
      border: none;

       &:focus{
         border: 1px solid var(--primaria);
        }
      }

      input[name="tipo"],
      input[name="endereco"],
      input[name="cidade"],
      input[name="descricao"],
      input[name="name"],
      input[name="email"],
      input[name="valor"],
      input[name="thumb"],
      input[name="telefone"]{
        box-shadow: 0 0 0 0.8px var(--secundaria); 
        border: none;

          &:focus{
          box-shadow: 0 0 0 2px var(--primaria);
          }
      }

   `;


 export const Message = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: var(--cinza);

      span{
        display: flex;
        align-items: center;

      }
        Button{
          margin-left: auto;          
          cursor: pointer;
          width: 5rem;
          padding:8px;
        }
 
 `;

 export const Fundo = styled.div`
    width:55%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-top: 64px;
    margin-bottom: 18px;
    background-color: var(--branco);
 
 `;

export const SelectTipo = styled.select`
  width: 100%;
  padding: 15px 25px;
  border-radius: 3px;
  font-size: 0.9rem;
  box-shadow: 0 0 0 0.8px var(--secundaria);
  outline: none;
  transition: 0.2s ease-in-out;
  margin-bottom:10px;
  box-shadow: 0 0 0 0.8px var(--secundaria); 
  border: none;
  cursor: pointer;
  color:#757575;

  &:focus {
    box-shadow: 0 0 0 2px var(--primaria);
    border: none;
  }

  option {
    color: #000;
    background: var(--cinza);
    
  }
`;