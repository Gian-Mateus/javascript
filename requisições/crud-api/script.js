const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//Estou pondo um "timer" no popover para que ele só apareça por dois segundos
const popoverHideFocus = document.querySelector('input');
popoverHideFocus.addEventListener('focus', function() {
    this.setAttribute('data-bs-toggle', 'popover');

    let popover = new bootstrap.Popover(this); 

    setTimeout(function() {
        popover.hide();
    }, 2000);
})

// pegando os IDs dos botões e das suas repectivas linhas de manipulação
let btnAll = ["#btnSearch","#btnAdd","#btnUp","#btnCDel"]
let rowsAll = ["#rowSearch", "#rowNew", "#rowUpdate", "#rowDelete"]

//função que tirará a classe form-general das linhas conforme o evento de cada botão e adicionará a classe nas outras linhas que não estão sendo usadas
const openLayout = (rowID) => {
    let rowCalled = document.querySelector(rowID);
    rowCalled.classList.remove("form-general")
    
    let newRosAll = removeItem(rowsAll, rowID);
    
    for(pos in newRosAll){
        let row = document.querySelector(newRosAll[pos])
        row.classList.add("form-general")
    }
}
//função para remover item de um array como se fosse um pesquisar, obs.: retorna um array sem o ítem removido
const removeItem = (array, element) => {
    const index = array.indexOf(element);
    if (index !== -1) {
        array = [...array.slice(0, index), ...array.slice(index + 1)];
    }
    return array;
}
// atribuindo as funções criadas para o evento click de cada botão
let btnSearch = document.querySelector(btnAll[0]);
btnSearch.addEventListener('click', function(){
    openLayout(rowsAll[0])
})
let btnAdd = document.querySelector(btnAll[1]);
btnAdd.addEventListener('click', function(){
    openLayout(rowsAll[1])
})
let btnUp = document.querySelector(btnAll[2]);
btnUp.addEventListener('click', function(){
    openLayout(rowsAll[2])
})
let btnCDel = document.querySelector(btnAll[3]);
btnCDel.addEventListener('click', function(){
    openLayout(rowsAll[3])
})
