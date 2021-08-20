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

interface ItemPerfilProps {
  itemTitulo: any;
  itemConteudo: any;
}

function ItemPerfil(props: ItemPerfilProps) {
  return (
    <ItemPerfilEstilizado>
      <span>{props.itemTitulo}</span>
      <Separador />
      <p>{props.itemConteudo}</p>
    </ItemPerfilEstilizado>
  );
}

const ItemPerfilEstilizado = styled.div`
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

  return (
    <ContainerApp>
      <TituloEstilizado titulo={'Perfil'}/>
      <Row>
        {(modoEdicaoFormulario) ? (
          <FormularioDadosPerfil
            data={data}
            onClickEditar={handleClickEditar}
          />
        ) : (
          <FormularioEdicaoPerfil
            onClickCancelar={handleClickCancelar}
          />
        )}
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

interface FormularioDadosPerfilProps {
  data: DataPerfil;
  onClickEditar?: React.MouseEventHandler<HTMLButtonElement>;
}

function FormularioDadosPerfil(props: FormularioDadosPerfilProps) {
  return (
    <Row>
      <Col md={12}>
        <ItemPerfil
          itemTitulo={'Nome'}
          itemConteudo={props.data.nome}
        />
      </Col>
      <Col md={12}>
        <ItemPerfil
          itemTitulo={'Perfil'}
          itemConteudo={props.data.perfil}
        />
      </Col>
      <Col md={8}>
        <ItemPerfil
          itemTitulo={'Email'}
          itemConteudo={props.data.email}
        />
      </Col>
      <Col md={4}>
        <ItemPerfil
          itemTitulo={'Senha'}
          itemConteudo={(props.data.senha).replaceAll(/./g, '*')}
        />
      </Col>
      <Col md={6}>
        <ItemPerfil
          itemTitulo={'Sexo'}
          itemConteudo={props.data.sexo}
        />
      </Col>
      <Col md={6}>
        <ItemPerfil
          itemTitulo={'Data de nascimento'}
          itemConteudo={`${props.data.data_nascimento}`}
        />
      </Col>
      <Col md={4}>
        <ItemPerfil
          itemTitulo={'Estado'}
          itemConteudo={props.data.estado}
        />
      </Col>
      <Col md={4}>
        <ItemPerfil
          itemTitulo={'Cidade'}
          itemConteudo={props.data.cidade}
        />
      </Col>
      <Col md={4}>
        <ItemPerfil
          itemTitulo={'Pais'}
          itemConteudo={props.data.pais}
        />
      </Col>
      <Col md={12}>
        <ItemPerfil
          itemTitulo={'Resumo'}
          itemConteudo={props.data.resumo}
        />
      </Col>
      <Col md={12}>
        <ItemPerfil
          itemTitulo={'Url personalizada'}
          itemConteudo={props.data.url_personalizado}
        />
      </Col>
      <Col md={12}>
        <ItemPerfil
          itemTitulo={'Data de cadastro'}
          itemConteudo={`${props.data.data_cadastro}`}
        />
      </Col>
      <ContainerBotoes md={12}>
        <BotaoEstilizado
          labelButton={'Editar'}
          color="success"
          type="button"
          onClick={props.onClickEditar}
        />
      </ContainerBotoes>
    </Row>
  );
}

interface FormularioEdicaoPerfilProps {
  onClickCancelar?: React.MouseEventHandler<HTMLButtonElement>
}

function FormularioEdicaoPerfil(props: FormularioEdicaoPerfilProps) {
  return (
    <Row>
      <ContainerBotoes md={12}>
        <BotaoEstilizado
          labelButton={'Cancelar'}
          color="danger"
          type="button"
          onClick={props.onClickCancelar}
        />
      </ContainerBotoes>
    </Row>
  );
}

const BotaoEstilizado = styled(Botao)`
  width: 100px;
`;
