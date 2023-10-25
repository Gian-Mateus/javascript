const prompt = require('prompt-sync')();

let id = parseInt(prompt("Insira o id: "))
let name = prompt("Atualize o nome: ")
let species = prompt("Atualize a espécie: ")
let color = prompt("Atualize a cor: ")
let size = prompt("Atualize o tamanho: ")

const object = { id };
if(name){
    object.name = name;
}
if(species){
    object.species = species;
}
if(color){
    object.color = color;
}
if(size){
    object.size = size;
}

fetch("http://cafepradev.com.br:21020/animals/update", {
    method : "PUT",
    headers : {
        'Content-Type': 'application/json'
    },
body: JSON.stringify(object),
})
    .then(response => response.json())
    .then(data => {
        console.log('Dados atualizados:', data);
    })
    .catch(error => {
        console.error('Erro ao atualizar dados:', error);
    });