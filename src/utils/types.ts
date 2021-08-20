import { MensagemErroCampoVazio } from "./utils";
import * as Yup from "yup";

export interface LoginData {
  id: string;
  nome: string;
  perfil: string;
  email: string;
}

export interface DataPerfil {
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
  data_cadastro: Date;
}

const dia = new Date().getDate();
const mes = new Date().getMonth() + 1;
const ano = new Date().getFullYear();
export const dataPadrao1 = `${ano}-${mes}-${dia}`;
// export const dataPadrao2 = `${dia}/${mes}/${ano}`;

export const loginInitialData: LoginData = {
  id: '',
  nome: '',
  perfil: '',
  email: '',
};

export const dataPerfilInitialData: DataPerfil = {
  nome: '',
  perfil: '',
  email: '',
  senha: '',
  sexo:  '',
  data_nascimento: new Date(dataPadrao1),
  pais: '',
  cidade: '',
  estado: '',
  resumo: '',
  celular: '',
  url_personalizado: '',
  data_cadastro: new Date(dataPadrao1)
};

export interface FormValuesCadastroUsuario {
  nome: string;
  perfil: string;
  email: string;
  senha: string;
  sexo: string;
  data_nascimento: string;
  pais: string;
  cidade: string;
  estado: string;
  resumo: string;
  celular: string;
  url_personalizado: string;
}

export const InitialValuesCadastroUsuario: FormValuesCadastroUsuario = {
  nome: '',
  perfil: '',
  email: '',
  senha: '',
  sexo: '',
  data_nascimento: '',
  pais: '',
  cidade: '',
  estado: '',
  resumo: '',
  celular: '',
  url_personalizado: ''
};

export const ValidationSchemaCadastroUsuario = Yup.object().shape({
  nome: Yup.string().required(MensagemErroCampoVazio('nome')),
  perfil: Yup.string().required(MensagemErroCampoVazio('perfil')),
  email: Yup.string().email('Email não valido').required(MensagemErroCampoVazio('email')),
  senha: Yup.string().min(8, 'Minimo de 8 caracteres').max(32, 'Maximo de 32 caracteres').required(MensagemErroCampoVazio('senha')),
  sexo: Yup.string().required(MensagemErroCampoVazio('sexo')),
  data_nascimento: Yup.string().required(MensagemErroCampoVazio('data de nascimento')),
  // data_nascimento: Yup.date().required(MensagemErroCampoVazio('data de nascimento')),
  pais: Yup.string().required(MensagemErroCampoVazio('pais')),
  cidade: Yup.string().required(MensagemErroCampoVazio('cidade')),
  estado: Yup.string().required(MensagemErroCampoVazio('estado')),
  resumo: Yup.string().required(MensagemErroCampoVazio('resumo')),
  celular: Yup.string().required(MensagemErroCampoVazio('celular')),
  url_personalizado: Yup.string().required(MensagemErroCampoVazio('url personalizado'))
});
