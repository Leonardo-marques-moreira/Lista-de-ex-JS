function calcularCredito() {
    let saldoMedio = parseFloat(document.getElementById('saldoMedio').value);
    let credito = 0;

    if (saldoMedio >= 0 && saldoMedio <= 200) {
        credito = 0;
    } else if (saldoMedio >= 201 && saldoMedio <= 400) {
        credito = saldoMedio * 0.2;
    } else if (saldoMedio >= 401 && saldoMedio <= 600) {
        credito = saldoMedio * 0.3;
    } else if (saldoMedio > 601) {
        credito = saldoMedio * 0.4;
    }

    document.getElementById('resultado').innerText = `Saldo Médio: R$ ${saldoMedio.toFixed(2)}, Crédito: R$ ${credito.toFixed(2)}`;
}


