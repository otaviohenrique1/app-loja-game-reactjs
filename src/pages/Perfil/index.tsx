import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import styled from "styled-components";
import { Botao } from "../../components/Botao";
import { Separador } from "../../components/Campo";
import { ContainerApp } from "../../components/ContainerApp";
import { Titulo } from "../../components/Titulo";
import api from "../../services/api";
import { DataPerfil, dataPerfilInitialData } from "../../utils/types";

interface ParamsDataProps {
  id: string;
}

const TituloEstilizado = styled(Titulo)`
  margin-bottom: 50px;
`;

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
      <TituloEstilizado titulo={'Perfil'}/>
      <Row>
        <Col md={12}>
          <ItemPerfil
            itemTitulo={'Nome'}
            itemConteudo={data.nome}
          />
        </Col>
        <Col md={12}>
          <ItemPerfil
            itemTitulo={'Perfil'}
            itemConteudo={data.perfil}
          />
        </Col>
        <Col md={8}>
          <ItemPerfil
            itemTitulo={'Email'}
            itemConteudo={data.email}
          />
        </Col>
        <Col md={4}>
          <ItemPerfil
            itemTitulo={'Senha'}
            itemConteudo={(data.senha).replaceAll(/./g, '*')}
          />
        </Col>
        <Col md={6}>
          <ItemPerfil
            itemTitulo={'Sexo'}
            itemConteudo={data.sexo}
          />
        </Col>
        <Col md={6}>
          <ItemPerfil
            itemTitulo={'Data de nascimento'}
            itemConteudo={`${data.data_nascimento}`}
          />
        </Col>
        <Col md={4}>
          <ItemPerfil
            itemTitulo={'Estado'}
            itemConteudo={data.estado}
          />
        </Col>
        <Col md={4}>
          <ItemPerfil
            itemTitulo={'Cidade'}
            itemConteudo={data.cidade}
          />
        </Col>
        <Col md={4}>
          <ItemPerfil
            itemTitulo={'Pais'}
            itemConteudo={data.pais}
          />
        </Col>
        <Col md={12}>
          <ItemPerfil
            itemTitulo={'Resumo'}
            itemConteudo={data.resumo}
          />
        </Col>
        <Col md={12}>
          <ItemPerfil
            itemTitulo={'Url personalizada'}
            itemConteudo={data.url_personalizado}
          />
        </Col>
        <Col md={12}>
          <ItemPerfil
            itemTitulo={'Data de cadastro'}
            itemConteudo={`${data.data_cadastro}`}
          />
        </Col>
        <ContainerBotoes md={12}>
          <Botao
            labelButton={'Editar'}
            color="success"
          />
        </ContainerBotoes>
      </Row>
    </ContainerApp>
  );
}

const ContainerBotoes = styled(Col)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
`;

interface ItemPerfilProps {
  itemTitulo: any;
  itemConteudo: any;
}

function ItemPerfil(props: ItemPerfilProps) {
  return (
    <DivEstilizado>
      <span>{props.itemTitulo}</span>
      <Separador />
      <p>{props.itemConteudo}</p>
    </DivEstilizado>
  );
}

const DivEstilizado = styled.div`
  background-color: gainsboro;
  padding: 10px;
  margin: 4px;
  border-radius: 10px;
  border-style: solid;
  border-width: 2px;
  border-top-color: black;
  border-left-color: black;
  border-bottom-color: gray;
  border-right-color: gray;

  span {
    font-size: 20px;
  }

  hr {
    margin: 5px 0;
  }

  p {
    margin: 0;
  }
`;
