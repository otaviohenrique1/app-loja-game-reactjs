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
