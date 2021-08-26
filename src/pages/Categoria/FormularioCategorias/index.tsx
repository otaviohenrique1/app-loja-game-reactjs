import styled from "styled-components";
import { ContainerApp } from "../../../components/ContainerApp";
import { Titulo } from "../../../components/Titulo";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MensagemErroCampoVazio } from "../../../utils/utils";
import { Col, Row } from "reactstrap";
import { CampoFormulario, Separador } from "../../../components/Campo";
import { MensagemErro } from "../../../components/Mensagem";
import { Botao, BotaoLink } from "../../../components/Botao";
import api from "../../../services/api";
import { useHistory } from "react-router-dom";

interface FormValuesCategorias {
  nome: string;
  data_cadastro: Date;
}

const initialvaluesCategorias: FormValuesCategorias = {
  nome: '',
  data_cadastro: new Date(),
};

const validationSchema = Yup.object().shape({
  nome: Yup.string().required(MensagemErroCampoVazio('nome')),
});

export function FormularioCategorias() {
  const history = useHistory();

  function handleSubmitForm(values: FormValuesCategorias) {
    api.post('categorias', {
      'nome': values.nome,
      'data_cadastro': new Date(),
    }).then(() => {
      alert('Cadastro realizado com sucesso!');
      history.push('/dashboard');
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <ContainerApp>
      <TituloEstilizado titulo={'Cadastro de Categorias'}/>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialvaluesCategorias}
        onSubmit={handleSubmitForm}
      >
        {({errors, touched, values}) => (
          <Form>
            <Row>
              <Col md={12}>
                <CampoFormulario
                  type="text"
                  name="nome"
                  id="nome"
                  htmlFor="nome"
                  label="Nome"
                  placeholder="Digite o nome da categoria"
                  className="form-control"
                  value={values.nome}
                  erro={(errors.nome && touched.nome) && (
                    <MensagemErro color='danger' mensagem={errors.nome} />
                  )}
                />
              </Col>
              <Col md={12}>
                <Separador />
              </Col>
              <ContainerBotoes md={12}>
                <BotaoEstilizado
                  color="primary"
                  label_button="Salvar"
                  type="submit"
                  style={{ marginRight: '10px' }}
                />
                <BotaoEstilizado
                  color="danger"
                  label_button="Limpar"
                  type="reset"
                  style={{ marginRight: '10px' }}
                />
                <BotaoLinkEstilizado
                  color="info"
                  label_button="Voltar"
                  type="button"
                  rota="/dashboard"
                />
              </ContainerBotoes>
            </Row>
          </Form>
        )}
      </Formik>
    </ContainerApp>
  );
}

const ContainerBotoes = styled(Col)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const TituloEstilizado = styled(Titulo)`
  margin-bottom: 50px;
`;

const BotaoEstilizado = styled(Botao)`
  width: 100px;
`;

const BotaoLinkEstilizado = styled(BotaoLink)`
  width: 100px;
`;


