import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import styled from "styled-components";

type ColorTypesBotao = 'primary' | 'secondary' | 'success' |
  'info' | 'warning' | 'danger' | 'link';

type TypesBotao = 'submit' | 'reset' | 'button' | undefined;

interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  labelButton?: string;
  color?: ColorTypesBotao;
  type?: TypesBotao;
}

const BotaoEstilizado = styled(Button)`
  width: 80px;
`;

export function Botao(props: BotaoProps) {
  return (
    <BotaoEstilizado
      color={props.color}
      type={props.type}
    >
      {props.labelButton}
    </BotaoEstilizado>
  );
}

interface BotaoLinkProps extends BotaoProps {
  rota: any;
}

export function BotaoLink(props: BotaoLinkProps) {
  return (
    <Link to={props.rota}>
      <BotaoEstilizado
        color={props.color}
        type={props.type}
      >
        {props.labelButton}
      </BotaoEstilizado>
    </Link>
  );
}

export const ContainerBotoes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
