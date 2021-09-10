import { useState } from "react";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, UncontrolledDropdown } from "reactstrap";
import { BiUserCircle } from "react-icons/bi";
import { CgGames } from "react-icons/cg";
import styled from "styled-components";
import { BotaoDropdownLink, NavItemLink } from "../Botao";

const AvatarLogo = styled.div`
  border-radius: 100%;
  width: 30px;
  height: 30px;
`;

const AvatarPerfil = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 5px;
  margin-right: 5px;
`;

interface HeaderProps {
  id?: string;
  nome?: string;
  perfil?: string;
  email?: string;
}

export function Header(props: HeaderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/dashboard">
        <CgGames size={30} style={{ marginRight: '10px' }} />
        Vecx-Games
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <DropdownDestaques />
          <DropdownCategorias />
          <DropdownCadastros />
          <NavItemLinkEstilizado
            label_button='Carrinho'
            to='/dashboard'
          />
          <NavItemLinkEstilizado
            label_button='Busca'
            to='/dashboard'
          />
        </Nav>
        <Nav>
          <DropdownAvatar
            id={props.id}
            perfil={props.perfil || "Perfil"}
          />
        </Nav>
      </Collapse>
    </Navbar>
  );
}

const NavItemLinkEstilizado = styled(NavItemLink)`
  margin-left: 10px;
`;

function DropdownDestaques() {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Destaques
      </DropdownToggle>
      <DropdownMenu right>
        <BotaoDropdownLink
          to='/dashboard'
          label_button='Home'
        />
        <DropdownItem divider />
        <BotaoDropdownLink
          to='/dashboard'
          label_button='Novidades'
        />
        <DropdownItem divider />
        <BotaoDropdownLink
          to='/dashboard'
          label_button='Promoções'
        />
        <DropdownItem divider />
        <BotaoDropdownLink
          to='/dashboard'
          label_button='Mais vendidos'
        />
        <DropdownItem divider />
        <BotaoDropdownLink
          to='/dashboard'
          label_button='Atualizações'
        />
        <DropdownItem divider />
        <BotaoDropdownLink
          to='/dashboard'
          label_button='Antecipados'
        />
        <DropdownItem divider />
        <BotaoDropdownLink
          to='/dashboard'
          label_button='Proximos lançamentos'
        />
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

function DropdownCategorias() {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Categorias
      </DropdownToggle>
      <DropdownMenu right>
        <BotaoDropdownLink
          to='/cadastro/categorias'
          label_button='Nova categoria'
        />
        <DropdownItem divider />
        <BotaoDropdownLink
          to='/categorias'
          label_button='Todas as categorias'
        />
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

function DropdownCadastros() {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Cadastros
      </DropdownToggle>
      <DropdownMenu right>
        <BotaoDropdownLink
          to='/cadastro/categorias'
          label_button='Nova categoria'
        />
        <DropdownItem divider />
        <BotaoDropdownLink
          to='/cadastro/game'
          label_button='Novo game'
        />
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

function DropdownAvatar(props: HeaderProps) {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <AvatarLogo>
          <BiUserCircle size={30} />
        </AvatarLogo>
        <AvatarPerfil>{props.perfil}</AvatarPerfil>
      </DropdownToggle>
      <DropdownMenu right>
        <BotaoDropdownLink
          to={`/perfil/${props.id}`}
          label_button='Perfil'
        />
        <DropdownItem divider />
        <DropdownItem>
          Favoritos
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          Lista de desejos
        </DropdownItem>
        <DropdownItem divider />
        <BotaoDropdownLink
          to='/'
          label_button='Sair'
        />
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
