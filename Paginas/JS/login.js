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

var colorScheme = 1

function changeColorScheme() {
    cores = document.getElementById('cores');
    ifc = document.getElementById('nome-ifc');
    if (colorScheme == 1) {
        cores.href = "Paginas/CSS/Cores/coresTrans.css";
        ifc.innerHTML = 'IFC - SIGAA - Tema Trans'
    } else if (colorScheme == 2) {
        cores.href = "Paginas/CSS/Cores/coresNonBinary.css";
        ifc.innerHTML = 'IFC - SIGAA - Tema Não Binário'
    } else if (colorScheme == 4) {
        cores.href = "Paginas/CSS/Cores/coresSigClassico.css";
        ifc.innerHTML = 'IFC - SIGAA - Tema SIGAA Clássico'
    } else if (colorScheme == 3) {
        cores.href = "Paginas/CSS/Cores/coresPan.css";
        ifc.innerHTML = 'IFC - SIGAA - Tema Pan'
    }
     else {
        cores.href = "Paginas/Css/coresWhite.css"
        ifc.innerHTML = 'IFC - SIGAA'
        colorScheme = 0;
    }


    colorScheme++;
}