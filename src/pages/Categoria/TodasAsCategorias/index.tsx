import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { ContainerApp } from "../../../components/ContainerApp";
import { Titulo } from "../../../components/Titulo";
import api from "../../../services/api";

const TituloEstilizado = styled(Titulo)`
  margin-bottom: 50px;
`;

interface DataCategorias {
  id: number;
  nome: string;
}

export function TodasAsCategorias() {
  const [data, setData] = useState<DataCategorias[]>([]);

  useEffect(() => {
    api.get('categorias')
      .then((data) => {
        setData(data.data)
      })
      .catch();
  }, []);

  return (
    <ContainerApp>
      <TituloEstilizado titulo={'Todas as Categorias'}/>
      <ul>
        {data.map((item, index) => {
          const id = (item.id < 10) ? `0${item.id}` : `${item.id}`;
          return (
            <li key={index} style={{ listStyle: 'none' }}>
              <span>{`[${id}] => ${item.nome}`}</span>
            </li>
          );
        })}
      </ul>
    </ContainerApp>
  );
}