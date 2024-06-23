function calculateNotes() {
    var valor = parseFloat(document.getElementById('valor').value);
    var notas = [100, 50, 10, 5, 1];
    var quantidadeNotas = [0, 0, 0, 0, 0];
  
    var notaIndex = 0;
    while (valor > 0) {
      if (valor >= notas[notaIndex]) {
        valor -= notas[notaIndex];
        quantidadeNotas[notaIndex]++;
      } else {
        notaIndex++;
      }
    }
  
    var result = "Valor lido: R$ " + document.getElementById('valor').value + "<br>";
    result += "Notas necessárias:<br>";
    result += "- Notas de R$ 100: " + quantidadeNotas[0] + "<br>";
    result += "- Notas de R$ 50: " + quantidadeNotas[1] + "<br>";
    result += "- Notas de R$ 10: " + quantidadeNotas[2] + "<br>";
    result += "- Notas de R$ 5: " + quantidadeNotas[3] + "<br>";
    result += "- Notas de R$ 1: " + quantidadeNotas[4] + "<br>";
    document.getElementById('result').innerHTML = result;
  }