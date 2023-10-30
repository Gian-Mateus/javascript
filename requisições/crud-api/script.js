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

// setar interação visual dos botões
// função para remover a classe form-general para deixar o display visível
// const removeclass = (btnId, rowId, classToRemove) => {
//     if (typeof btnId !== 'string' || typeof rowId !== 'string' || typeof classToRemove !== 'string') {
//         throw new Error('Todos os parâmetros devem ser strings.');
//     }
//     let btnCalled = document.querySelector(btnId);
//     btnCalled.addEventListener("click", () => {
//         let rowCalled = document.querySelector(rowId)
//         rowCalled.classList.remove(classToRemove)
//     })
// }

// removeclass("#btnSearch", "#rowSearch", "form-general");
// removeclass("#btnAdd", "#rowNew", "form-general");
// removeclass("#btnUp", "#rowUpdate", "form-general");
// removeclass("#btnCDel", "#rowDelete", "form-general");

let rowsAll = ["#rowSearch", "#rowNew", "#rowUpdate", "#rowDelete"]

// const openLayout = (btnId, rowId, classToRemove) => {
//     if (typeof btnId !== 'string' || typeof rowId !== 'string' || typeof classToRemove !== 'string') {
//         throw new Error('Todos os parâmetros devem ser strings.');
//     }
//     // pega o botão chamado e remove a classe
//     let btnCalled = document.querySelector(btnId);
//     let rowCalled = document.querySelector(rowId)
//     btnCalled.addEventListener("click", () => {
//         rowCalled.classList.remove(classToRemove)
//     })
//     // pega todos os outros botões e adiciona a classe
//     let rowsAll = ["#rowSearch", "#rowNew", "#rowUpdate", "#rowDelete"]
//     const removeItem = (array, element) => {
//         const index = array.indexOf(element);
//         if (index !== -1) {
//             array.splice(index, 1);
//         }
//     }
//     removeItem(rowsAll, rowCalled)
//     console.log(rowsAll);
//     for(pos in rowsAll){
//         let row = document.querySelector(rowsAll[pos]);
//         row.classList.add("form-general")
//     }
// }

// openLayout("#btnSearch", "#rowSearch", "form-general");
// openLayout("#btnAdd", "#rowNew", "form-general");
// openLayout("#btnUp", "#rowUpdate", "form-general");
// openLayout("#btnCDel", "#rowDelete", "form-general");