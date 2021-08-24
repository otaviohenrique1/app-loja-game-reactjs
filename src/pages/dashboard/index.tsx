import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { CarouselApp } from "../../components/CarouselApp";
import { ContainerApp } from "../../components/ContainerApp";
import { Titulo } from "../../components/Titulo";
import { items_lista_games } from "../../utils/lista_games";
import { LoginData, loginInitialData } from "../../utils/types";

export function Dashboard() {
  const [data, setData] = useState<LoginData>(loginInitialData);

  const selector = useSelector((state: RootState) => state);

  useEffect(() => {
    setData({
      id: selector.login.id,
      nome: selector.login.nome,
      perfil: selector.login.perfil,
      email: selector.login.email,
    });
  }, [selector.login.email, selector.login.id, selector.login.nome, selector.login.perfil]);

  return (
    <ContainerApp>
      <Titulo titulo={`Bem vindo ${data.nome || '[nome]'}`} />
      <CarouselApp
        data={items_lista_games}
      />
    </ContainerApp>
  );
}
