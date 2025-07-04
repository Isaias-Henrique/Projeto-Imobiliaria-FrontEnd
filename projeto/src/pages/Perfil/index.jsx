import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import InputMask from 'react-input-mask';
import Button from "../../components/Button";
import { Container, Direita, Esquerda, Form, Fundo, Message, SelectTipo } from "./styles";
import Api from "../../services/Api";
import { toast } from "react-toastify";
import { getLocalStorage } from "../../context/utils";
import {NumericFormat} from 'react-number-format'
import {MdKeyboardDoubleArrowRight} from "react-icons/md"
import { Link } from "react-router-dom";

const Perfil = () => {
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  const [thumb, setThumb] = useState('');
  const [tipo, setTipo] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);

  const [cidades, setCidades] = useState([]);

  const user = getLocalStorage();
  const { id } = user;

  const data = {
    id,
    thumb,
    tipo,
    endereco,
    cidade,
    uf,
    valor,
    descricao,
    name,
    email,
    telefone,
  };

  useEffect(() => {
    Api.get(`/listmessage/${id}`)
      .then((response) => {
        setMessage(response.data.mensagem);
      })
      .catch(() => {
        console.log("Erro ao listar mensagens");
      });
  }, [id]);


  useEffect(() => {
    if (uf) {
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
      .then((response) => response.json())
      .then((data) => {
        const nomes = data.map((cidade) => cidade.nome);
        setCidades(nomes);
      })
      .catch(() => {
        toast.error("Erro ao carregar cidades da UF.");
        setCidades([]);
      });
    } else {
      setCidades([]);
    }
  }, [uf]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const headers = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    Api.post("/createimovel", data, headers)
      .then((response) => {
        setTimeout(() => {
          setLoading(false);
          if (!response.data.error === true) {
            toast.error(response.data.message);
          } else {
            toast.success(response.data.message);
            setThumb("");
            setTipo("");
            setEndereco("");
            setCidade("");
            setUf("");
            setValor("");
            setDescricao("");
            setName("");
            setEmail("");
            setTelefone("");
            setFileInputKey(Date.now());
          }
        }, 1000);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Erro ao cadastrar anúncio!");
      });
  };

    //copiando o email
    const copiarEmail = (email) => {
      navigator.clipboard.writeText(email)
      .then(() => {
        toast.success("Email copiado com sucesso!");

      })
      .catch(() => {
        toast.error("Erro ao copiar email.")
      })
    }

  return (
    <Container>
      <Fundo>
<Esquerda>
  <h2>Minhas mensagens</h2>
  {!Array.isArray(message) || message.length === 0 ? (
    <div className="sem-mensagens">Nenhuma mensagem aqui!</div>
  ) : (
    message.map((item, index) => (
      <Message key={index}>
        <span><strong>Nome: &nbsp;</strong> {item.cliente_nome}</span>
        <span>
          <strong>Email: &nbsp;</strong> {item.cliente_email}
          <Button
            type="button"
            onClick={() => copiarEmail(item.cliente_email)}
            title="Clique para copiar o E-mail"
          >
            Copiar
          </Button>
        </span>
        <p><strong>Mensagem: </strong><br />{item.cliente_mensagem}</p>
      </Message>
    ))
  )}
</Esquerda>

      </Fundo>

      <Direita>
        <h2>Crie seu anúncio <Link  to='/meus-imoveis'><Button name="BtnAnuncios"> Meus anúncios <MdKeyboardDoubleArrowRight /></Button></Link></h2>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Input
            key={fileInputKey}
            type="file"
            name="thumb"
            required
            onChange={(e) => setThumb(e.target.files[0])}
          />
          <SelectTipo
            name="tipo"
            required
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="">Selecione o tipo do imóvel</option>
            <option value="Casa">Casa</option>
            <option value="Apartamento">Apartamento</option>
            <option value="Terreno">Terreno</option>
            <option value="Comercial">Comercial</option>
            <option value="Outro">Outro</option>
          </SelectTipo>

          
          <SelectTipo
            name="uf"
            required
            value={uf}
            onChange={(e) => setUf(e.target.value)}
          >
            <option value="">Selecione a UF</option>
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
          </SelectTipo>

           <SelectTipo
           name="cidade"
           required
           value={cidade}
           onChange={(e) => setCidade(e.target.value)}
           >
            <option value="">Selecione a cidade</option>
            {cidades.map((cidade, index) => (
              <option key={index} value={cidade}>{cidade}</option>
            ))}
           </SelectTipo>

          <Input
            type="text"
            name="endereco"
            required
            placeholder="Informe o endereço do imóvel..."
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />

          <Input
            type="text"
            name="descricao"
            required
            placeholder="Descrição do imóvel..."
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <Input
            type="text"
            name="name"
            required
            placeholder="Informe seu nome..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            name="email"
            placeholder="Informe seu e-mail..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Máscara para Valor */}
            <NumericFormat
              value={valor}
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$ "
              decimalScale={2}
              fixedDecimalScale={true}
              allowNegative={false}
              onValueChange={(values) => setValor(values.value)}
              placeholder="Informe o valor do imóvel..."
              customInput={Input}
            />
            {(inputProps) => (
              <Input
                {...inputProps}
                type="text"
                name="valor"
                required
                placeholder="Informe o valor do imóvel..."
              />
            )}
          

          {/* Máscara para Telefone */}
          <InputMask
            mask="(99) 99999-9999"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          >
            {(inputProps) => (
              <Input
                {...inputProps}
                type="text"
                name="telefone"
                required
                placeholder="Informe o telefone para contato..."
              />
            )}
          </InputMask>

          <Button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Cadastrar imóvel"}
          </Button>
        </Form>
      </Direita>
    </Container>
  );
};

export default Perfil;
