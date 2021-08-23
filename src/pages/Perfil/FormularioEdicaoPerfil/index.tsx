import { Form, Formik } from "formik";
import { Col, Row } from "reactstrap";
import styled from "styled-components";
import { Botao } from "../../../components/Botao";
import { CampoFormulario, CampoSelectFormulario, CampoTextAreaFormulario, Separador } from "../../../components/Campo";
import { MensagemErro } from "../../../components/Mensagem";
import { sexo_lista, estado_lista } from "../../../utils/listas";
import { FormValuesCadastroUsuario } from "../../../utils/types";
import { formataData2 } from "../../../utils/utils";

const ContainerBotoes = styled(Col)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
`;


interface FormularioEdicaoPerfilProps {
  onClickCancelar: React.MouseEventHandler<HTMLButtonElement>
  data: FormValuesCadastroUsuario;
  validationSchema: any
  onSubmit: any;
}

export function FormularioEdicaoPerfil(props: FormularioEdicaoPerfilProps) {
  const InitialValuesCadastroUsuario: FormValuesCadastroUsuario = {
    nome: '' || props.data.nome,
    perfil: '' || props.data.perfil,
    email: '' || props.data.email,
    senha: '' || props.data.senha,
    sexo: '' || props.data.sexo,
    data_nascimento: '' || formataData2(new Date(props.data.data_nascimento)),
    pais: '' || props.data.pais,
    cidade: '' || props.data.cidade,
    estado: '' || props.data.estado,
    resumo: '' || props.data.resumo,
    celular: '' || props.data.celular,
    url_personalizado: '' || props.data.url_personalizado
  };
  
  return (
    <Formik
      initialValues={InitialValuesCadastroUsuario}
      validationSchema={props.validationSchema}
      onSubmit={props.onSubmit}
    >
      {({ errors, touched, values }) => (
        <FormEstilizado>
          <Row>
            <ColEstilizado md={12}>
              <CampoFormulario
                type="text"
                name="nome"
                id="nome"
                htmlFor="nome"
                label="Nome"
                placeholder="Digite o seu nome"
                className="form-control"
                value={values.nome}
                erro={(errors.nome && touched.nome) && (
                  <MensagemErro
                    color='danger'
                    mensagem={errors.nome}
                  />
                )}
              />
            </ColEstilizado>
            <ColEstilizado md={12}>
              <CampoFormulario
                type="text"
                name="perfil"
                id="perfil"
                htmlFor="perfil"
                label="Perfil"
                placeholder="Digite o seu perfil"
                className="form-control"
                value={values.perfil}
                erro={(errors.perfil && touched.perfil) && (
                  <MensagemErro
                    color='danger'
                    mensagem={errors.perfil}
                  />
                )}
              />
            </ColEstilizado>
            <ColEstilizado md={8}>
              <CampoFormulario
                type="email"
                name="email"
                id="email"
                htmlFor="email"
                label="Email"
                placeholder="Digite o seu email"
                className="form-control"
                value={values.email}
                erro={(errors.email && touched.email) && (
                  <MensagemErro
                    color='danger'
                    mensagem={errors.email}
                  />
                )}
              />
            </ColEstilizado>
            <ColEstilizado md={4}>
              <CampoFormulario
                type="password"
                name="senha"
                id="senha"
                htmlFor="senha"
                label="Senha"
                placeholder="Digite a sua senha"
                className="form-control"
                value={values.senha}
                erro={(errors.senha && touched.senha) && (
                  <MensagemErro
                    color='danger'
                    mensagem={errors.senha}
                  />
                )}
              />
            </ColEstilizado>
            <ColEstilizado md={4}>
              <CampoSelectFormulario
                id="sexo"
                htmlFor="sexo"
                label="Sexo"
                placeholder="Digite o seu sexo"
                className="form-control"
                value={values.sexo}
                erro={(errors.sexo && touched.sexo) && (
                  <MensagemErro
                    color='danger'
                    mensagem={errors.sexo}
                  />
                )}
                lista={sexo_lista}
              />
            </ColEstilizado>
            <ColEstilizado md={4}>
              <CampoFormulario
                type="date"
                name="data_nascimento"
                id="data_nascimento"
                htmlFor="data_nascimento"
                label="Data de nascimento"
                placeholder="Digite a sua data de nascimento"
                className="form-control"
                value={values.data_nascimento}
                erro={(errors.data_nascimento && touched.data_nascimento) && (
                  <MensagemErro
                    color='danger'
                    mensagem={errors.data_nascimento}
                  />
                )}
              />
            </ColEstilizado>
            <ColEstilizado md={4}>
              <CampoFormulario
                type="number"
                name="celular"
                id="celular"
                htmlFor="celular"
                label="Celular"
                className="form-control"
                placeholder="Digite o seu celular"
                value={values.celular}
                erro={(errors.celular && touched.celular) && (
                  <MensagemErro
                    color='danger'
                    mensagem={errors.celular}
                  />
                )}
              />
            </ColEstilizado>
            <ColEstilizado md={4}>
              <CampoFormulario
                type="text"
                name="pais"
                id="pais"
                htmlFor="pais"
                label="Pais"
                placeholder="Digite o seu pais"
                className="form-control"
                value={values.pais}
                erro={(errors.pais && touched.pais) && (
                  <MensagemErro
                    color='danger'
                    mensagem={errors.pais}
                  />
                )}
              />
            </ColEstilizado>
            <ColEstilizado md={4}>
              <CampoFormulario
                type="text"
                name="cidade"
                id="cidade"
                htmlFor="cidade"
                label="Cidade"
                placeholder="Digite o seu cidade"
                className="form-control"
                value={values.cidade}
                erro={(errors.cidade && touched.cidade) && (
                  <MensagemErro
                    color='danger'
                    mensagem={errors.cidade}
                  />
                )}
              />
            </ColEstilizado>
            <ColEstilizado md={4}>
              <CampoSelectFormulario
                id="estado"
                htmlFor="estado"
                label="Estado"
                placeholder="Digite o seu estado"
                className="form-control"
                value={values.estado}
                erro={(errors.estado && touched.estado) && (
                  <MensagemErro
                    color='danger'
                    mensagem={errors.estado}
                  />
                )}
                lista={estado_lista}
              />
            </ColEstilizado>
            <ColEstilizado md={12}>
              <CampoTextAreaFormulario
                name="resumo"
                id="resumo"
                htmlFor="resumo"
                label="Resumo"
                placeholder="Digite o seu resumo"
                className="form-control"
                value={values.resumo}
                erro={(errors.resumo && touched.resumo) && (
                  <MensagemErro
                    color='danger'
                    mensagem={errors.resumo}
                  />
                )}
              />
            </ColEstilizado>
            <ColEstilizado md={12}>
              <CampoFormulario
                type="text"
                name="url_personalizado"
                id="url_personalizado"
                htmlFor="url_personalizado"
                label="URL personalizado"
                placeholder="Digite a sua URL personalizada"
                className="form-control"
                value={values.url_personalizado}
                erro={(errors.url_personalizado && touched.url_personalizado) && (
                  <MensagemErro
                    color='danger'
                    mensagem={errors.url_personalizado}
                  />
                )}
              />
            </ColEstilizado>
            <Col md={12}>
              <Separador />
            </Col>
            <ContainerBotoes md={12}>
              <Botao
                color="primary"
                label_button="Salvar"
                type="submit"
                style={{ marginRight: 10 }}
              />
              <BotaoEstilizado
                label_button={'Cancelar'}
                color="danger"
                type="button"
                onClick={props.onClickCancelar}
              />
            </ContainerBotoes>
          </Row>
        </FormEstilizado>
      )}
    </Formik>
  );
}

const FormEstilizado = styled(Form)`
  margin-left: 5px;
  margin-right: 5px;
`;

const BotaoEstilizado = styled(Botao)`
  width: 100px;
`;

const ColEstilizado = styled(Col)`
  margin-top: 4px;
`;
