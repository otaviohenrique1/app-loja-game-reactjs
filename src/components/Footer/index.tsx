import styled from "styled-components";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterEstilizado = styled.footer`
  position: fixed;
  /* position: relative; */
  /* position: absolute; */
  bottom: 0;
  width: 100%;
  background-color: cadetblue;
  padding: 5px 20px;
  /* padding: 10px 20px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  p {
    margin-bottom: 0;
  }
`;

export function Footer() {
  return (
    <FooterEstilizado>
      <AiOutlineCopyright size={20} style={{ marginRight: 10 }} />
      <p>Otávio Henrique</p>
    </FooterEstilizado>
  );
}