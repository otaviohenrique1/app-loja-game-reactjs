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
      <TituloEstilizado titulo={'Game Page'}/>
      <h2>{data.nome}</h2>
    </ContainerApp>
  );
}

const TituloEstilizado = styled(Titulo)`
  margin-bottom: 50px;
`;
