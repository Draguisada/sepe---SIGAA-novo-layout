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



function selectSection(elem, contentClass) {
    if (elem.classList.contains('selected')) {
        elem.classList.remove('selected');
        document.querySelector(`.${contentClass}`).style.display = 'none';
        return;
    }

    let sections = document.getElementsByClassName('menu-burger');
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove('selected');
    }

    let contentSections = document.querySelectorAll('.conteudo-estatistica, .conteudo-avaliacoes');
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    elem.classList.add('selected');
    document.querySelector(`.${contentClass}`).style.display = 'block';
}

function naoPossuiCadastro() {
    let hidden = document.getElementsByClassName('cadastro')
    hidden[0].classList.toggle('hidden')
}

const cores = document.getElementById('cores');
var colorScheme = 1

function changeColorSchemeGay() {
    
    if (colorScheme == 1) {
        cores.href = "CSS/Cores/coresTrans.css";
    } else if (colorScheme == 2) {
        cores.href = "CSS/Cores/coresNonBinary.css";
    } else if (colorScheme == 3) {
        cores.href = "CSS/Cores/coresPan.css";
    }else {
        cores.href = "CSS/coresWhite.css"
        colorScheme = 0;
    }

    colorScheme++;
}

function changeColorScheme() {
    
    if (colorScheme == 1) {
        cores.href = "CSS/Cores/coresSigClassico.css";
        colorScheme = 0;
        localStorage.setItem('visSig', 'True')
    } else {
        cores.href = 'CSS/coresWhite.css';
        colorScheme=1;
        localStorage.setItem('visSig', 'False')
    }

}


if (localStorage.visSig == 'True') {
    changeColorScheme()
}