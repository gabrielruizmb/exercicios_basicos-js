function exibirVencedorOuEmpate() {
  let nomeTime1 = window.prompt('Insira o nome do 1° time:');
  let golsTime1 = Number(window.prompt('Insira o número de gols do 1° time: '));
  let nomeTime2 = window.prompt('Insira o nome do 2° time:');
  let golsTime2 = Number(window.prompt('Insira o número de gols do 2° time:'));

  if(golsTime1 > golsTime2) {
    window.alert(`O vencedor é o ${nomeTime1}`);
  }
  if(golsTime1 < golsTime2) {
    window.alert(`O vencedor é o ${nomeTime2}`);
  }
  if(golsTime1 === golsTime2) {
    window.alert('EMPATE');
  }
}
exibirVencedorOuEmpate();

