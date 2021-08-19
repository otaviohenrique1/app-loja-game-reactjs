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
    if(selector.login.id && selector.login.nome) {
      setData({
        id: selector.login.id,
        nome: selector.login.nome
      });
    } else {
      let id = sessionStorage.getItem('id');
      let nome = sessionStorage.getItem('nome');
  
      if (id && nome) {
        dispatch(adicionaLogin({
          id: id,
          nome: nome
        }));
        
        setData({
          id: selector.login.id,
          nome: selector.login.nome
        });
      }
    }
    
  }, [dispatch, selector.login.id, selector.login.nome]);

  return (
    <>
      <Header
        id={data.id}
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
`;