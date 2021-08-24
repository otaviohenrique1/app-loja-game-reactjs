import { ReactNode, useEffect, useState } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { LoginData, loginInitialData } from "../../utils/types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { adicionaLogin } from "../../features/login/LoginSlice";

interface ContainerAppProps {
  children: ReactNode;
}

export function ContainerApp(props: ContainerAppProps) {
  const [data, setData] = useState<LoginData>(loginInitialData);

  const selector = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if(selector.login.id &&
      selector.login.nome &&
      selector.login.perfil &&
      selector.login.email) {
      setData({
        id: selector.login.id,
        nome: selector.login.nome,
        perfil: selector.login.perfil,
        email: selector.login.email,
      });
    } else {
      let id = sessionStorage.getItem('id');
      let nome = sessionStorage.getItem('nome');
      let perfil = sessionStorage.getItem('perfil');
      let email = sessionStorage.getItem('email');
  
      if (id && nome && perfil && email) {
        dispatch(adicionaLogin({
          id: id,
          nome: nome,
          perfil: perfil,
          email: email,
        }));
        
        setData({
          id: selector.login.id,
          nome: selector.login.nome,
          perfil: selector.login.perfil,
          email: selector.login.email,
        });
      }
    }
    
  }, [dispatch, selector.login.email, selector.login.id, selector.login.nome, selector.login.perfil]);

  return (
    <>
      <Header
        id={data.id}
        perfil={data.perfil}
      />
      <ContainerEstilizado>
        {props.children}
      </ContainerEstilizado>
      <Footer />
    </>
  );
}

const ContainerEstilizado = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: 'center';
  padding-top: 20px;
  margin-bottom: 50px;
`;