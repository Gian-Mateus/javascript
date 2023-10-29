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