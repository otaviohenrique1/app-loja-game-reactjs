import { Container } from "reactstrap";
import { Titulo } from "../../components/Titulo";
import styled from "styled-components";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { CampoFormulario, Separador } from "../../components/Campo";
import { Botao, BotaoLink, ContainerBotoes } from "../../components/Botao";
import { MensagemErro } from "../../components/Mensagem";
import { MensagemErroCampoVazio } from "../../utils/utils";
import { useHistory } from "react-router-dom";

interface FormValues {
  email: string;
  senha: string;
}

const InitialValues: FormValues = {
  email: '',
  senha: ''
};

const ValidationSchema = Yup.object().shape({
  email: Yup
    .string()
    .email('Email não valido')
    .required(MensagemErroCampoVazio('email')),
  senha: Yup
    .string()
    .min(8, 'Minimo de 8 caracteres')
    .max(32, 'Maximo de 32 caracteres')
    .required(MensagemErroCampoVazio('senha')),
});

export function Login() {
  const history = useHistory();
  
  function handleSubmitForm(values: FormValues, actions: FormikHelpers<FormValues>) {
    let data: FormValues = {
      email: values.email,
      senha: values.senha
    };
    console.log(data);
    actions.setSubmitting(false);
    actions.resetForm({
      values: {
        email: '',
        senha: ''
      }
    });
    history.push('/dashboard');
  }

  return (
    <ContainerLogin>
      <Titulo titulo='Login' />
      <Formik
        initialValues={InitialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmitForm}
      >
        {({ errors, touched, values }) => (
          <FormularioEstilizado>
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
    </ContainerLogin>
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

const ContainerLogin = styled(Container)`
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