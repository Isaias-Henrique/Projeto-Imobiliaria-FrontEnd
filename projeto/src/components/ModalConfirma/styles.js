import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalBox = styled.div`
  background: var(--branco);
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
`;

export const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items:center;
  gap:50px;

  button {
    display:flex;
    padding: 10px 20px;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    align-items:center;
    justify-content:center;
  }

  .cancelar {
    background: #ccc;
    color: #333;
  }

  .confirmar {
    background: #e74c3c;
    color: white;
  }
`;
