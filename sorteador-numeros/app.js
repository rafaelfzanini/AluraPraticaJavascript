function sortear(){
    //parseInt -> Força a ler apenas números inteiros
    let quantidade = parseInt(document.getElementById('quantidade').value);
    // cria a variavel || busca um elemento da página || pega o valor do imput
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = []; //cria array
    let numero;         
    for (let i =0; i < quantidade; i++){
        numero = obterNumAleatorio(de, ate);
        sorteados.push(numero);  //puxa o valor para o array

    }
    
    //alert mostra um popup   ||   ${} -> permite inserir uma variável em uma String
    //alert(`Quantidade: ${quantidade}`)
    //alert(`Do número: ${de}`)
    //alert(`Até: ${ate}`)
    
    alert (sorteados);
}



//min e max são parâmetros -> Valores passados para a função 
function obterNumAleatorio (min, max){
    return Math.floor(Math.random() * (max-min + 1)) + min;
}