import styled from "styled-components";
import { ContainerApp } from "../../../components/ContainerApp";
import { Titulo } from "../../../components/Titulo";

const TituloEstilizado = styled(Titulo)`
  margin-bottom: 50px;
`;

export function FormularioCategorias() {
  return (
    <ContainerApp>
      <TituloEstilizado titulo={'Cadastro de Categorias'}/>
    </ContainerApp>
  );
}