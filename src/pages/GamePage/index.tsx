import styled from "styled-components";
import { ContainerApp } from "../../components/ContainerApp";
import { Titulo } from "../../components/Titulo";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { items_lista_games } from "../../utils/lista_games";
import { Preco } from "../../components/Preco";

interface GamePageParams {
  id: string;
}

interface DataTypes {
  src: string;
  alt: string;
  nome: string;
  preco: number;
  descricao: string;
  desconto: number;
}

const initialValuesData: DataTypes = {
  src: '',
  alt: '',
  nome: '',
  preco: 0,
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
      <Preco
        style={{ marginBottom: '20px' }}
        desconto={data.desconto}
        preco={data.preco}
      />
      <p>{data.descricao}</p>
    </ContainerApp>
  );
}

const TituloEstilizado = styled(Titulo)`
  margin-bottom: 30px;
`;
