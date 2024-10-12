title = document.querySelector('title');

function troca(elem) {
    if (elem.innerHTML === 'Biologia'){
        materia = 'Língua portuguesa e Literatura'
        elem.innerHTML = materia
        title.innerHTML = 'SIGAA - ' + materia
    }
    else {
        materia = 'Biologia'
        elem.innerHTML = materia
        title.innerHTML = 'SIGAA - ' + materia
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