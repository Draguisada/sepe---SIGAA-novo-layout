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
            element.style.backgroundColor = '#F1A532'
        }
    });
}

colorizeNotas();