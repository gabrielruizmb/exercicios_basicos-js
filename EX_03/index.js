function calcularMédiaPonderada(){
  let nota1 = Number(window.prompt('Insira a primeira nota: '));
  let nota2 = Number(window.prompt('Insira a segunda nota: '));
  let nota3 = Number(window.prompt('Insira a terceira nota: '));
  let médiaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;
  window.alert(`A média final é igual a: ${médiaFinal}`);
}

calcularMédiaPonderada();

