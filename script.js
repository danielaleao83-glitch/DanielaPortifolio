const quizContainer = document.getElementById('quiz-container');

quizContainer.addEventListener('click', function(e) {
    // Verifica se clicou em uma opção
    if(e.target.classList.contains('option')) {
        const selected = e.target.dataset.value;
        console.log('Selecionou:', selected);

        // Destaca a opção selecionada
        quizContainer.querySelectorAll('.option').forEach(opt => {
            opt.style.backgroundColor = ''; // reseta cores
        });
        e.target.style.backgroundColor = '#a0e7a0'; // cor de seleção

        // Aqui você pode adicionar lógica de pontuação ou próxima pergunta
    }
});
