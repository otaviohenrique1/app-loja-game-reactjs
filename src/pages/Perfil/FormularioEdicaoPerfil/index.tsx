import { ContainerApp } from "../../../components/ContainerApp";
import { Titulo } from "../../../components/Titulo";
import { FormikHelpers } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import api from "../../../services/api";
import { DataPerfil2, dataPerfilInitialData2, FormValuesCadastroUsuario, ValidationSchemaCadastroUsuario } from "../../../utils/types";
import { Form, Formik } from "formik";
import { Col, Row } from "reactstrap";
import { Botao, BotaoLink } from "../../../components/Botao";
import { CampoFormulario, CampoSelectFormulario, CampoTextAreaFormulario, Separador } from "../../../components/Campo";
import { MensagemErro } from "../../../components/Mensagem";
import { sexo_lista, estado_lista } from "../../../utils/listas";
import { formataData2 } from "../../../utils/utils";

const TituloEstilizado = styled(Titulo)`
  margin-bottom: 50px;
`;

const ContainerBotoes = styled(Col)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
`;

interface ParamsDataProps {
  id: string;
}

export function FormularioEdicaoPerfil() {
  const [data, setData] = useState<DataPerfil2>(dataPerfilInitialData2);
  const { id } = useParams<ParamsDataProps>();
  const history = useHistory();

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
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  async function handleSubmitForm(values: FormValuesCadastroUsuario, actions: FormikHelpers<FormValuesCadastroUsuario>) {
    // let data1: FormValuesCadastroUsuario = {
    //   nome: (values.nome).toString(),
    //   perfil: (values.perfil).toString(),
    //   resumo: (values.resumo).toString(),
    //   url_personalizado: (values.url_personalizado).toString(),
    //   sexo: (values.sexo).toString(),
    //   data_nascimento: formataData2(new Date(values.data_nascimento)),
    //   email: (values.email).toString(),
    //   senha: ((values.senha).toString()),
    //   celular: (values.celular).toString(),
    //   pais: (values.pais).toString(),
    //   cidade: (values.cidade).toString(),
    //   estado: (values.estado).toString()
    // };

    // console.log(data1);

    await api.put(`usuarios/${id}`, {
      'id': id,
      'nome': (values.nome).toString(),
      'perfil': (values.perfil).toString(),
      'resumo': (values.resumo).toString(),
      'url_personalizado': (values.url_personalizado).toString(),
      'sexo': (values.sexo).toString(),
      'data_nascimento': formataData2(new Date(values.data_nascimento)),
      'email': (values.email).toString(),
      'senha': ((values.senha).toString()),
      'celular': (values.celular).toString(),
      'pais': (values.pais).toString(),
      'cidade': (values.cidade).toString(),
      'estado': (values.estado).toString(),
    })
    .then(() => {
      alert('Cadastro alterado com sucesso!');
      history.push(`/perfil/${id}`);
    })
    .catch((error) => {
      console.log(error);
    });

    /*
    await api.put(`usuarios/edicao/${id}`, {
      'id': id,
      'nome': (values.nome).toString(),
      'perfil': (values.perfil).toString(),
      'resumo': (values.resumo).toString(),
      'url_personalizado': (values.url_personalizado).toString(),
      'sexo': (values.sexo).toString(),
      'data_nascimento': formataData2(new Date(values.data_nascimento)),
      'email': (values.email).toString(),
      'senha': ((values.senha).toString()),
      'celular': (values.celular).toString(),
      'pais': (values.pais).toString(),
      'cidade': (values.cidade).toString(),
      'estado': (values.estado).toString(),
    })
    .then(() => {
      alert('Cadastro alterado com sucesso!');
      history.push(`/perfil/${id}`);
    })
    .catch((error) => {
      console.log(error);
    });
    */

    /*
    await api.put(`usuarios/${id}`, {
      'nome': (values.nome).toString(),
      'perfil': (values.perfil).toString(),
      'resumo': (values.resumo).toString(),
      'url_personalizado': (values.url_personalizado).toString(),
      'sexo': (values.sexo).toString(),
      'data_nascimento': (values.data_nascimento).toString(),
      'email': (values.email).toString(),
      'senha': ((values.senha).toString()),
      'celular': (values.celular).toString(),
      'pais': (values.pais).toString(),
      'cidade': (values.cidade).toString(),
      'estado': (values.estado).toString(),
    })
    .then(() => {
      alert('Cadastro realizado com sucesso!');
      setModoEdicaoFormulario(!modoEdicaoFormulario);
    })
    .catch((error) => {
      console.log(error);
    });
    */
  }

  const InitialValuesCadastroUsuario: FormValuesCadastroUsuario = {
    nome: '' || data.nome,
    perfil: '' || data.perfil,
    email: '' || data.email,
    senha: '' || data.senha,
    sexo: '' || data.sexo,
    data_nascimento: '' || formataData2(new Date(data.data_nascimento)),
    pais: '' || data.pais,
    cidade: '' || data.cidade,
    estado: '' || data.estado,
    resumo: '' || data.resumo,
    celular: '' || data.celular,
    url_personalizado: '' || data.url_personalizado
  };

  return (
    <ContainerApp>
      <TituloEstilizado titulo={'Perfil'}/>
      <Formik
        initialValues={InitialValuesCadastroUsuario}
        validationSchema={ValidationSchemaCadastroUsuario}
        onSubmit={handleSubmitForm}
        enableReinitialize={true} // Para o formulario de edicao dos dados do perfil
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
                <BotaoEstilizado
                  color="primary"
                  label_button="Salvar"
                  type="submit"
                  style={{ marginRight: 10 }}
                />
                <BotaoLinkEstilizado
                  rota={`/perfil/${id}`}
                  label_button={'Cancelar'}
                  color="danger"
                  type="button"
                />
              </ContainerBotoes>
            </Row>
          </FormEstilizado>
        )}
      </Formik>
    </ContainerApp>
  );
}

const FormEstilizado = styled(Form)`
  margin-left: 5px;
  margin-right: 5px;
`;

const BotaoEstilizado = styled(Botao)`
  width: 100px;
`;

const BotaoLinkEstilizado = styled(BotaoLink)`
  width: 100px;
`;

const ColEstilizado = styled(Col)`
  margin-top: 4px;
`;
