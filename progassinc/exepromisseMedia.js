const mediaFinal = (nota1, nota2, nota3) =>{
    return new Promise((res, rej) => {
        let media = (nota1 + nota2 + nota3) / 3;
        if(media >= 7){
            res(`Aprovado! Sua nota é: ${media}`)
        } else{
            rej(`Reprovado! Sua nota é: ${media}`)
        }
    })
}

const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Informe a primeira nota: "))
let nota2 = parseFloat(prompt("Informe a segunda nota: "))
let nota3 = parseFloat(prompt("Informe a terceira nota: "))

mediaFinal(nota1, nota2, nota3)
    .then(res => console.log(res))
    .catch(rej => console.log(rej))