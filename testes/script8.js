function calcularPesoIdeal() {
    
    var altura = parseFloat(document.getElementById('altura').value);
    var sexo;
    
    if (document.getElementById('masculino').checked) {
        sexo = 'asculino';
    } else if (document.getElementById('feminino').checked) {
        sexo = 'feminino';
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, selecione o sexo.';
        return;
    }
    
    var pesoIdeal;
    
    
    if (sexo === 'asculino') {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === 'feminino') {
        pesoIdeal = (62.1 * altura) - 44.7;
    }
    
    // Exibir o resultado
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `O peso ideal para uma pessoa de altura ${altura.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}m e sexo ${sexo} é aproximadamente ${pesoIdeal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}kg.`;
}