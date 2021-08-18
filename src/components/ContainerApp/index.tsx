import { ReactNode } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface ContainerAppProps {
  children: ReactNode;
}

const ContainerEstilizado = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: 'center';
`;

export function ContainerApp(props: ContainerAppProps) {
  return (
    <>
      <Header />
      <ContainerEstilizado>
        {props.children}
      </ContainerEstilizado>
      <Footer />
    </>
  );
}