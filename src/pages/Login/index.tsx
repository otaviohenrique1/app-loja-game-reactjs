import { Alert, Container } from "reactstrap";
import { Titulo } from "../../components/Titulo";
import styled from "styled-components";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { CampoFormulario, Separador } from "../../components/Campo";
import { Botao, BotaoLink, ContainerBotoes } from "../../components/Botao";
import { MensagemErro } from "../../components/Mensagem";
import { MensagemErroCampoVazio } from "../../utils/utils";
import { useHistory } from "react-router-dom";
import { adicionaLogin } from "../../features/login/LoginSlice";
import { useDispatch } from "react-redux";
import api from "../../services/api";
import { useState } from "react";

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
  const dispatch = useDispatch();
  const [mensagemErro, setMensagemErro] = useState<string>('');
  const [exibeMensagemErro, setExibeMensagemErro] = useState<boolean>(false);

  function handleSubmitForm(values: FormValues, actions: FormikHelpers<FormValues>) {
    api.post('usuarios/login', {
      email: values.email,
      senha: values.senha,
    }, {
      auth: {
        username: values.email,
        password: values.senha,
      }
    })
    .then((data) => {
      const id = data.data.data_user.id;
      const nome = data.data.data_user.nome;
      const perfil = data.data.data_user.perfil;
      const email = data.data.data_user.email;
      dispatch(adicionaLogin({
        id: id,
        nome: nome,
        perfil: perfil,
        email: email,
      }));
      sessionStorage.setItem('id', `${id}`);
      sessionStorage.setItem('nome', `${nome}`);
      sessionStorage.setItem('perfil', `${perfil}`);
      sessionStorage.setItem('email', `${email}`);
      history.push('/dashboard');
    })
    .catch((error) => {
      // alert('Usuario ou senha invalidos');
      setMensagemErro('Usuario ou senha invalidos');
      setExibeMensagemErro(!exibeMensagemErro);
      console.log(error);
    });
    // actions.setSubmitting(false);
    // actions.resetForm({
    //   values: {
    //     email: '',
    //     senha: ''
    //   }
    // });
  }

  return (
    <ContainerLogin>
      <Titulo titulo='Login' />
      {(exibeMensagemErro) ? (
        <MensagemErroLogin>
          <Alert color="danger" style={{ width: '300px' }}>
            {mensagemErro}
          </Alert>
        </MensagemErroLogin>
      ) : null}
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
                label_button="Entrar"
                type="submit"
              />
              <BotaoEstilizado>
                <Botao
                  color="danger"
                  label_button="Limpar"
                  type="reset"
                />
              </BotaoEstilizado>
              <BotaoLink
                color="success"
                label_button="Novo"
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

const MensagemErroLogin = styled.div`
  margin-top: '10px';
  margin-bottom: '10px';
`;

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