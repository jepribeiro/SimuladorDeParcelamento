//Simulador de parcelamento com entrada e sem juros por parcela

function simuladorParcelamento() {
  let precoProduto = parseFloat(prompt("Qual é o valor do produto?"));
  while (precoProduto <= 0) {
    precoProduto = parseFloat(
      prompt("Valor inválido. Qual é o valor do produto?")
    );
  }
  let entrada = parseFloat(prompt("Qual é o valor da entrada?"));
  let quantidadeParcelas = parseInt(prompt("Qual é a quantidade de parcelas?"));

  while (quantidadeParcelas < 0) {
    quantidadeParcelas = parseInt(
      prompt("Número de parcelas inválido. Qual é a quantidade de parcelas?")
    );
  }

  if (entrada != 0 && entrada > 0) {
    let valorProdutoComEntrada = precoProduto - entrada;
    let valorPorFatura = valorProdutoComEntrada / quantidadeParcelas;
    alert(
      `O valor da entrada é de R$ ${entrada} , o valor dividido nas faturas será R$ ${valorProdutoComEntrada} em ${quantidadeParcelas} parcelas de R$ ${valorPorFatura.toFixed(
        2
      )} . `
    );
  } else {
    let valorPorFatura = precoProduto / quantidadeParcelas;
    alert(
      `O valor do produto de R$ ${precoProduto}, será dividido em ${quantidadeParcelas} parcelas de R$ ${valorPorFaturato.Fixed(
        2
      )} . `
    );
  }
}
simuladorParcelamento();
