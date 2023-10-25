const prompt = require('prompt-sync')();

const verificaIdade = () => {
    return new Promise((resolve, reject) => {
        const anoNascimento = parseInt(prompt('Informe o ano de nascimento: '));
        const idade = parseInt(prompt('Informe a idade: '));

        const anoAtual = new Date().getFullYear();
        const idadeCalculada = anoAtual - anoNascimento;

        if (idade === idadeCalculada) {
            resolve('A idade está correta!');
        } else {
            reject('A idade está incorreta.');
        }
    });
}

verificaIdade()
    .then(res => (console.log(res)))
    .catch(rej => (console.log(rej)))