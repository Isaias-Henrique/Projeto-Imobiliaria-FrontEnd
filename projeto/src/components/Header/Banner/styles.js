import styled from "styled-components"

export const Container = styled.div `
  padding: 160px 150px;
  position:relative;
  background-size:cover;
  background-position: center;
  background-image: url('https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  &:before {
    background-color: rgba(0,0,0,.6);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

`

export const Text =styled.div `
  width: 55%;
  position: relative;
  z-index: 1;
    h2 {
      color: var(--branco);
      font-size: 60px;
      font-weight: 700;
      margin-bottom: 25px;
    }

  p{
    color: var(--branco);
    margin-bottom: 25px;
  }
  button {
    background-color: var(--verde);
    border: 0;
    color: var(--secundaria);
    font-size: 14px;
    font-weight: 600;
    padding: 12px 100px;
    line-height: 24px;
    border-radius: 4px;
    cursor: pointer;
  }



`