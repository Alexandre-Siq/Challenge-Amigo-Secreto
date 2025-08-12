//Lista que armazena os nomes
let listaNomes = [];

//função para adicionar os nomes à lista
function adicionarAmigo(){
    console.log(listaNomes.length);
    
    
    let i = listaNomes.length; //variável "i" assume o tamanho da lista de amigos como seu valor

    let nome = document.querySelector('input').value; //nome recebe o valor do input

    if(nome !== ''){ //validação para impedir valores nulos

        listaNomes.push(nome); //adiciona o valor digitado na lista

        limparInput(); //chama a função para apagar automaticamente a caixa de texto input
    
        let lista = document.getElementById('listaAmigos'); //seleciona a lista de exibição
        let novoElemento = document.createElement('li'); //cria uma nova linha
        let texto = document.createTextNode(`${listaNomes[i]}`); //cria um texto com o conteúdo digitado
        novoElemento.appendChild(texto); //acopla o texto à linha
    
        lista.appendChild(novoElemento); //acopla a linha à lista

    } else{

        alert('Por favor, insira um nome válido.');

    }
}

//função para limpar o array ListaNomes
function limparArray(){

    listaNomes = [];
}

//função para limpar a caixa de input
function limparInput(){

    nome = document.querySelector('input').value = '';
    
}

//limpart campo lista de amigos para melhor visualização do resultado
function limparCampo(){

     let lista = document.getElementById('listaAmigos');
     lista.innerHTML = '';
}

//função para sortear os nomes da listaNomes
function sortearAmigo(){
    
    limparCampo(); //chama a função de limpar campo

    indiceAleatorio = Math.floor(Math.random() * listaNomes.length); //sorteia um índice que será usado para dar o nome sorteado

    let listaResultado = document.getElementById('resultado');
    let novoElementoSorteado = document.createElement('li');
    let textoSorteado = document.createTextNode(`${listaNomes[indiceAleatorio]}`);
    novoElementoSorteado.appendChild(textoSorteado);
    
    listaResultado.appendChild(novoElementoSorteado);
    
}
