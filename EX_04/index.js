function calcularCustoCarroNovo() {
  let custoFábrica = Number(window.prompt('Insira o custo de fábrica do carro: '));
  let porcentagemRevendedor = 28, porcentagemImpostos = 45;
  let custoFinal = custoFábrica + 
  (porcentagemRevendedor + porcentagemImpostos) * custoFábrica / 100;
  window.alert(`O custo final do carro é igual a: ${custoFinal}`);
}

calcularCustoCarroNovo();

