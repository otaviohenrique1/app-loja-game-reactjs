export function MensagemErroCampoVazio(campo: string) {
  return MensagemErro(`Campo ${campo} esta vazio`);
}

export function MensagemErro(mensagem: string) {
  return mensagem;
}
