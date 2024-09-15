function selectSection(elem) {
    let sections = document.getElementsByClassName('section');

    for (i=0; i<sections.length; i++) {
        sections[i].classList.remove('selected')
    }

    elem.classList.add('selected')
}

function naoPossuiCadastro() {
    let hidden = document.getElementsByClassName('cadastro')
    hidden[0].classList.toggle('hidden')
}