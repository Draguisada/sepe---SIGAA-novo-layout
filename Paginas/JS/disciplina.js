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
const all = document.querySelectorAll('*')
function changeColorScheme() {
    for(i=0;i<all.length;i++) {
        all[i].style.transition = "0.8s";
    }
    setInterval(function () {
        for(i=0;i<all.length;i++) {
            all[i].style.transition = "0s";
        }
    }, 2000)
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

const sairIcone = document.getElementsByClassName('sair');

function mudarPagina(entrada) {
    const content_mid = document.getElementById('content-mid');
    const content_left = document.getElementById('content-left');
    const content_right = document.getElementById('content-right');
    const classRight = document.getElementsByClassName('right');

    if (entrada) {
        content_mid.style.display = 'inline-block';
        sairIcone[0].style.display = 'block';
        sairIcone[1].style.display = 'none';

        classRight[0].style.top = '0';
        document.getElementById('trocar-disciplina').style.display = "none";
        classRight[0].style.justifyContent = 'right';

        content_left.style.display = 'none';
        content_right.style.display = 'none';

    } else {
        content_mid.style.display = 'none';
        sairIcone[0].style.display = 'none';
        sairIcone[1].style.display = 'block';
        
        content_left.style.display = 'inline-block';
        content_right.style.display = 'inline-block';

        classRight[0].style.top = '';
        document.getElementById('trocar-disciplina').style.display = "block";
        classRight[0].style.justifyContent = 'space-evenly';
        


    }
}