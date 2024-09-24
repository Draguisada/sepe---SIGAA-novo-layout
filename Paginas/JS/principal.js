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