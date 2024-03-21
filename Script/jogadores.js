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

function mudarJogador() {
    if (jogadorAtual === jogadores[0]) {
        jogadorAtual = jogadores[1]
    } else {
        jogadorAtual = jogadores[0]
    }
}

function mudarPontuacaoJogador() {
    jogadorAtual.pontos
}