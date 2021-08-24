import { Container } from "reactstrap";
import styled from "styled-components";

const ContainerEstilizado = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function FormularioCategorias() {
  return (
    <ContainerEstilizado>
      <h1>Cadastro de categorias</h1>
    </ContainerEstilizado>
  );
}