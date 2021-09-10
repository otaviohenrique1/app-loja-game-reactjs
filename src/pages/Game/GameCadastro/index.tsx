import { ContainerApp } from "../../../components/ContainerApp";
import { Titulo } from "../../../components/Titulo";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Col, Row } from "reactstrap";
import { MensagemErroCampoVazio } from "../../../utils/utils";
import { CampoFormulario, CampoSelectFormulario, CampoTextAreaFormulario, Separador } from "../../../components/Campo";
import { MensagemErro } from "../../../components/Mensagem";
import styled from "styled-components";
import { Botao, BotaoLink, ContainerBotoes } from "../../../components/Botao";

interface GameFormTypes {
  nome: string;
  genero: string;
  desenvolvedor: string;
  distribuidora: string;
  data_de_lancamento: string;
  // data_de_lancamento: Date;
  classificacao: string;
  serie: string;
  sinopse: string;
  descricao: string;
  preco: string;
  // preco: number;
  plataforma: string;
  idiomas_dublagem: string;
  idiomas_legendas: string;
  idiomas_interface: string;
  modo_de_jogo: string;
  game_capa: string;
  game_galeria: string;
  game_extras: string;
}

const initialValuesGame: GameFormTypes = {
  nome: '',
  genero: '',
  desenvolvedor: '',
  distribuidora: '',
  data_de_lancamento: '',
  classificacao: '',
  serie: '',
  sinopse: '',
  descricao: '',
  preco: '',
  plataforma: '',
  idiomas_dublagem: '',
  idiomas_legendas: '',
  idiomas_interface: '',
  modo_de_jogo: '',
  game_capa: '',
  game_galeria: '',
  game_extras: '',
};

const validationSchemaGame = Yup.object().shape({
  nome: Yup.string().required(MensagemErroCampoVazio('nome')),
  genero: Yup.string().required(MensagemErroCampoVazio('genero')),
  desenvolvedor: Yup.string().required(MensagemErroCampoVazio('desenvolvedor')),
  distribuidora: Yup.string().required(MensagemErroCampoVazio('distribuidora')),
  data_de_lancamento: Yup.string().required(MensagemErroCampoVazio('data de lançamento')),
  classificacao: Yup.string().required(MensagemErroCampoVazio('classificacao')),
  serie: Yup.string().required(MensagemErroCampoVazio('serie')),
  sinopse: Yup.string().required(MensagemErroCampoVazio('sinopse')),
  descricao: Yup.string().required(MensagemErroCampoVazio('descricao')),
  preco: Yup.string().required(MensagemErroCampoVazio('preco')),
  plataforma: Yup.string().required(MensagemErroCampoVazio('plataforma')),
  idiomas_dublagem: Yup.string().required(MensagemErroCampoVazio('idiomas da dublagem')),
  idiomas_legendas: Yup.string().required(MensagemErroCampoVazio('idiomas das legendas')),
  idiomas_interface: Yup.string().required(MensagemErroCampoVazio('idiomas da interface')),
  modo_de_jogo: Yup.string().required(MensagemErroCampoVazio('modos de jogo')),
  game_capa: Yup.string().required(MensagemErroCampoVazio('game capa')),
  game_galeria: Yup.string().required(MensagemErroCampoVazio('game galeria')),
  game_extras: Yup.string().required(MensagemErroCampoVazio('game extras')),
});

export function GameCadastro() {
  function handleSubmitForm(values: GameFormTypes) {
    // 
  }
  
  return (
    <ContainerApp>
      <Titulo titulo="Cadastro de Games"/>
      <Row>
        <Col md={12}>
          <Formik
            initialValues={initialValuesGame}
            validationSchema={validationSchemaGame}
            onSubmit={handleSubmitForm}
          >
            {({errors, touched, values}) => (
              <Form>
                <CampoFormulario
                  type="text"
                  name="nome"
                  id="nome"
                  htmlFor="nome"
                  label="Nome"
                  placeholder="Digite o nome do game"
                  className="form-control"
                  value={values.nome}
                  erro={(errors.nome && touched.nome) && (
                    <MensagemErro
                      color='danger'
                      mensagem={errors.nome}
                    />
                  )}
                />
                <CampoSelectFormulario
                  id="genero"
                  htmlFor="genero"
                  label="Genero"
                  className="form-control"
                  value={values.genero}
                  erro={(errors.genero && touched.genero) && (
                    <MensagemErro
                      color='danger'
                      mensagem={errors.genero}
                    />
                  )}
                  lista={[]}
                />
                <CampoFormulario
                  type="text"
                  name="desenvolvedor"
                  id="desenvolvedor"
                  htmlFor="desenvolvedor"
                  label="Desenvolvedor"
                  placeholder="Digite o nome do desenvolvedor"
                  className="form-control"
                  value={values.desenvolvedor}
                  erro={(errors.desenvolvedor && touched.desenvolvedor) && (
                    <MensagemErro
                      color='danger'
                      mensagem={errors.desenvolvedor}
                    />
                  )}
                />
                <CampoFormulario
                  type="text"
                  name="distribuidora"
                  id="distribuidora"
                  htmlFor="distribuidora"
                  label="Distribuidora"
                  placeholder="Digite o nome da distribuidora"
                  className="form-control"
                  value={values.distribuidora}
                  erro={(errors.distribuidora && touched.distribuidora) && (
                    <MensagemErro
                      color='danger'
                      mensagem={errors.distribuidora}
                    />
                  )}
                />
                <CampoFormulario
                  type="date"
                  name="Data de lançamento"
                  id="data_de_lancamento"
                  htmlFor="data_de_lancamento"
                  label="data_de_lancamento"
                  placeholder="Digite a data de lançamento"
                  className="form-control"
                  value={values.data_de_lancamento}
                  erro={(errors.data_de_lancamento && touched.data_de_lancamento) && (
                    <MensagemErro
                      color='danger'
                      mensagem={errors.data_de_lancamento}
                    />
                  )}
                />
                <CampoFormulario
                  type="text"
                  name="classificacao"
                  id="classificacao"
                  htmlFor="classificacao"
                  label="Classificação"
                  placeholder="Digite a classificação etaria"
                  className="form-control"
                  value={values.classificacao}
                  erro={(errors.classificacao && touched.classificacao) && (
                    <MensagemErro
                      color='danger'
                      mensagem={errors.classificacao}
                    />
                  )}
                />
                <CampoFormulario
                  type="text"
                  name="serie"
                  id="serie"
                  htmlFor="serie"
                  label="Série"
                  placeholder="Digite a serie que o game pertence"
                  className="form-control"
                  value={values.serie}
                  erro={(errors.serie && touched.serie) && (
                    <MensagemErro
                      color='danger'
                      mensagem={errors.serie}
                    />
                  )}
                />
                <CampoTextAreaFormulario
                  name="sinopse"
                  id="sinopse"
                  htmlFor="sinopse"
                  label="Sinopse"
                  placeholder="Digite a sinopse"
                  className="form-control"
                  value={values.sinopse}
                  erro={(errors.sinopse && touched.sinopse) && (
                    <MensagemErro
                      color='danger'
                      mensagem={errors.sinopse}
                    />
                  )}
                />
                <CampoTextAreaFormulario
                  name="descricao"
                  id="descricao"
                  htmlFor="descricao"
                  label="Descrição"
                  placeholder="Digite a descrição"
                  className="form-control"
                  value={values.descricao}
                  erro={(errors.descricao && touched.descricao) && (
                    <MensagemErro
                      color='danger'
                      mensagem={errors.descricao}
                    />
                  )}
                />
                <CampoFormulario
                  type="number"
                  name="preco"
                  id="preco"
                  htmlFor="preco"
                  label="Preço"
                  placeholder="Digite o preço"
                  className="form-control"
                  value={values.preco}
                  erro={(errors.preco && touched.preco) && (
                    <MensagemErro
                      color='danger'
                      mensagem={errors.preco}
                    />
                  )}
                />
                <CampoFormulario
                  type="text"
                  name="plataforma"
                  id="plataforma"
                  htmlFor="plataforma"
                  label="Plataforma"
                  placeholder="Digite as plataformas"
                  className="form-control"
                  value={values.plataforma}
                  erro={(errors.plataforma && touched.plataforma) && (
                    <MensagemErro
                      color='danger'
                      mensagem={errors.plataforma}
                    />
                  )}
                />
                <CampoFormulario
                  type="text"
                  name="idiomas_dublagem"
                  id="idiomas_dublagem"
                  htmlFor="idiomas_dublagem"
                  label="Idiomas das dublagens"
                  placeholder="Digite os idiomas das dublagems"
                  className="form-control"
                  value={values.idiomas_dublagem}
                  erro={(errors.idiomas_dublagem && touched.idiomas_dublagem) && (
                    <MensagemErro
                      color='danger'
                      mensagem={errors.idiomas_dublagem}
                    />
                  )}
                />
                <CampoFormulario
                  type="text"
                  name="idiomas_legendas"
                  id="idiomas_legendas"
                  htmlFor="idiomas_legendas"
                  label="Idiomas das legendas"
                  placeholder="Digite os idiomas das legendas"
                  className="form-control"
                  value={values.idiomas_legendas}
                  erro={(errors.idiomas_legendas && touched.idiomas_legendas) && (
                    <MensagemErro
                      color='danger'
                      mensagem={errors.idiomas_legendas}
                    />
                  )}
                />
                <CampoFormulario
                  type="text"
                  name="idiomas_interface"
                  id="idiomas_interface"
                  htmlFor="idiomas_interface"
                  label="Idiomas da interface"
                  placeholder="Digite os idiomas da interface"
                  className="form-control"
                  value={values.idiomas_interface}
                  erro={(errors.idiomas_interface && touched.idiomas_interface) && (
                    <MensagemErro
                      color='danger'
                      mensagem={errors.idiomas_interface}
                    />
                  )}
                />
                <CampoFormulario
                  type="text"
                  name="idiomas_interface"
                  id="idiomas_interface"
                  htmlFor="idiomas_interface"
                  label="Idiomas da interface"
                  placeholder="Digite os idiomas da interface"
                  className="form-control"
                  value={values.idiomas_interface}
                  erro={(errors.idiomas_interface && touched.idiomas_interface) && (
                    <MensagemErro
                      color='danger'
                      mensagem={errors.idiomas_interface}
                    />
                  )}
                />
                <CampoFormulario
                  type="text"
                  name="game_capa"
                  id="game_capa"
                  htmlFor="game_capa"
                  label="Capa do game"
                  placeholder="Digite a URL da imagem da capa do game"
                  className="form-control"
                  value={values.game_capa}
                  erro={(errors.game_capa && touched.game_capa) && (
                    <MensagemErro
                      color='danger'
                      mensagem={errors.game_capa}
                    />
                  )}
                />
                <CampoFormulario
                  type="text"
                  name="game_galeria"
                  id="game_galeria"
                  htmlFor="game_galeria"
                  label="Galeria de imagens do game"
                  placeholder="Digite a URL da imagem da capa do game"
                  className="form-control"
                  value={values.game_galeria}
                  erro={(errors.game_galeria && touched.game_galeria) && (
                    <MensagemErro
                      color='danger'
                      mensagem={errors.game_galeria}
                    />
                  )}
                />
                <CampoFormulario
                  type="text"
                  name="game_extras"
                  id="game_extras"
                  htmlFor="game_extras"
                  label="Extras do game"
                  placeholder="Digite os extras do game"
                  className="form-control"
                  value={values.game_extras}
                  erro={(errors.game_extras && touched.game_extras) && (
                    <MensagemErro
                      color='danger'
                      mensagem={errors.game_extras}
                    />
                  )}
                />
                <Separador />
                <ContainerBotoesEstilizado>
                  <Botao
                    color="primary"
                    label_button="Salvar"
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
                    color="info"
                    label_button="Voltar"
                    type="button"
                    rota="/"
                  />
                </ContainerBotoesEstilizado>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </ContainerApp>
  );
}

const BotaoEstilizado = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

const ContainerBotoesEstilizado = styled(ContainerBotoes)`
  margin-top: 30px;
`;