function calcularPagamento() {
  const precoEtiqueta = parseFloat(document.getElementById('precoEtiqueta').value);
  let condicaoPagamento = '';
  if (document.getElementById('avistaDinheiro').checked) {
      condicaoPagamento = 'a';
  } else if (document.getElementById('avistaCartao').checked) {
      condicaoPagamento = 'b';
  } else if (document.getElementById('duasVezesNormal').checked) {
      condicaoPagamento = 'c';
  } else if (document.getElementById('duasVezesJuros').checked) {
      condicaoPagamento = 'd';
  } else {
      document.getElementById('resultado').innerText = 'Condição de pagamento não selecionada!';
      return;
  }

  let precoFinal = 0;

  if (condicaoPagamento === 'a') {
      precoFinal = precoEtiqueta * 0.9; 
  } else if (condicaoPagamento === 'b') {
      precoFinal = precoEtiqueta * 0.85;
  } else if (condicaoPagamento === 'c') {
      precoFinal = precoEtiqueta; 
  } else if (condicaoPagamento === 'd') {
      precoFinal = precoEtiqueta * 1.1; 
  }

  document.getElementById('resultado').innerText = `Valor a ser pago: R$ ${precoFinal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
}