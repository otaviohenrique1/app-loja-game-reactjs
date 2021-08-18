import styled from "styled-components";

const FooterEstilizado = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: cadetblue;
  padding: 10px 20px;
`;

export function Footer() {
  return (
    <FooterEstilizado>
      [Footer]
    </FooterEstilizado>
  );
}