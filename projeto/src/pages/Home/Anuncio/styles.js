import styled, { keyframes } from "styled-components";

// Animação de rotação
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Componente para o ícone spinner
export const SpinnerIcon = styled.span`
  display: inline-flex;              // muda de inline-block para inline-flex
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  animation: ${spin} 1s linear infinite;
  font-size: 16px;
  vertical-align: middle;

  svg {
    display: block;                 // força o SVG a não herdar comportamento de inline
  }
`;
export const Container = styled.div`
  padding: 20px 150px;
  display: flex;
  justify-content: space-between;
`;

export const Esquerda = styled.div`
  width: 70%;
  padding: 10px;
  border: 1px solid rgb(0,0,0,.1);
`;

export const Thumb = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

export const Descricao = styled.div`
  padding: 30px 0;
  h2, p {
    margin-bottom: 15px;
    color: var(--secundaria);
  }
`;

export const Direita = styled.div`
  width: 28%;
  padding: 10px;
  border: 1px solid rgb(0,0,0,.1);
  border-radius: 5px;
`;

export const Perfil = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PerfilImg = styled.div`
  width: 115px;
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

export const DescricaoPerfil = styled.div`
  h3, p {
    margin-bottom: 15px;
    color: var(--secundaria);
  }
`;

export const ContatoPerfil = styled.div`
  margin-top:25px;
  h3, p {
    margin-bottom: 15px;
    color: var(--secundaria);
  }
`;

export const FormularioPerfil = styled.div`
  h3, p {
    margin-bottom: 15px;
    color: var(--secundaria);
  }
  form {
    display: flex;
    flex-direction: column;
  }
`;
