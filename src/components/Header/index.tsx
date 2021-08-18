import { useState } from "react";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, UncontrolledDropdown } from "reactstrap";
import { BiUserCircle } from "react-icons/bi";
import { CgGames } from "react-icons/cg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AvatarLogo = styled.div`
  border-radius: 100%;
  width: 30px;
  height: 30px;
`;

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/dashboard">
        <CgGames
          size={30}
          style={{
            marginRight: '10px'
          }}
        />
        Vecx-Games
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem style={{ marginRight: 10 }}>
            <NavbarText>Home</NavbarText>
          </NavItem>
          <NavItem>
            <NavbarText>Destaques</NavbarText>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Categorias
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                Option 1
              </DropdownItem>
              <DropdownItem>
                Option 2
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Reset
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <Nav>
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
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                Perfil
              </DropdownItem>
              <DropdownItem>
                Favoritos
              </DropdownItem>
              <DropdownItem>
                Lista de desejos
              </DropdownItem>
              <DropdownItem divider />
              <Link
                to='/'
                style={{
                  textDecoration: 'none'
                }}
              >
                <DropdownItem>
                  Sair
                </DropdownItem>
              </Link>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}