import React, { useEffect, useState } from 'react';
import Api from '../../services/Api';
import { getLocalStorage } from '../../context/utils';
import { CardGrid, Container } from './styles';
import Card from '../../components/Header/Card';
import { toast } from 'react-toastify';
import ModalConfirma from '../../components/ModalConfirma';

const MeusImoveis = () => {
  const [imoveis, setImoveis] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [imovelSelecionado, setImovelSelecionado] = useState(null);
  const user = getLocalStorage();

  useEffect(() => {
    if (user?.id) {
      Api.get(`/listImovelUser/${user.id}`)
        .then((res) => setImoveis(res.data))
        .catch(() => console.error("Erro ao carregar imóveis"));
    }
  }, [user]);

  const handleDeleteClick = (id) => {
    setImovelSelecionado(id);
    setModalVisible(true);
  };

  const confirmDelete = () => {
    Api.delete(`/deleteImovel/${imovelSelecionado}`)
      .then(() => {
        setImoveis((prev) => prev.filter((item) => item.id !== imovelSelecionado));
        toast.success("Imóvel excluído com sucesso!");
        setModalVisible(false);
      })
      .catch(() => {
        toast.error("Erro ao excluir o imóvel");
        setModalVisible(false);
      });
  };

  return (
    <Container>
      <h2>Meus anúncios</h2> 
      <CardGrid>
      {imoveis.length === 0 ? (
        <p>Você ainda não cadastrou nenhum imóvel.</p>
      ) : (
        imoveis.map((item) => (
          <Card
            key={item.id}
            thumb={item.thumb}
            tipo={item.tipo}
            cidade={item.cidade}
            uf={item.uf}
            valor={item.valor}
            slug={item.slug}
            onDelete={() => handleDeleteClick(item.id)}
          />
        ))
      )}

      {modalVisible && (
        <ModalConfirma
          onCancel={() => setModalVisible(false)}
          onConfirm={confirmDelete}
        />
      )}
      </CardGrid>
    </Container>
  );
};

export default MeusImoveis;
