let prompt = require('prompt-sync')();

let alunos = [];

do{
    let nomeAluno = prompt('Informe o nome do aluno: ')
    let idadeAluno = prompt('Informe a idade do aluno: ')
    
    alunos.push({
        nome: nomeAluno,
        idade: idadeAluno
    })
}while(alunos.length < 3);

console.log("--------------Alunos---------------");

for(pos in alunos){
    console.log(`Nome: ${alunos[pos].nome} | Idade: ${alunos[pos].idade}`);
}