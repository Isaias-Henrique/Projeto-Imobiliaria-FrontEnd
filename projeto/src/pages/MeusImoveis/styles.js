import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: var(--cinza);

  h2 {
    margin-bottom: 20px;
  }
`;

export const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; 
  margin-top: 20px;
`;

export const Card = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  width: calc(33.33% - 20px); 
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  span {
    display: flex;
    align-items: center;
  }

  button {
    margin-top: 10px;
    width: 100%;
    padding: 8px;
    background: #e74c3c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
