function verificarTriangulo() {
  let x = parseInt(document.getElementById('x').value);
  let y = parseInt(document.getElementById('y').value);
  let z = parseInt(document.getElementById('z').value);
  let resultado;

  if (x + y > z && x + z > y && y + z > x) {
      if (x === y && y === z) {
          resultado = "Triângulo Equilátero.";
      } else if (x === y || x === z || y === z) {
          resultado = "Triângulo Isósceles.";
      } else {
          resultado = "Triângulo Escaleno.";
      }
  } else {
      resultado = "Não forma um triângulo.";
  }

  
  document.getElementById('resultado').innerText = resultado;
}

document.getElementById('BtVerificar').addEventListener('click', verificarTriangulo);
