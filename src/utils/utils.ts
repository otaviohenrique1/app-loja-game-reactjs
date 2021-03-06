export function MensagemErroCampoVazio(campo: string) {
  return MensagemErro(`Campo ${campo} esta vazio`);
}

export function MensagemErro(mensagem: string) {
  return mensagem;
}

export function ajustaPreco(valor: number): string {
  return valor.toFixed(2).replace('.', ',');
}

export function aplicaDesconto(valorDesconto: number, preco: number): string {
  let resultado = preco - ((preco * valorDesconto) / 100);
  return ajustaPreco(resultado);
}

/**
 * Formata data -> dia/mes/ano
 */
export function formataData(data: Date): string {
  let dia = data.getDate().toString().padStart(2, '0');
  let mes = (data.getMonth() + 1).toString().padStart(2, '0');
  let ano = data.getFullYear();
  let dataFormatada = `${dia}/${mes}/${ano}`;
  return dataFormatada;
}

/**
 * Formata data -> ano-mes-dia
 */
export function formataData2(data: Date): string {
  let dia = data.getDate().toString().padStart(2, '0');
  let mes = (data.getMonth() + 1).toString().padStart(2, '0');
  let ano = data.getFullYear();
  let dataFormatada = `${ano}-${mes}-${dia}`;
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

export function formataData3(data: Date): string {
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
