//  Usando esse como teste pra ver como fica com nomes de diferentes tamanhos 
function troca(elem) {
    if (elem.innerHTML === 'Biologia'){
    elem.innerHTML = 'Língua portuguesa e Literatura'
    }
    else {
    elem.innerHTML = 'Biologia'
    }
}



function selectSection(elem) {

    if (elem.classList.contains('selected')) {
        elem.classList.remove('selected');
        return 0;
    } 

    let sections = document.getElementsByClassName('menu-burger');

    for (i=0; i<sections.length; i++) {
        sections[i].classList.remove('selected')
    }

    elem.classList.add('selected')
}

function naoPossuiCadastro() {
    let hidden = document.getElementsByClassName('cadastro')
    hidden[0].classList.toggle('hidden')
}