function calcularPreçoDasMaçãs() {
  let maçãsCompradas = 
  Number(window.prompt('Insira a quantidade de maçãs que deseja comprar: '));
  let valorTotal = 0;
  if(maçãsCompradas < 12) {
    valorTotal = maçãsCompradas * 1.30;
  }
  if(maçãsCompradas >= 12) {
    valorTotal = maçãsCompradas;
  }
  window.alert(`O custo total da compra é: 
  ${valorTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
}

calcularPreçoDasMaçãs();

