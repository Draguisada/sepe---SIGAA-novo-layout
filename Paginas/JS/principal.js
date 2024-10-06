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


// Função que retorna um intervalo de tempo aleatório em milissegundos
function intervaloAleatorio(min, max) {
    // Gera um número aleatório entre min e max, multiplica por 1000 para converter em milissegundos
    return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}

// Função que altera o conteúdo do elemento HTML com id 'aovivo'
function mudaConteudo() {
    // Obtém o elemento HTML com id 'aovivo'
    const aovivo = document.getElementById('aovivo');
    
    // Arrays de mensagens categorizadas em positivas, negativas e neutras
    const noticias = [
        'Não há notícias cadastradas',
        'Reunião de pais às 18h no auditório. Contamos com a presença de todos para discutir o desempenho escolar e atividades futuras.',
        'Palestra sobre saúde mental para os alunos do Ensino Médio às 14h, no auditório. Participação obrigatória.',
        'SEPE aberta ao público das 9h às 12h. Venham prestigiar os projetos dos nossos alunos!.',
        'Treinamento de vôlei às 8h no ginásio. Todos os interessados devem confirmar presença com o professor Isoton.',
        'Lembramos que segunda-feira não haverá aulas devido ao feriado nacional. Aproveitem para descansar!',
    ];

    // Combina todas as mensagens em um único array
    
    // Seleciona uma mensagem aleatória do array combinado
    const mensagemAleatoria = noticias[Math.floor(Math.random() * noticias.length)];

    // Atualiza o conteúdo do elemento 'aovivo' com a mensagem aleatória selecionada
    aovivo.innerHTML = mensagemAleatoria;

    // Chama a função mudaConteudo novamente após um intervalo aleatório entre 1 e 4 segundos
    setTimeout(mudaConteudo, 8000);
}

// Inicia a função mudaConteudo para começar a alterar o conteúdo periodicamente
mudaConteudo();