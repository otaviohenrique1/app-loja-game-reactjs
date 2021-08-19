import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { ContainerApp } from "../../components/ContainerApp";
import api from "../../services/api";
import { DataPerfil, dataPerfilInitialData } from "../../utils/types";

interface ParamsDataProps {
  id: string;
}

export function Perfil() {
  const [data, setData] = useState<DataPerfil>(dataPerfilInitialData);
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
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <ContainerApp>
      <h1>Perfil</h1>
      <Row>
        <Col md={12}>
          <p>{`Nome: ${data.nome}`}</p>
        </Col>
        <Col md={12}>
          <p>{`Perfil: ${data.perfil}`}</p>
        </Col>
        <Col md={8}>
          <p>{`Email: ${data.email}`}</p>
        </Col>
        <Col md={4}>
          <p>{`Senha: ${(data.senha).replaceAll(/./g, '*')}`}</p>
        </Col>
        <Col md={6}>
          <p>{`Data de nascimento: ${data.data_nascimento}`}</p>
        </Col>
        <Col md={6}>
          <p>{`Sexo: ${data.sexo}`}</p>
        </Col>
        <Col md={4}>
          <p>{`Estado: ${data.estado}`}</p>
        </Col>
        <Col md={4}>
          <p>{`Cidade: ${data.cidade}`}</p>
        </Col>
        <Col md={4}>
          <p>{`Pais: ${data.pais}`}</p>
        </Col>
        <Col md={12}>
          <h3>Resumo</h3>
          <p>{`${data.resumo}`}</p>
        </Col>
        <Col md={12}>
          <h3>Url personalizada</h3>
          <p>{`${data.url_personalizado}`}</p>
        </Col>
        <Col md={12}>
          <p>{`Data de cadastro: ${data.data_cadastro}`}</p>
        </Col>
      </Row>
    </ContainerApp>
  );
}
