function comprar(){
    //pegando informações
    let tipo = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);
    if(tipo.value == 'pista'){
        comprarPista(quantidade);
    }
    else if (tipo.value == 'superior'){
        comprarSuperior(quantidade);
    }
    else {
        comprarInferior(quantidade);
    }
}

//função pista
function comprarPista(quantidade){
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > quantidadePista){
        alert('Quantidade indisponível para tipo pista');
    }
    else{
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra realizada com sucesso!');
    }

}

//função superior
function comprarSuperior(quantidade){
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > quantidadeSuperior){
        alert('Quantidade indisponível para tipo superior');
    }
    else{
        quantidadeSuperior = quantidadeSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Compra realizada com sucesso!');
    }
}

//função inferior
function comprarInferior(quantidade){
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > quantidadeInferior){
        alert('Quantidade indisponível para tipo inferior');
    }
    else{
        quantidadeInferior = quantidadeInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('Compra realizada com sucesso!');
    }
}