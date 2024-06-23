function calcularValor() {
    const codigoItem = document.getElementById('codigoItem').value.toLowerCase();
    const quantidade = parseInt(document.getElementById('quantidade').value);
    let preco = 0;

    if (codigoItem === 'cachorro quente') {
        preco = 11.00;
    } else if (codigoItem === 'bauru') {
        preco = 8.50;
    } else if (codigoItem === 'isto quente') {
        preco = 8.00;
    } else if (codigoItem === 'hamburger') {
        preco = 9.00;
    } else if (codigoItem === 'cheeseburger') {
        preco = 10.00;
    } else if (codigoItem === 'efrigerante') {
        preco = 4.50;
    } else {
        return; 
    }

    const valorTotal = preco * quantidade;
    document.getElementById('resultado').innerText = `Item: ${codigoItem}, Quantidade: ${quantidade}, Valor Total: R$ ${valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
}