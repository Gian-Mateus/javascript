const prompt = require('prompt-sync')();

let name = prompt("Insira o nome do animal: ")
let species = prompt("Insira a espécie: ")
let color = prompt("Insira a cor do animal: ")
let size = prompt("Insira o tamanho do animal: ")

fetch("http://cafepradev.com.br:21020/animals/insert", {
    method: "POST",
    headers : {
        "Content-type" : "application/json; charset=UTF-8"
    },
    body : JSON.stringify({
        "name": `${name}`,
        "species": `${species}`,
        "color": `${color}`,
        "size": `${size}`
    }) 
})
    .then(res => res.json())
    .then((res) => {
        console.log(res);
        if(res.error){
            console.log(res.error.message);
        } else {
            console.log(res.message);
        }
    })

    .catch((erro) => {
        console.log(erro);
    })