import React from 'react';
import { Overlay, ModalBox, Buttons } from './styles';

const ModalConfirma = ({ onCancel, onConfirm }) => {
  return (
    <Overlay>
      <ModalBox>
        <h3>Tem certeza que deseja excluir este imóvel?</h3>
        <Buttons>
          <button className="cancelar" onClick={onCancel}>Cancelar</button>
          <button className="confirmar" onClick={onConfirm}>Excluir</button>
        </Buttons>
      </ModalBox>
    </Overlay>
  );
};

export default ModalConfirma;
