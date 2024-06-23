function calculateTax() {
  var year = parseInt(document.getElementById('year').value);
  var value = parseFloat(document.getElementById('value').value);

  var taxRate;
  if (year < 1990) {
    taxRate = 0.01;
  } else {
    taxRate = 0.015;
  }

  var tax = value * taxRate;

  var result = "O imposto a ser pago é: R$ " + tax.toFixed(2);
  document.getElementById('result').innerHTML = result;
}