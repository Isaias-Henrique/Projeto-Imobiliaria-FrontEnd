import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  bottom: 80px;
  right: 50px;
  background-color: var(--primaria, #007bff);
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 30%;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  z-index: 1000;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: transparent;
    border: 1px solid var(--primaria);
    svg{
        color: var(--primaria);
    }
  }
`;
