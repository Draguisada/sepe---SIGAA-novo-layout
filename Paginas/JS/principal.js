import { turmaAno } from './index.mjs';


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function colorizeNotas() {
    const notaElements = document.querySelectorAll('.nota-conteudo-nota-valor');

    notaElements.forEach(function(element) {
        const notaValue = parseFloat(element.textContent);

        if (notaValue < 6) {
            element.style.backgroundColor = '#c8191e';
        }
        else if (notaValue >= 6 && notaValue < 7) {
            element.style.backgroundColor = '#e9d20a';
        }
        else if (notaValue >= 7 && notaValue < 10) {
            element.style.backgroundColor = '#2f9e41';
        }
        else if (notaValue == 10) {
            element.style.backgroundColor = '#2f9e41';
        }
    });
}




notas = document.getElementsByClassName('nota');

function randomizeNotas(min = 5, rand = 4) {
    for(i=0;i<notas.length;i++) {
        notas[i].innerHTML = getRandomInt(rand) + min + getRandomInt(9)/10
    }
}

randomizeNotas();
colorizeNotas();


function mostrarPerfilAluno() {
    let perfil_estudante = document.getElementById('perfil-estudante');
    var esconder = document.getElementsByClassName('esconder-aluno');
    var mostrar = document.getElementsByClassName('mostrar-aluno');

    
    if (perfil_estudante.classList.contains('mostrar-aluno')) {
        

        for (i=0; i<=mostrar.length; i++){
            mostrar[0].classList.remove('mostrar-aluno');
            mostrar[0].classList.add('esconder-aluno');
        }
        mostrar[0].classList.remove('mostrar-aluno');
        mostrar[0].classList.add('esconder-aluno');
        return 0;
    }

    for (i=0; i<=esconder.length; i++){
        esconder[0].classList.add('mostrar-aluno');
        esconder[0].classList.remove('esconder-aluno');
    }

    perfil_estudante.classList.add('mostrar-aluno');
}


function toggleVisibility(elementId, seta) {
    var imagem = seta.firstElementChild
    var element = document.getElementById(elementId);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "flex";
        imagem.src="Imagens/Icones/Seta-baixo.svg";
    } else {
        element.style.display = "none";
        imagem.src="Imagens/Icones/Seta-cima.svg";
    }
}


// Arrays de mensagens categorizadas em positivas, negativas e neutras
const noticias = [
    'Não há notícias cadastradas',
    'Reunião de pais às 18h no auditório. Contamos com a presença de todos para discutir o desempenho escolar e atividades futuras.',
    'Palestra sobre saúde mental para os alunos do Ensino Médio às 14h, no auditório. Participação obrigatória.',
    'SEPE aberta ao público das 9h às 12h. Venham prestigiar os projetos dos nossos alunos!.',
    'Treinamento de vôlei às 8h no ginásio. Todos os interessados devem confirmar presença com o professor Isoton.',
    'Lembramos que segunda-feira não haverá aulas devido ao feriado nacional. Aproveitem para descansar!',
];

// Índice da notícia atual
let indiceAtual = 0;

// Obtém os elementos HTML
const aovivo = document.getElementById('aovivo');
const botaoEsquerda = document.getElementById('noticias-esquerda');
const botaoDireita = document.getElementById('noticias-direita');

// Função para exibir a notícia atual com base no índice
function exibeNoticia(indice) {
    aovivo.innerHTML = noticias[indice];
}

// Função para alternar automaticamente entre as notícias
function mudaConteudo() {
    // Incrementa o índice de notícias, voltando ao início se chegar ao final
    indiceAtual = (indiceAtual + 1) % noticias.length;

    // Exibe a notícia atual
    exibeNoticia(indiceAtual);

    // Chama a função mudaConteudo novamente após 8 segundos
    setTimeout(mudaConteudo, 8000);
}

// Adiciona o evento de clique ao botão para exibir a notícia anterior
botaoEsquerda.addEventListener('click', () => {
    // Decrementa o índice e volta ao final se necessário
    indiceAtual = (indiceAtual - 1 + noticias.length) % noticias.length;
    exibeNoticia(indiceAtual);
});

// Adiciona o evento de clique ao botão para exibir a notícia próxima
botaoDireita.addEventListener('click', () => {
    // Incrementa o índice e volta ao início se necessário
    indiceAtual = (indiceAtual + 1) % noticias.length;
    exibeNoticia(indiceAtual);
});

// Inicializa a primeira exibição e começa a alternância automática
exibeNoticia(indiceAtual);
mudaConteudo();

var colorScheme = 1

function changeColorScheme() {
    cores = document.getElementById('cores');
    if (colorScheme == 1) {
        cores.href = "CSS/Cores/coresTrans.css";
    } else if (colorScheme == 2) {
        cores.href = "CSS/Cores/coresNonBinary.css";
    } else if (colorScheme == 4) {
        cores.href = "CSS/Cores/coresSigClassico.css";
    } else if (colorScheme == 3) {
        cores.href = "CSS/Cores/coresPan.css";
    }else {
        cores.href = "CSS/coresWhite.css"
        colorScheme = 0;
    }


    colorScheme++;
}


primeiros = document.getElementsByClassName('primeiroano');
segundos = document.getElementsByClassName('segundoano');
terceiros = document.getElementsByClassName('terceiroano');
tecnico = document.getElementsByClassName('tecnico')

function turmaDiferente(turma, ano) {
    for (i=0;i<primeiros.length;i++) {
        primeiros[i].style.display= 'None';
    }
    for (i=0;i<segundos.length;i++) {
        segundos[i].style.display= 'None';
    }
    for (i=0;i<terceiros.length;i++) {
        terceiros[i].style.display= 'None';
    }
    for (i=0;i<tecnico.length;i++) {
        tecnico[i].style.display= 'None';
    }

    if (ano == 1) {
        var ano = primeiros;
    } else if (ano == 2) {
        var ano = segundos;
    } else if (ano == 3) {
        var ano = terceiros;
    } else {
        console.log('ANO NÃO CORESPONDENTE, DIGITE UM DÍGITO DE 1 ATÉ 3');
    }


    for (i=0;i<ano.length;i++) {
        if (ano[i].classList.contains(turma)) {
            ano[i].style.display = 'block';
        }
    }

}

turmaDiferente("info", 1);