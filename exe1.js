const prompt = require('prompt-sync')();

function calculoLocacao(dias, diaria, km){
    const taxaKm = 0.2;
    return (dias * diaria) + (km * taxaKm);
};

let locacoes = [];

console.log("Cadastre os 3 veículos para locação!");

for (let i = 0; i < 3; i++) {
    console.log(`------Cadastro do veículo ${i + 1}------`);
    let modelo = prompt("Digite o modelo do carro: ");
    let ano = prompt("Digite o ano do carro: ");
    let diaria = prompt("Digite o valor da diária: ");

    let locacao = {
        modelo: modelo,
        ano: ano,
        diaria: diaria,
    }

    locacoes.push(locacao);
}

console.log("Agora digite os dados da locação:");

for (let i = 0; i < locacoes.length; i++) {
    console.log(`------Dados da locação do ${i + 1}ª veículo------`);
    locacoes[i].dias = prompt("Digite quantos dias de locação: ");
    locacoes[i].km = prompt("Digite a quilometragem percorrida: ");

    locacoes[i].valorLocacao = calculoLocacao(locacoes[i].dias, locacoes[i].diaria, locacoes[i].km);
}

console.log("------Relatório de locações------");
for (let i = 0; i < locacoes.length; i++) {
    console.log(`Veículo: ${locacoes[i].modelo}`);
    console.log(`Ano: ${locacoes[i].ano}`);
    console.log(`Dias e Km: ${locacoes[i].dias}, ${locacoes[i].km}`);
    console.log(`Valor da locação: ${locacoes[i].valorLocacao}`);
    console.log("----------------------------------");
}