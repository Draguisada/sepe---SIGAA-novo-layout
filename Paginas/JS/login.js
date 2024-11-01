function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

//////////////////////////////////////////////////////////////////////////////////////////////////
let footersec = document.getElementsByClassName('footer-section');
let sections = document.getElementsByClassName('section');
let aberto = 0
const nome = document.getElementById('nome-ifc');
const nomegrande = document.getElementsByClassName('header-sigaa-h3');
let nomeextenso = ["Sistema Integrado de Gestão de Atividades Acadêmicas", "Sistema Integrado de Patrimônio, Administração e Contratos", "Sistema Integrado de Gestão de Recursos Humanos", "Sistema de Administração dos Sistemas (Técnica e Gestão)"]


function selectSection(elem, ints) {
    if (window.innerWidth > 600){
        for (i=0; i<sections.length; i++) {
            sections[i].classList.remove('selected')
        }

        elem.classList.add('selected')

        if (!(sections[0].classList.contains('selected'))) {

            footersec[0].style.gridColumn = 2;
            footersec[1].style.display = 'none';
            footersec[2].style.display = 'none';
        } else {
            footersec[0].style.gridColumn = 1;
            footersec[1].style.display = 'inline-block';
            footersec[2].style.display = 'inline-block';
        }


    
    } else if (window.innerWidth <= 600) {
        if (!aberto) {
            for(i=0;i<sections.length;i++) {
                sections[i].style.display = 'block';
            }
            aberto = 1;
            return;
        } else if (elem.classList.contains('selected') || aberto) {
            for(i=0;i<sections.length;i++) {
                sections[i].style.display = 'none';
            }
            elem.style.display = 'block';
            aberto = 0;
        }

        for (i=0; i<sections.length; i++) {
            sections[i].classList.remove('selected')
        }

        elem.classList.add('selected')
        

        if (!(sections[0].classList.contains('selected'))) {

            footersec[0].style.gridColumn = 2;
            footersec[1].style.display = 'none';
            footersec[2].style.display = 'none';
        } else {
            footersec[0].style.gridColumn = 1;
            footersec[1].style.display = 'inline-block';
            footersec[2].style.display = 'inline-block';
        }

        
    }
    let titulo = document.querySelector('.selected > a > strong').innerText;
    nome.innerText = 'IFC - ' + titulo;
    nomegrande[0].innerText = nomeextenso[ints];
}

//////////////////////////////////////////////////////////////////////////////////////////////////
function naoPossuiCadastro() {
    let hidden = document.getElementsByClassName('cadastro')
    hidden[0].classList.toggle('hidden')
}

//////////////////////////////////////////////////////////////////////////////////////////////////
let img_fundo = document.getElementsByClassName('img-fundo')
for (i=0; i<img_fundo.length; i++) {
    img_fundo[i].style.transform = "RotateZ(" + Math.ceil(Math.random() * 100) + "deg) Translate(" + getRandomIntInclusive(-25, 25) + "%, " + getRandomIntInclusive(-25, 25) + "%)";
}

//////////////////////////////////////////////////////////////////////////////////////////////////
const cores = document.getElementById('cores');
var colorScheme = 1

function changeColorSchemeGay() {
    
    if (colorScheme == 1) {
        cores.href = "Paginas/CSS/Cores/coresTrans.css";
    } else if (colorScheme == 2) {
        cores.href = "Paginas/CSS/Cores/coresNonBinary.css";
    } else if (colorScheme == 3) {
        cores.href = "Paginas/CSS/Cores/coresPan.css";
    }else {
        cores.href = "Paginas/CSS/coresWhite.css"
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
        cores.href = "Paginas/CSS/Cores/coresSigClassico.css";
        colorScheme = 0;
        localStorage.setItem('visSig', 'True')
    } else {
        cores.href = 'Paginas/CSS/coresWhite.css';
        colorScheme=1;
        localStorage.setItem('visSig', 'False')
    }

}

if (localStorage.visSig == 'True') {
    changeColorScheme()
}

//////////////////////////////////////////////////////////////////////////////////////////////////
function resetNormal(elem) {
    elem.style.transition = '18s';
    elem.style.opacity = '0.5';
    elem.style.transform = "RotateZ(" + Math.ceil(Math.random() * 100) + "deg) Translate(" + getRandomIntInclusive(-25, 25) + "%, " + getRandomIntInclusive(-25, 25) + "%)";
}

function delay(ms) {
    ms *= 1000;
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function normal(elem) {
    elem.style.transition = '1.5s';
    elem.style.transform = 'rotateZ(0deg) translate(0, 0)';
    elem.style.opacity = '1';
    await delay(10*(Math.random() + 0.5));
    resetNormal(elem);
    
}