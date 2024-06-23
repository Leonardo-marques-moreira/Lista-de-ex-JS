function orderNumbers() {
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var num3 = parseInt(document.getElementById('num3').value);
  var num4 = parseInt(document.getElementById('num4').value);
  var num5 = parseInt(document.getElementById('num5').value);

  if (num1 === num2 || num1 === num3 || num1 === num4 || num1 === num5 ||
      num2 === num3 || num2 === num4 || num2 === num5 ||
      num3 === num4 || num3 === num5 ||
      num4 === num5) {
    alert("Os números devem ser diferentes.");
    return;
  }

  var numbers = [num1, num2, num3, num4, num5];
  numbers.sort(function(a, b) {
    return b - a;
  });

  var result = "Os números em ordem decrescente são: ";
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i] + " ";
  }

  document.getElementById('result').innerHTML = result;
}