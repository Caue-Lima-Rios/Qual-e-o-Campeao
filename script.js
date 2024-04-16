document.addEventListener("DOMContentLoaded", function() {
    const botaoJogar = document.querySelector('.escolher-champ');
    const botoesModo = document.querySelector('#escolher-modo');

    botaoJogar.addEventListener('click', function() {
        botaoJogar.style.display = 'none';
        botoesModo.classList.add('mostrar');
    });
});