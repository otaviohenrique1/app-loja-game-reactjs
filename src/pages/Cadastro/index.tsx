import { Container } from "reactstrap";
import { Titulo } from "../../components/Titulo";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CampoFormulario, CampoSelectFormulario, CampoTextAreaFormulario, Separador } from "../../components/Campo";
import { Botao, BotaoLink, ContainerBotoes } from "../../components/Botao";
import { MensagemErro } from "../../components/Mensagem";
import { MensagemErroCampoVazio } from "../../utils/utils";
import { estado_lista, sexo_lista } from "../../utils/listas";

interface FormValues {
  nome: string;
  perfil: string;
  email: string;
  senha: string;
  sexo: string;
  data_nascimento: Date;
  pais: string;
  cidade: string;
  estado: string;
  resumo: string;
  celular: string;
  url_personalizado: string;
}

const InitialValues: FormValues = {
  nome: '',
  perfil: '',
  email: '',
  senha: '',
  sexo: '',
  data_nascimento: new Date(`${new Date().getDate()} / ${new Date().getMonth() + 1} / ${new Date().getFullYear()}`),
  pais: '',
  cidade: '',
  estado: '',
  resumo: '',
  celular: '',
  url_personalizado: ''
};

const ValidationSchema = Yup.object().shape({
  nome: Yup.string().required(MensagemErroCampoVazio('nome')),
  perfil: Yup.string().required(MensagemErroCampoVazio('perfil')),
  email: Yup.string().email('Email não valido').required(MensagemErroCampoVazio('email')),
  senha: Yup.string().min(8, 'Minimo de 8 caracteres').max(32, 'Maximo de 32 caracteres').required(MensagemErroCampoVazio('senha')),
  sexo: Yup.string().required(MensagemErroCampoVazio('sexo')),
  data_nascimento: Yup.date().required(MensagemErroCampoVazio('data de nascimento')),
  pais: Yup.string().required(MensagemErroCampoVazio('pais')),
  cidade: Yup.string().required(MensagemErroCampoVazio('cidade')),
  estado: Yup.string().required(MensagemErroCampoVazio('estado')),
  resumo: Yup.string().required(MensagemErroCampoVazio('resumo')),
  celular: Yup.string().required(MensagemErroCampoVazio('celular')),
  url_personalizado: Yup.string().required(MensagemErroCampoVazio('url personalizado'))
});

export function Cadastro() {
  function handleSubmitForm(values: FormValues) {
    // 
  }

  return (
    <ContainerCadastro>
      <Titulo titulo='Login' />
      <Formik
        initialValues={InitialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmitForm}
      >
        {({ errors, touched }) => (
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
                placeholder="Digite o seu celular"
                className="form-control"
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
                labelButton="Entrar"
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
                color="success"
                labelButton="Novo"
                type="button"
                rota="/cadastro/usuario"
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
  width: auto;
`;