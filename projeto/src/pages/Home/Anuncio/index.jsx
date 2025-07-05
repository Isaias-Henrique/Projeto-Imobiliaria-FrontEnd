import React, { Fragment, useEffect, useState } from 'react';
import Input from "../../../components/Input";
import TextArea from '../../../components/TextArea';
import Button from "../../../components/Button";
import { DescricaoPerfil, Container, Descricao, Direita, Esquerda, Perfil, PerfilImg, Thumb, ContatoPerfil, FormularioPerfil, SpinnerIcon } from './styles';
import TopBanner from '../../../components/TopBanner';
import Api, { urlApi } from "../../../services/Api";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { FaMapMarkedAlt, FaMapMarkerAlt, FaSpinner } from "react-icons/fa";
import { FaBrazilianRealSign, FaRegMoneyBill1 } from "react-icons/fa6";

const Anuncio = () => {
  const { slug } = useParams();
  const [dataimovel, setDataimovel] = useState([]);
  const [loading, setLoading] = useState(false); // controle de envio

  useEffect(() => {
    Api.get(`/listimovel/${slug}`)
      .then((response) => {
        setDataimovel(response.data);
      })
      .catch(() => {
        console.log("Erro: Erro ao listar imóvel!");
      });
  }, [slug]);

  const {
    tipo,
    cidade,
    endereco,
    descricao,
    thumb,
    name,
    email,
    telefone,
    valor,
    userId
  } = dataimovel;

  const [cliente_nome, setClienteNome] = useState('');
  const [cliente_email, setClienteEmail] = useState('');
  const [cliente_mensagem, setClienteMensagem] = useState('');

  const dataMessage = {
    cliente_nome,
    cliente_email,
    cliente_mensagem,
    userId
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // inicia o loading

    Api.post('/createmessage', dataMessage)
      .then((response) => {
        setTimeout(() => {
          setLoading(false); // termina loading

          if (response.data.error !== true) {
            toast.success(response.data.message);

            // Limpa campos
            setClienteNome('');
            setClienteEmail('');
            setClienteMensagem('');

          } else {
            toast.error(response.data.message);
          }
        }, 2000); 
      })
      .catch(() => {
        setLoading(false);
        toast.error('Erro: Opss, parece que estamos em manutenção!');
      });
  };

  return (
    <Fragment>
      <TopBanner
        tipo={tipo}
        descricao={descricao}
        thumb={thumb}
      />
      <Container>
        <Esquerda>
          <Thumb>
            <img src={`${urlApi}/uploads/${thumb}`} alt="" />
          </Thumb>
          <Descricao>
            <h2>{tipo}</h2>
            <h5><FaMapMarkedAlt/> Cidade: {cidade}</h5>
            <h5><FaMapMarkerAlt/> Endereço: {endereco}</h5>
            <h5><FaBrazilianRealSign /> {valor}</h5>
            <p>{descricao}</p>
          </Descricao>
        </Esquerda>
        <Direita>
          <Perfil>
            <PerfilImg>
              <img src="https://i.pinimg.com/736x/27/01/f5/2701f51da94a8f339b2149ca5d15d2a5.jpg" alt="" />
            </PerfilImg>
            <DescricaoPerfil>
              <h3>{name}</h3>
            </DescricaoPerfil>
          </Perfil>
          <ContatoPerfil>
            <h3>Informações para contato:</h3>
            <p><strong>Telefone:</strong> {telefone}</p>
            <p><strong>Email: </strong> {email}</p>
          </ContatoPerfil>
          <FormularioPerfil>
            <h3>Contate o anunciante</h3>
            <form onSubmit={handleSubmit} autoComplete='off'>
              <Input
                type="hidden"
                name="userId"
                value={userId}
                required
              />
              <Input
                type="text"
                placeholder="Nome..."
                name="cliente_nome"
                value={cliente_nome}
                onChange={(e) => setClienteNome(e.target.value)}
                required
              />
              <Input
                type="text"
                placeholder="Email..."
                name="cliente_email"
                value={cliente_email}
                onChange={(e) => setClienteEmail(e.target.value)}
                required
              />
              <TextArea
                placeholder="Digite a mensagem..."
                name="cliente_mensagem"
                value={cliente_mensagem}
                onChange={(e) => setClienteMensagem(e.target.value)}
              />
              <Button type="submit" disabled={loading}>
                {loading ? (
                    <>
                     <SpinnerIcon><FaSpinner /></SpinnerIcon>
                    Enviando...
                    </>
                ) : (
                    "Enviar mensagem"
                )}
              </Button>
            </form>
          </FormularioPerfil>
        </Direita>
      </Container>
    </Fragment>
  );
};

export default Anuncio;
