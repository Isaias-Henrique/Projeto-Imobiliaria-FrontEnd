import React, { useState } from 'react';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, ContainerForm, Form, Label } from './styles';
import { AppAuth } from '../../context/AppAuth';


const Login = () => {
  const auth = AppAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    await auth.authenticate(email, password);
  }

  return (
    <Container>
        <h2>Acesse sua conta</h2>
        <p>Entre com seu e-mail e senha!</p>
        <ContainerForm>
            <Form onSubmit={handleLogin}> 
                <Label>E-mail</Label>
                <Input type="text" 
                name="email"
                required
                placeholder="Digite seu E-mail..."
                onChange={(e) => setEmail(e.target.value)}
                />
                <Label>Senha</Label>
                <Input type="password" 
                name="password"
                required
                placeholder="Digite sua senha..."
                onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">Login</Button>
            </Form>
        </ContainerForm>
    </Container>
  )
}

export default Login;