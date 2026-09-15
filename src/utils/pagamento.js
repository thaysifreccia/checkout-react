export function temTodosDigitosIguais(numeroCartao) {
  const primeiro = numeroCartao[0];

  return numeroCartao.split("").every((digito) => digito === primeiro);
}
