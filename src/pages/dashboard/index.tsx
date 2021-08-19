import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { ContainerApp } from "../../components/ContainerApp";
// import { adicionaLogin } from "../../features/login/LoginSlice";
import { LoginData, loginInitialData } from "../../utils/types";

export function Dashboard() {
  const [data, setData] = useState<LoginData>(loginInitialData);

  const selector = useSelector((state: RootState) => state);
  // const dispatch = useDispatch();

  useEffect(() => {
    // if(selector.login.id && selector.login.nome) {
    //   setData({
    //     id: selector.login.id,
    //     nome: selector.login.nome
    //   });
    // } else {
    //   let id = sessionStorage.getItem('id');
    //   let nome = sessionStorage.getItem('nome');
  
    //   if (id && nome) {
    //     dispatch(adicionaLogin({
    //       id: id,
    //       nome: nome
    //     }));
        
    //     setData({
    //       id: selector.login.id,
    //       nome: selector.login.nome
    //     });
    //   }
    // }
    setData({
      id: selector.login.id,
      nome: selector.login.nome,
      perfil: selector.login.perfil,
        email: selector.login.email,
    });
  }, [selector.login.email, selector.login.id, selector.login.nome, selector.login.perfil]);

  return (
    <ContainerApp>
      <h1>Dashboard</h1>
      <ul>
        <li>{data.id || '[id]'}</li>
        <li>{data.nome || '[nome]'}</li>
      </ul>
    </ContainerApp>
  );
}