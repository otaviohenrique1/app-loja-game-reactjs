import { FormikHelpers } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ContainerApp } from "../../components/ContainerApp";
import { Titulo } from "../../components/Titulo";
import api from "../../services/api";
import { DataPerfil, dataPerfilInitialData, FormValuesCadastroUsuario, ValidationSchemaCadastroUsuario } from "../../utils/types";
// import { InitialValuesCadastroUsuario } from "../../utils/types";
import { FormularioDadosPerfil } from "./FormularioDadosPerfil";
import { FormularioEdicaoPerfil } from "./FormularioEdicaoPerfil";

const TituloEstilizado = styled(Titulo)`
  margin-bottom: 50px;
`;

interface ParamsDataProps {
  id: string;
}

export function Perfil() {
  const [data, setData] = useState<DataPerfil>(dataPerfilInitialData);
  const [modoEdicaoFormulario, setModoEdicaoFormulario] = useState<boolean>(true);
  const { id } = useParams<ParamsDataProps>();

  useEffect(() => {
    api.get(`usuarios/${id}`)
      .then((data) => {
        setData({
          nome: data.data.nome,
          perfil: data.data.perfil,
          email: data.data.email,
          senha: data.data.senha,
          sexo: data.data.sexo,
          data_nascimento: data.data.data_nascimento,
          pais: data.data.pais,
          cidade: data.data.cidade,
          estado: data.data.estado,
          resumo: data.data.resumo,
          celular: data.data.celular,
          url_personalizado: data.data.url_personalizado,
          data_cadastro: data.data.data_cadastro
        });
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  function handleClickEditar() {
    setModoEdicaoFormulario(!modoEdicaoFormulario);
  }

  function handleClickCancelar() {
    setModoEdicaoFormulario(!modoEdicaoFormulario);
  }

  async function handleSubmitForm(values: FormValuesCadastroUsuario, actions: FormikHelpers<FormValuesCadastroUsuario>) {
    await api.patch(`usuarios/${id}`, {
      'nome': (values.nome).toString(),
      'perfil': (values.perfil).toString(),
      'resumo': (values.resumo).toString(),
      'url_personalizado': (values.url_personalizado).toString(),
      'sexo': (values.sexo).toString(),
      'data_nascimento': (values.data_nascimento).toString(),
      'email': (values.email).toString(),
      'senha': ((values.senha).toString()),
      'celular': (values.celular).toString(),
      'pais': (values.pais).toString(),
      'cidade': (values.cidade).toString(),
      'estado': (values.estado).toString(),
    })
    .then(() => {
      alert('Cadastro realizado com sucesso!');
      setModoEdicaoFormulario(!modoEdicaoFormulario);
    })
    .catch((error) => {
      console.log(error);
    });
    setModoEdicaoFormulario(!modoEdicaoFormulario);
  }

  return (
    <ContainerApp>
      <TituloEstilizado titulo={'Perfil'}/>
      {(modoEdicaoFormulario) ? (
        <FormularioDadosPerfil
          data={data}
          onClickEditar={handleClickEditar}
        />
      ) : (
        <FormularioEdicaoPerfil
          onClickCancelar={handleClickCancelar}
          data={{
            nome: data.nome,
            perfil: data.perfil,
            email: data.email,
            senha: data.senha,
            sexo: data.sexo,
            data_nascimento: `${data.data_nascimento}`,
            pais: data.pais,
            cidade: data.cidade,
            estado: data.estado,
            resumo: data.resumo,
            celular: data.celular,
            url_personalizado: data.url_personalizado,
          }}
          validationSchema={ValidationSchemaCadastroUsuario}
          onSubmit={handleSubmitForm}
        />
      )}
    </ContainerApp>
  );
}
