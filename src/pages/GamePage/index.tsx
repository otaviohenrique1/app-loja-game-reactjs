import styled from "styled-components";
import { ContainerApp } from "../../components/ContainerApp";
import { Titulo } from "../../components/Titulo";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { items_lista_games } from "../../utils/lista_games";

interface GamePageParams {
  id: string;
}

interface DataTypes {
  src: string;
  alt: string;
  nome: string;
  preco: string;
  descricao: string;
  desconto: number;
}

const initialValuesData: DataTypes = {
  src: '',
  alt: '',
  nome: '',
  preco: '',
  descricao: '',
  desconto: 0,
};

export function GamePage() {
  const { id } = useParams<GamePageParams>();
  const [data, setData] = useState<DataTypes>(initialValuesData);
  
  useEffect(() => {
    let itemBuscado = items_lista_games.find((item) => {
      return item.id === parseInt(id);
    });
    if (itemBuscado) {
      setData({
        nome: itemBuscado.nome,
        descricao: itemBuscado.descricao,
        preco: itemBuscado.preco,
        desconto: itemBuscado.desconto,
        src: itemBuscado.src,
        alt: itemBuscado.alt
      });
    } else {
      return;
    }
  }, [id]);

  return (
    <ContainerApp>
      <img
        src={data.src}
        alt={data.alt}
        style={{
          width: '450px'
        }}
      />
      <TituloEstilizado titulo={data.nome}/>
      <div style={{ marginBottom: '20px' }}>
        <span style={{
          fontSize: '1.2rem',
          marginRight: '5px'
        }}>
          {`-${data.desconto}%`}
        </span>
        <span style={{ marginRight: '10px' }}>
          {`R$${data.preco}`}
        </span>
        <span style={{
          textDecoration: 'line-through',
          fontSize: '.8rem'
        }}>
          {`R$${data.preco}`}
        </span>
      </div>
      <p>{data.descricao}</p>
    </ContainerApp>
  );
}

const TituloEstilizado = styled(Titulo)`
  margin-bottom: 30px;
`;
