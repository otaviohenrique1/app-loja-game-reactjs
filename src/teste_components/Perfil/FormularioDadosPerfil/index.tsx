import { Col, Row } from "reactstrap";
import styled from "styled-components";
import { Botao } from "../../../components/Botao";
import { Separador } from "../../../components/Campo";
import { DataPerfil } from "../../../utils/types";
import { formataData } from "../../../utils/utils";

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

export interface FormularioDadosPerfilProps {
  data: DataPerfil;
  onClickEditar: React.MouseEventHandler<HTMLButtonElement>;
}

export function FormularioDadosPerfil(props: FormularioDadosPerfilProps) {
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
          itemConteudo={`${formataData(props.data.data_nascimento)}`}
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
          itemConteudo={`${formataData(props.data.data_cadastro)}`}
        />
      </Col>
      <Col md={12}>
        <Separador />
      </Col>
      <ContainerBotoes md={12}>
        <BotaoEstilizado
          label_button={'Editar'}
          color="success"
          type="button"
          onClick={props.onClickEditar}
        />
      </ContainerBotoes>
    </Row>
  );
}

const BotaoEstilizado = styled(Botao)`
  width: 100px;
`;

const ContainerBotoes = styled(Col)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
`;
