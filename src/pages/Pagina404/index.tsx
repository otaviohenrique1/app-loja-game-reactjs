import { Container } from "reactstrap";
import styled from "styled-components";
import Lottie from "react-lottie";
import ErrorGlitch404 from "../../assets/lotties/error-glitch-404.json";

const ContainerEstilizado = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function Pagina404() {
  return (
    <ContainerEstilizado>
      <h1>Erro 404</h1>
      <Lottie 
	      options={{
          loop: true,
          autoplay: true,
          animationData: ErrorGlitch404,
          // rendererSettings: {
          //   preserveAspectRatio: "xMidYMid slice"
          // }
        }}
        height={400}
        width={400}
      />
    </ContainerEstilizado>
  );
}