function sortear(){
    //parseInt -> Força a ler apenas números inteiros
    let quantidade = parseInt(document.getElementById('quantidade').value);
    // cria a variavel || busca um elemento da página || pega o valor do imput
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    
    let sorteados = []; //cria array
    let numero;         
    for (let i =0; i < quantidade; i++){
        numero = obterNumAleatorio(de, ate); //numero entre "de" e "ate"
        while( sorteados.includes(numero)){  //verifica se num ja foi sorteado
            numero = obterNumAleatorio(de, ate);
        }
        sorteados.push(numero);  //adiciona o valor para o array
    }
    //alert mostra um popup   ||   ${} -> permite inserir uma variável em uma String
    //alert(`Quantidade: ${quantidade}`)
    //alert(`Do número: ${de}`)
    //alert(`Até: ${ate}`)
    
    //busca um elemento HTML
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    // altera o coontepudo HTML dentro do id resultado
    
    alterarStatusBotao();
}



//min e max são parâmetros -> Valores passados para a função 
function obterNumAleatorio (min, max){
    return Math.floor(Math.random() * (max-min + 1)) + min;
}


function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar'); //variavel do botão html
     //verifica se botão está desabilitado
    if (botao.classList.contains('container__botao-desabilitado')){ 
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
    else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
    // Se botão estiver habilitado, remover classe desabilitado e add classe botão
    // Senão faz o inverso
}

    //Deixa vazio os valores das variáveis 
function reiniciar(){
    document.getElementById('quantidade').value = " ";
    document.getElementById('de').value = " ";
    document.getElementById('ate').value = " ";
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
    alterarStatusBotao();
}