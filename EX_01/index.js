function reajustar_salário(){
  let salário = Number(window.prompt('Insira o salário: '));
  let reajuste = Number(window.prompt('Insira o percentual de reajuste: '));
  salário += salário * reajuste / 100;
  window.alert(`O salário com reajuste é: ${salário}`);
}

reajustar_salário();

