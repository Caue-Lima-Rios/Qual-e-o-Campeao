const checkbox = [
    document.getElementById('checkbox1'),
    document.getElementById('checkbox2'),
    document.getElementById('checkbox3'),
    document.getElementById('checkbox4'),
    document.getElementById('checkbox5'),
    document.getElementById('checkbox6'),
];

const dicasSpan = [
    document.getElementById('dica1'),
    document.getElementById('dica2'),
    document.getElementById('dica3'),
    document.getElementById('dica4'),
    document.getElementById('dica5'),
    document.getElementById('dica6'),
];

let numeroChamp;

function escolherChamp() {
    numeroChamp = parseInt(Math.random() * campeoes.length);
}

function desativarCheckbox() {
    checkbox.forEach((cb, index) => {
        if (cb.checked) {
            checkbox[index].disabled = true;
        } else {
            checkbox[index].disabled = false;
        }
    });
}

function mostrarDicas() {
    checkbox.forEach((cb, index) => {
        dicasSpan[index].style.visibility = cb.checked ? 'visible' : 'hidden';
        desativarCheckbox()
    });
}

function embaralharDicas() {
    const dicasChamp = [
        "Eu sou de " + campeoes[numeroChamp].regiao + ".",
        "Eu sou da lane " + campeoes[numeroChamp].lane + ".",
        "Eu sou um " + campeoes[numeroChamp].classe + ".",
        "Eu sou " + campeoes[numeroChamp].sexo + ".",
        "Eu sou um " + campeoes[numeroChamp].raça + ".",
        "Eu faço " + campeoes[numeroChamp].build + "."
    ];

    for (let i = dicasChamp.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [dicasChamp[i], dicasChamp[j]] = [dicasChamp[j], dicasChamp[i]];
    }

    for (let i = 0; i < checkbox.length; i++) {
        dicasSpan[i].innerText = dicasChamp[i];
    }

    checkbox.forEach((cb) => {
        cb.addEventListener('change', mostrarDicas);
    });

    mostrarDicas();
}

const pontos = document.getElementById('pontos')
let pontuacao = checkbox.length + 1
pontos.innerText="Você ganhará " + pontuacao + " pontos se acertar"

function mudarPontuacao(index) {
    pontuacao = pontuacao - 1
    pontos.innerText="Você ganhará " + pontuacao + " pontos se acertar"
}

function verificarCheckboxesMarcadas() {
    checkbox.forEach((cb, index) => {
        cb.addEventListener('change', () => {
            if (cb.checked) {
                mudarPontuacao();
            }
        });
    });
}

const inputNome = document.getElementById('inputNome')
const sugestoesElemento = document.getElementById('sugestoes');

function buscarSugestoes(palavra) {
    sugestoesElemento.innerHTML = '';

    if (palavra.trim() === '') {
        sugestoesElemento.style.display = 'none';
        return;
    }

    const sugestoes = campeoes.filter(campeao =>
        campeao.nome.toLowerCase().includes(palavra.toLowerCase())
    ).slice(0, 3);

    sugestoes.forEach(campeao => {
        const sugestaoItem = document.createElement('li');
        sugestaoItem.textContent = campeao.nome;
        sugestaoItem.addEventListener('click', () => preencherInput(campeao.nome));
        sugestoesElemento.appendChild(sugestaoItem);
    });

    sugestoesElemento.style.display = sugestoes.length > 0 ? 'block' : 'none';
}

function preencherInput(palavra) {
    document.getElementById('inputNome').value = palavra;
    document.getElementById('sugestoes').innerHTML = '';
}

let chances = 3;

function processarInput() {
    const resultado = document.getElementById('resultado');
    const palavraDigitada = inputNome.value.trim();
    if (palavraDigitada === campeoes[numeroChamp].nome) {
        resultado.innerHTML = 'Acertou! Eu sou o/a ' + campeoes[numeroChamp].nome + '! Clique em reiniciar para jogar de novo.';
        inputNome.disabled = true;
        checkbox.checked = true;
        mostrarDicas()
    } else {
        chances--;

        if (chances > 0) {
            resultado.innerHTML = 'Errou! Chances restantes: ' + chances + '.';
        } else {
            resultado.innerHTML = 'Fim de jogo! Eu era o/a ' + campeoes[numeroChamp].nome + '! Clique em reiniciar para jogar de novo.';
            inputNome.disabled = true;
            pontuacao = 0
        }
    }
} 

inputNome.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        processarInput();
        sugestoesElemento.innerHTML = ''
        inputNome.value = ''
    }
});

function comecar() {
    escolherChamp();
    embaralharDicas();
}

const botaoReiniciar = document.getElementById('botao-reiniciar')

function reiniciar() {
    checkbox.forEach(cb => {
        cb.checked = false;
    });
    escolherChamp();
    embaralharDicas();
    pontuacao = checkbox.length + 1
    pontos.innerText="Você ganhará " + pontuacao + " pontos se acertar" 
    sugestoesElemento.innerHTML = ''
    inputNome.value = ''
    resultado.innerHTML = ''
    chances = 3
    inputNome.disabled = false;
}

verificarCheckboxesMarcadas()
botaoReiniciar.addEventListener('click', reiniciar);

document.addEventListener('DOMContentLoaded', function() {
    comecar();
});