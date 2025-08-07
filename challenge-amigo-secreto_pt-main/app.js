let listaNomes = [];


function adicionarAmigo(){
    console.log(listaNomes.length);
    let i = listaNomes.length;

    let nome = document.querySelector('input').value;
    listaNomes.push(nome);
    console.log(listaNomes);

    
    let lista = document.getElementById('listaAmigos');
    let novoElemento = document.createElement('li');
    let texto = document.createTextNode(`${listaNomes[i]}`);
    novoElemento.appendChild(texto);
    
    lista.appendChild(novoElemento);
}


function limparCampo(){

}


function exibirNomes(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}