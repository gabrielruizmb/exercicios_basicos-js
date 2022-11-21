function positivoOuNegativo() {
  let valor = Number(window.prompt('Insira um número: '));
  let mensagem = (valor < 0) ? 'negativo' : 'positivo';
  window.alert(mensagem);
}

positivoOuNegativo();

