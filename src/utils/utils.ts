export function MensagemErroCampoVazio(campo: string) {
  return MensagemErro(`Campo ${campo} esta vazio`);
}

export function MensagemErro(mensagem: string) {
  return mensagem;
}

export function formataData(data: Date): String {
  let dia = data.getDate().toString().padStart(2, '0');
  let mes = (data.getMonth() + 1).toString().padStart(2, '0');
  let ano = data.getFullYear();
  let dataFormatada = `${dia}/${mes}/${ano}`;
  return dataFormatada;
}

export function dataAtualFormatada(){
  var data = new Date(),
      dia  = data.getDate().toString().padStart(2, '0'),
      mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
      ano  = data.getFullYear();
  return dia+"/"+mes+"/"+ano;
}

export function dataFormatada(data: Date) : string{
  let dia  = data.getDate().toString().padStart(2, '0');
  let mes  = (data.getMonth()+1).toString().padStart(2, '0'); //+1 pois no getMonth Janeiro começa com zero.
  let ano  = data.getFullYear();
  return dia+"/"+mes+"/"+ano;
}

export function formataData2(data: Date): String {
  let dia = data.getDate();
  let ano = data.getFullYear();
  let mes = data.getMonth() + 1
  let dataFormatada = `${dia}/${(mes > 10) ? `0${mes}` : `${mes}`}/${ano}`;
  return dataFormatada;
}

export function dataPadrao(): string {
  const dia = new Date().getDate();
  const mes = new Date().getMonth() + 1;
  const ano = new Date().getFullYear();
  const dataPadrao = `${ano}-${mes}-${dia}`;
  return dataPadrao;
}
