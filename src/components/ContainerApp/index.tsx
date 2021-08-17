import { ReactNode } from "react";
import { Container } from "reactstrap";
import { NavbarApp } from "../Navbar";

interface ContainerAppProps {
  children: ReactNode;
}

export function ContainerApp(props: ContainerAppProps) {
  return (
    <Container>
      <NavbarApp />
      {props.children}
    </Container>
  );
}