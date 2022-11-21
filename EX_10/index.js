function verificarQualificaçãoParaAposentadoria() {
  let nomeDoEmpregdo = window.prompt('Insira o nome do empregado:');
  let dataNascimento = Number(window.prompt('Insira o ano de seu nascimento: '));
  let dataIngressoNaEmpresa = 
  Number(window.prompt('Insira o ano de seu ingresso na empresa:'));
  let tempoDeTrabalho = 2022 - dataIngressoNaEmpresa;

  if(2022 - dataNascimento >= 65) {
    window.alert('Requerer aposentadoria');
    exit;
  } 
  if(tempoDeTrabalho >= 30) {
    window.alert('Requerer aposentadoria');
    exit;
  }
  if(2022 - dataNascimento >= 60 && tempoDeTrabalho >= 25){
    window.alert('Requerer aposentadoria');
    exit;
  }
  window.alert('Não requerer');
}
verificarQualificaçãoParaAposentadoria();

