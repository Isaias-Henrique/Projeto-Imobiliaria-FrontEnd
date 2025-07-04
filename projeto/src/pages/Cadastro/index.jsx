import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, ContainerForm, Form, Label, Voltar } from './styles';
import Api from '../../services/Api';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';

const Cadastro = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const InputValue = (e) => setData({...data, [e.target.name]: e.target.value});

  const history = useHistory();

    const handleSubmit = (e) => {
      e.preventDefault();
      Api.post('/createusers', data)
      .then((response) => {
        if (response.data.error !== true) {
          toast.success(response.data.message);

          setTimeout(() =>{
            history.push('/login');
          }, 2000)

        }else{
          toast(response.data.message);          
        }
        

      })
      .catch(() => {
        console.log('Erro: Opss, parece que estamos em manunteção!')
      })
      //console.log(data);
    }
      

  return (
    <Container>
        <h2>Crie sua conta</h2>
        <p>Cadastre-se e tenha acesso à nossa incrível plataforma!!</p>
        <ContainerForm>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Label>Nome</Label>
                <Input type="text" name="name" placeholder="Digite seu Nome..." onChange={InputValue} required/>
                <Label>E-mail</Label>
                <Input type="text" name="email" placeholder="Digite seu E-mail..." onChange={InputValue} required/>
                <Label>Senha</Label>
                <Input type="password" name="password" placeholder="Digite sua senha..." onChange={InputValue} required/>
                <Button type="submit">Cadastrar</Button>
                <Voltar><Link to='/'><span className="VoltaHome">Voltar</span></Link></Voltar>
            </Form>
        </ContainerForm>
        
    </Container>
  )
}

export default Cadastro;