function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}



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

let img_fundo = document.getElementsByClassName('img-fundo')



for (i=0; i<img_fundo.length; i++) {
    img_fundo[i].style.transform = "RotateZ(" + Math.ceil(Math.random() * 100) + "deg) Translate(" + getRandomIntInclusive(-25, 25) + "%, " + getRandomIntInclusive(-25, 25) + "%)";
}