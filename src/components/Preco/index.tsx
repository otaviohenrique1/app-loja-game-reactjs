import { HTMLAttributes } from "react";
import styled from "styled-components";
import { aplicaDesconto, ajustaPreco } from "../../utils/utils";

interface PrecoContainerProps extends HTMLAttributes<HTMLDivElement> {
  preco: number;
  desconto: number;
}

const PrecoContainerEstilizado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  
  span:first-child {
    font-size: 1.2rem;
    padding-right: 5px;
    background-color: deepskyblue;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  }
  span:nth-child(2) {
    padding-right: 10px;
    background-color: chartreuse;
  }
  span:last-child {
    text-decoration: line-through;
    font-size: .8rem;
    background-color: darkseagreen;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  
  span:first-child, span:nth-child(2), span:last-child {
    padding: 5px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export function Preco(props: PrecoContainerProps) {
  const valorDesconto = props.desconto;
  const precoComDesconto = aplicaDesconto(valorDesconto, props.preco);
  const precoSemDesconto = ajustaPreco(props.preco);
  
  return (
    <PrecoContainerEstilizado {...props}>
      <span>{`-${valorDesconto}%`}</span>
      <span>{`R$${precoComDesconto}`}</span>
      <span>{`R$${precoSemDesconto}`}</span>
    </PrecoContainerEstilizado>
  );
}

