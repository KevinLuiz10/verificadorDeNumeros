// Variáveis que representarão objetos html.

const campoNumero = document.getElementById('numero');
const campoFeedback = document.getElementById('campoFeedback');
const boxFeedback = document.getElementById('box');
const totaltxt = document.getElementById('totaltxt');
const maiortxt = document.getElementById('maiortxt');
const menortxt = document.getElementById('menortxt');
const somatxt = document.getElementById('somatxt');
const mediatxt = document.getElementById('mediatxt');

// Vetor que armazenará os números incluídos pelo usuário.
let array1 = [];


/*
Listener para capturar o evento de clique da tecla enter dentro do campo de
Inclusão de números.
*/
campoNumero.addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        event.preventDefault();
        adicionar();
    }
});


//Função que será chamada após o usuário clicar no botão 'adicionar' ou apertar enter dentro do campo de texto.
function adicionar(){
    
    //Variável que armazenará o número digitado
    let numero = Number(campoNumero.value);

    /*
    Seção de reset das caixas de texto de resultado (Caso o usuário tenha clicado no botão "finalizar"
    e tenha decidido adicionar mais algum número).
    */
    totaltxt.innerText = '';
    maiortxt.innerText = '';
    menortxt.innerText = '';
    somatxt.innerText = '';
    mediatxt.innerText = '';

    if(campoNumero.value.length == 0){ //Verifica se o usuário digitou alguma coisa
        alert(`[ERRO] É necessário digitar um valor para adicioná-lo.`);
    } else if (numero<1 || numero>100){ //Verifica se o número digitado está dentro do intervalo estabelecido
        alert(`[ERRO] O número informado precisa estar entre 1 e 100.`);
    } else if (array1.indexOf(numero) != -1){ //Verifica se o número digitado já não está armazenado no vetor
        alert(`[ERRO] Não é possível adicionar um número repetido.`);
    } else{ //Entrará neste else caso esteja tudo ok com o numero digitado. Incluirá o número no vetor,
            //resetará o texto presente no campo de digitação de números e incluirá uma mensagem na 
            //caixa de Feedback, dizendo que o número digitado foi incluído.
        array1.push(numero);
        campoNumero.value = '';
        feedBack(numero);
    }
}


// Função que adicionará na caixa de feedback a informação que o numero digitado foi incluído.
function feedBack(numero){
    boxFeedback.style.visibility = 'visible';
    campoFeedback.innerHTML += `Valor ${numero} adicionado.<br/>`;
}


/*
Função que será acionada após o usuário clicar em finalizar. Calculará quantos números foram adicionados, 
qual o maior e menor número, a soma e a média.
*/
function finalizar(array){
    let total = array.length;
    let maior;
    let menor;
    let soma = 0;
    let media;

    if(total == 0){
        alert("[ERRO] É necessário adicionar algum número para ser possível finalizar.");
    } else{
        maior = array[0];
        menor = array[0];

        for(let i = 0; i<total; i++){
            soma += array[i];

            if(maior < array[i]){
                maior = array[i];
            }

            if(menor > array[i]){
                menor = array[i];
            }
        }
        media = soma/total;
        imprimirResultado(total, maior, menor, soma, media);
    }
    
}

//Função que será chamada para imprimir na tela os resultados.
function imprimirResultado(total, maior, menor, soma, media){
    totaltxt.innerText = `Ao todo, temos ${total} números cadastrados.`;
    maiortxt.innerText = `O maior valor informado foi ${maior}.`;
    menortxt.innerText = `O menor valor informado foi ${menor}.`;
    somatxt.innerText = `Somando todos os valores, temos ${soma}.`;
    mediatxt.innerText = `A média dos valores digitados é ${media.toFixed(2)}.`;
}