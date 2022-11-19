function calcular_média_ponderada(){
  let nota_1 = Number(window.prompt('Insira a primeira nota: '));
  let nota_2 = Number(window.prompt('Insira a segunda nota: '));
  let nota_3 = Number(window.prompt('Insira a terceira nota: '));
  let média_final = (nota_1 * 2 + nota_2 * 3 + nota_3 * 5) / 10;
  window.alert(`A média final é igual a: ${média_final}`);
}

calcular_média_ponderada();

