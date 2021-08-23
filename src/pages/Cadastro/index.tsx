import { Container } from "reactstrap";
import { Titulo } from "../../components/Titulo";
import styled from "styled-components";
import { Formik, Form, FormikHelpers } from "formik";
import { CampoFormulario, CampoSelectFormulario, CampoTextAreaFormulario, Separador } from "../../components/Campo";
import { Botao, BotaoLink, ContainerBotoes } from "../../components/Botao";
import { MensagemErro } from "../../components/Mensagem";
import { estado_lista, sexo_lista } from "../../utils/listas";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { FormValuesCadastroUsuario, InitialValuesCadastroUsuario, ValidationSchemaCadastroUsuario } from "../../utils/types";
import { formataData } from "../../utils/utils";

export function Cadastro() {
  const history = useHistory();

  async function handleSubmitForm(values: FormValuesCadastroUsuario, actions: FormikHelpers<FormValuesCadastroUsuario>) {
    await api.post('usuarios', {
      'nome': (values.nome).toString(),
      'perfil': (values.perfil).toString(),
      'resumo': (values.resumo).toString(),
      'url_personalizado': (values.url_personalizado).toString(),
      'sexo': (values.sexo).toString(),
      'data_nascimento': formataData(new Date(values.data_nascimento)),
      // 'data_nascimento': (values.data_nascimento).toString(),
      'email': (values.email).toString(),
      'senha': ((values.senha).toString()),
      'celular': (values.celular).toString(),
      'pais': (values.pais).toString(),
      'cidade': (values.cidade).toString(),
      'estado': (values.estado).toString(),
      'data_cadastro': formataData(new Date()),
      // 'data_cadastro': (new Date()).toString(),
    })
    .then(() => {
      alert('Cadastro realizado com sucesso!');
      history.push('/');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <ContainerCadastro>
      <Titulo titulo='Cadastro' />
      <Formik
        initialValues={InitialValuesCadastroUsuario}
        validationSchema={ValidationSchemaCadastroUsuario}
        onSubmit={handleSubmitForm}
      >
        {({ errors, touched, values }) => (
          <FormularioEstilizado>
            <CampoFormularioEstilizado>
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
            </CampoFormularioEstilizado>
            <CampoFormularioEstilizado>
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
            </CampoFormularioEstilizado>
            <CampoFormularioEstilizado>
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
            </CampoFormularioEstilizado>
            <CampoFormularioEstilizado>
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
            </CampoFormularioEstilizado>
            <CampoFormularioEstilizado>
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
            </CampoFormularioEstilizado>
            <CampoFormularioEstilizado>
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
            </CampoFormularioEstilizado>
            <CampoFormularioEstilizado>
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
            </CampoFormularioEstilizado>
            <CampoFormularioEstilizado>
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
            </CampoFormularioEstilizado>
            <CampoFormularioEstilizado>
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
            </CampoFormularioEstilizado>
            <CampoFormularioEstilizado>
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
            </CampoFormularioEstilizado>
            <CampoFormularioEstilizado>
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
            </CampoFormularioEstilizado>
            <CampoFormularioEstilizado>
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
            </CampoFormularioEstilizado>
            <Separador />
            <ContainerBotoesEstilizado>
              <Botao
                color="primary"
                labelButton="Salvar"
                type="submit"
              />
              <BotaoEstilizado>
                <Botao
                  color="danger"
                  labelButton="Limpar"
                  type="reset"
                />
              </BotaoEstilizado>
              <BotaoLink
                color="info"
                labelButton="Voltar"
                type="button"
                rota="/"
              />
            </ContainerBotoesEstilizado>
          </FormularioEstilizado>
        )}
      </Formik>
    </ContainerCadastro>
  );
}

const CampoFormularioEstilizado = styled.div`
  margin-bottom: 20px;
`;

const BotaoEstilizado = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

const FormularioEstilizado = styled(Form)`
  width: 300px;
`;

const ContainerBotoesEstilizado = styled(ContainerBotoes)`
  margin-top: 30px;
`;

const ContainerCadastro = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 5%;
  position: relative;
  width: 400px;
  background-color: lightblue;
  padding: 2%;
  border-radius: 10px;
`;