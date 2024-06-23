function calculateSalary() {
    var salary = parseFloat(document.getElementById('salary').value);
    var cargo = document.getElementById('cargo').value.toLowerCase();
  
    var increaseRate;
    if (cargo === "gerente") {
      increaseRate = 0.10;
    } else if (cargo === "engenheiro") {
      increaseRate = 0.20;
    } else if (cargo === "tecnico") {
      increaseRate = 0.30;
    } else {
      increaseRate = 0.40;
    }
  
    var newSalary = salary * (1 + increaseRate);
    var difference = newSalary - salary;
  
    var result = "Salário Antigo: R$ " + salary.toFixed(2) + "<br>";
    result += "Novo Salário: R$ " + newSalary.toFixed(2) + "<br>";
    result += "Diferença: R$ " + difference.toFixed(2);
    document.getElementById('result').innerHTML = result;
  }