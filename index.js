//Simulador de parcelamento com entrada e sem juros por parcela

function simuladorParcelamento() {
  let precoProduto = parseFloat(prompt("Qual o valor do produto?"));
  while (precoProduto <= 0) {
    precoProduto = parseFloat(
      prompt("Valor inválido. Qual o valor do produto?")
    );
  }
  let entrada = parseFloat(prompt("Qual será o valor da entrada?"));
  let quantidadeParcelas = parseInt(
    prompt("Qual a quantidade de parcelas desejas fazer?")
  );

  while (quantidadeParcelas < 0) {
    quantidadeParcelas = parseInt(
      prompt(
        "Número de parcelas inválido. Qual a quantidade de parcelas desejas fazer?"
      )
    );
  }

  if (entrada != 0 && entrada > 0) {
    let valorProdutoComEntrada = precoProduto - entrada;
    let valorPorFatura = valorProdutoComEntrada / quantidadeParcelas;
    alert(
      `O valor da entrada é de ${entrada}, o valor que será dividido nas faturas será de ${valorProdutoComEntrada} em ${quantidadeParcelas} parcelas de ${valorPorFatura.toFixed(
        2
      )} reais `
    );
  } else {
    let valorPorFatura = precoProduto / quantidadeParcelas;
    alert(
      `O valor do protudo de ${precoProduto},o valor que será em ${quantidadeParcelas} parcelas de ${valorPorFaturato.Fixed(
        2
      )} reais. `
    );
  }
}
simuladorParcelamento();
