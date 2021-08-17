import styled from "styled-components";

const TituloEstilizado = styled.h1`
  margin-bottom: 20px;
`;

interface TituloProps {
  titulo: string;
}

export function Titulo(props: TituloProps) {
  return (
    <TituloEstilizado>{props.titulo}</TituloEstilizado>
  );
}