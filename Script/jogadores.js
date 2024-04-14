const jogadores = [
    {
        nome: "Jogador 1",
        pontos: 0
    },

    {
        nome: "Jogador 2",
        pontos: 0
    }
]

const pontosJogador = document.getElementById('pontuacao')

let jogadorAtual = jogadores[0]
const vez = document.getElementById('vez')

function mudarJogador() {
    if (jogadorAtual === jogadores[0]) {
        jogadorAtual = jogadores[1]
        vez.innerText='É a vez de '+ jogadorAtual.nome + '!'
    } else {
        jogadorAtual = jogadores[0]
        vez.innerText='É a vez de '+ jogadorAtual.nome + '!'
    }
}

function mudarPontuacaoJogador() {
    jogadorAtual.pontos = jogadorAtual.pontos + pontuacao
}

function mostrarPontuacao() {
    pontosJogador.innerHTML = 'Jogador 1: ' + jogadores[0].pontos + ' pontos.<div>Jogador 2: ' + jogadores[1].pontos + ' pontos.</div>';
}

function mudarTurno(){
    mudarJogador()
    reiniciar()
}




