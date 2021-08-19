import { HTMLAttributes } from "react";
import styled from "styled-components";

const TituloEstilizado = styled.h1`
  margin-bottom: 20px;
`;

interface TituloProps extends HTMLAttributes<HTMLHeadingElement> {
  titulo: string;
}

export function Titulo(props: TituloProps) {
  return (
    <TituloEstilizado {...props} >{props.titulo}</TituloEstilizado>
  );
}