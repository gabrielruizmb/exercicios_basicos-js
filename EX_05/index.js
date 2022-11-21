function maiorOuMenorQueCem(){
  let valor = Number(window.prompt('Insira um valor: '));
  let mensagem = (valor > 100) ? 'É MAIOR QUE 100!' : 'NÃO É MAIOR QUE 100!';
  window.alert(mensagem);
}

maiorOuMenorQueCem();

