import { HTMLAttributes } from "react";
import styled from "styled-components";

interface TituloProps extends HTMLAttributes<HTMLHeadingElement> {
  titulo: string;
}

const TituloEstilizado = styled.h1`
  margin-bottom: 20px;
`;

export function Titulo(props: TituloProps) {
  return (
    <TituloEstilizado {...props} >{props.titulo}</TituloEstilizado>
  );
}

const SubTituloEstilizado = styled.h2`
  margin-bottom: 20px;
`;

export function SubTitulo(props: TituloProps) {
  return (
    <SubTituloEstilizado {...props} >{props.titulo}</SubTituloEstilizado>
  );
}