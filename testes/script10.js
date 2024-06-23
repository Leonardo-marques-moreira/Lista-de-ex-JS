function calculateSalary() {
    var nivel = parseInt(document.getElementById('nivel').value);
    var qtdAula = parseInt(document.getElementById('qtdAula').value);
    var valorHoraAula = 0;
  
    if (nivel === 1) {
      valorHoraAula = 12.00;
    } else if (nivel === 2) {
      valorHoraAula = 17.00;
    } else if (nivel === 3) {
      valorHoraAula = 25.00;
    } else {
      alert("Nível inválido. Por favor, digite 1, 2 ou 3.");
      return;
    }
  
    var salario = valorHoraAula * qtdAula * 4.5;
    document.getElementById('result').innerHTML = 'O salário do professor é: R$ ' + salario.toFixed(2);
  }