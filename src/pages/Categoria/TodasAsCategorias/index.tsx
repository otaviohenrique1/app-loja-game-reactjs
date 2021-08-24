import styled from "styled-components";
import { ContainerApp } from "../../../components/ContainerApp";
import { Titulo } from "../../../components/Titulo";

const TituloEstilizado = styled(Titulo)`
  margin-bottom: 50px;
`;

export function TodasAsCategorias() {
  return (
    <ContainerApp>
      <TituloEstilizado titulo={'Todas as Categorias'}/>
    </ContainerApp>
  );
}