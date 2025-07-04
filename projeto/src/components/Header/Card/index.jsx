import React from 'react';
import { FaArrowRight, FaMapMarkedAlt, FaTrash } from 'react-icons/fa';
import { 
    Container, 
    Descricao, 
    Img, 
    Itens 
} from './styles'
import { Link } from 'react-router-dom';
import { urlApi } from '../../../services/Api';

const Card = ({thumb, tipo, cidade, valor, slug, onDelete}) => {
  return (
    <Container>
        <Img>
            <img src={`${urlApi}/uploads/${thumb}`} alt="" />
        </Img>

        <Descricao>
            <h4>{tipo}</h4>
            <Itens>
                <span><FaMapMarkedAlt/> {cidade}</span>
                <span>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(Number(valor))}</span>
            </Itens>
            <Link to={`/imovel/${slug}`}>Veja mais <FaArrowRight/></Link>

            {onDelete && (
            <button
                style={{
                marginTop: '10px',
                backgroundColor: '#e74c3c',
                color: '#fff',
                border: 'none',
                padding: '8px 12px',
                cursor: 'pointer',
                borderRadius: '4px',
                 }}
                  onClick={onDelete}
                 >
            
                 <FaTrash style={{ marginRight: '3px' }}/>
                  Excluir
             </button>
            )}
        </Descricao>

    </Container>
    
  );
};

export default Card