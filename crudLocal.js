function list(){;
    let pessoas = (localStorage.pessoas) ? 
        JSON.parse(localStorage.pessoas) : [];

    let estrutura = '';
    for(pos in pessoas){
        estrutura += `
        <tr>
            <td>${pessoas[pos].nome}</td>
            <td>${pessoas[pos].email}</td>
            <td>${pessoas[pos].telefone}</td>
            <td>
                <a href="" data-id="${pos}" class="editar">Editar</a>
                <a href="" data-id="${pos}" class="deletar">Excluir</a>
            </td>
        </tr>
        `
    }

    //carregar dados na tabela
    let tabela = document.querySelector("#carregaDados")
    tabela.innerHTML = estrutura
}

function insert(dados){
    let nomePessoa = dados.nome.value
    let emailPessoa = dados.email.value
    let telefonePessoa = dados.telefone.value

    let pessoa = {
        nome: nomePessoa,
        email: emailPessoa,
        telefone: telefonePessoa
    }
    
    let pessoas = (localStorage.pessoas) ? 
        JSON.parse(localStorage.pessoas) : [];

    pessoas.push(pessoa)

    //inserindo no localStorage
    localStorage.setItem("pessoas", JSON.stringify(pessoas))
    list();
}

function update(){

}

function delet(){

}

//CONTROLE DE EVENTOS
const form = document.querySelector('form');
form.addEventListener('submit', function(){
    insert(form)
})

const deletar = document.querySelector('.deletar')
deletar.addEventListener('click', function(){
    
})

list();