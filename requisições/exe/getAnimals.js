const prompt = require('prompt-sync')();

let id = prompt("Digite um id: ");

// const pegar = (id) =>{
//     return new Promise((resolve, reject) => {
//         fetch(`http://cafepradev.com.br:21020/animals/search/${id}`)
//         .then(res => res.json())
//         .then((res) => {
//            if(!res.status) {
//                 resolve(console.log(res))
//             }else{
//                 reject(new Error("Deu ruim maninho"))
//             }
//         })
//     })
// }

// pegar(id)
//     .then()
//     .catch()

fetch(`http://cafepradev.com.br:21020/animals/search/${id}`)
    .then(res => res.json())
    .then((retorno) =>{
        if(!retorno.status){
            console.log(retorno)
        } else {console.log("deu ruim a requisição")};
    })
    .catch(() => {
        console.log("deu ruim a requisição");
    })