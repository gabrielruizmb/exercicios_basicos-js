function exibirMaiorValor() {
  let primeiroValor = Number(window.prompt('Insira um valor:'));
  let segundoValor = Number(window.prompt('Insira um valor:'));
  
  if(primeiroValor > segundoValor) {
    window.alert(primeiroValor);
  }
  if(primeiroValor < segundoValor) {
    window.alert(segundoValor);
  }
}
exibirMaiorValor();

