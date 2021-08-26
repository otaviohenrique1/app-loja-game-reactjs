import { ButtonHTMLAttributes, LiHTMLAttributes, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { Button, DropdownItem, NavbarText, NavItem } from "reactstrap";
import styled from "styled-components";

type ColorTypesBotao = 'primary' | 'secondary' | 'success' |
  'info' | 'warning' | 'danger' | 'link';

type TypesBotao = 'submit' | 'reset' | 'button' | undefined;

interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label_button?: string;
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
      {...props}
    >
      {props.label_button}
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
        {...props}
      >
        {props.label_button}
      </BotaoEstilizado>
    </Link>
  );
}

interface NavItemLinkProps extends LiHTMLAttributes<HTMLLIElement> {
  to: any;
  label_button: string;
}

export function NavItemLink(props: NavItemLinkProps) {
  return (
    <NavItem {...props}>
      <Link
        to={props.to}
      >
        <NavbarText>{props.label_button}</NavbarText>
      </Link>
    </NavItem>
  );
}

export const ContainerBotoes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

interface BotaoDropdownLinkProps {
  to: any;
  label_button: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function BotaoDropdownLink(props: BotaoDropdownLinkProps) {
  return (
    <Link
      to={props.to}
      onClick={props.onClick}
      style={{ textDecoration: 'none' }}
    >
      <DropdownItem>{props.label_button}</DropdownItem>
    </Link>
  );
}
