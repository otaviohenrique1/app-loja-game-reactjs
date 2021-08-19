import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ContainerApp } from "../../components/ContainerApp";

interface LoginData {
  id: string;
  nome: string;
}

const loginInitialData: LoginData = {
  id: '',
  nome: ''
};

export function Dashboard() {
  const [data, setData] = useState<LoginData>(loginInitialData);

  const selector = useSelector((state: RootState) => state);
  
  useEffect(() => {
    setData({
      id: selector.login.id,
      nome: selector.login.nome
    });
  }, [selector.login.id, selector.login.nome]);

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