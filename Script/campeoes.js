const campeoes = [
    {
        nome: 'Lux',
        raça: 'Humano/Mago',
        sexo: 'Mulher',
        lane: 'Mid/Sup',
        build: 'Ap',
        regiao: 'Demacia',
        classe: 'Mago'
    },

    {
        nome: 'Zoe',
        raça: 'Aspecto',
        sexo: 'Mulher',
        lane: 'Mid',
        build: 'Ap',
        regiao: 'Targon',
        classe: 'Mago'
    },

    {
        nome: "Rek'Sai",
        raça: 'Cria do Vazio',
        sexo: 'Mulher',
        lane: 'Jungle',
        build: 'Ad',
        regiao: 'Vazio',
        classe: 'Lutador'
    },

    {
        nome: 'Xayah',
        raça: 'Vastaya',
        sexo: 'Mulher',
        lane: 'Adc',
        build: 'AdCrit',
        regiao: 'Ionia',
        classe: 'Atirador'
    },

    {
        nome: 'Yasuo',
        raça: 'Humano',
        sexo: 'Homem',
        lane: 'Mid',
        build: 'AdCrit',
        regiao: 'Ionia',
        classe: 'Lutador'
    },

    {
        nome: 'Darius',
        raça: 'Humano',
        sexo: 'Homem',
        lane: 'Top',
        build: 'Ad',
        regiao: 'Noxus',
        classe: 'Lutador'
    },

    {
        nome: 'Tahm Kench',
        raça: 'Demonio',
        sexo: 'Homem',
        lane: 'Top/Sup',
        build: 'Tank',
        regiao: 'Aguas de Sentina',
        classe: 'Tank'
    },

    {
        nome: 'Azir',
        raça: 'Ascendente',
        sexo: 'Homem',
        lane: 'Mid',
        build: 'Ap',
        regiao: 'Shurima',
        classe: 'Mago'
    },

    {
        nome: 'Teemo',
        raça: 'Yordle',
        sexo: 'Homem',
        lane: 'Top',
        build: 'Ap',
        regiao: 'Bandopolis',
        classe: 'Atirador'
    },

    {
        nome: 'Kayn',
        raça: 'Humano',
        sexo: 'Homem',
        lane: 'Jungle',
        build: 'Ad',
        regiao: 'Ionia',
        classe: 'Assassino/lutador'
    },

    {
        nome: 'Qiyana',
        raça: 'Humano',
        sexo: 'Mulher',
        lane: 'Mid',
        build: 'Ad',
        regiao: 'Ixtal',
        classe: 'Assassino'
    },

    {
        nome: 'Leona',
        raça: 'Aspecto',
        sexo: 'Mulher',
        lane: 'Sup',
        build: 'TankSup',
        regiao: 'Targon',
        classe: 'Tank/Sup'
    },

    {
        nome: 'Nasus',
        raça: 'Ascendente',
        sexo: 'Homem',
        lane: 'Top',
        build: 'Ad',
        regiao: 'Shurima',
        classe: 'Lutador'
    },

    {
        nome: 'Aatrox',
        raça: 'Darkin',
        sexo: 'Homem',
        lane: 'Top',
        build: 'Ad',
        regiao: 'Shurima/Runeterra',
        classe: 'Lutador'
    },

    {
        nome: 'Karma',
        raça: 'Humano/Espirito',
        sexo: 'Mulher',
        lane: 'Sup/Mid',
        build: 'ApSup',
        regiao: 'Ionia',
        classe: 'Mago'
    },

    {
        nome: 'Le Blanc',
        raça: 'Humano/Mago',
        sexo: 'Mulher',
        lane: 'Mid',
        build: 'Ap',
        regiao: 'Noxus',
        classe: 'Mago/Assassino'
    },

    {
        nome: 'Lulu',
        raça: 'Yordle',
        sexo: 'Mulher',
        lane: 'Sup',
        build: 'ApSup',
        regiao: 'Bandopolis',
        classe: 'Suporte'
    },

    {
        nome: 'Veigar',
        raça: 'Yordle',
        sexo: 'Homem',
        lane: 'Mid',
        build: 'Ap',
        regiao: 'Bandopolis',
        classe: 'Mago'
    },

    {
        nome: 'Jinx',
        raça: 'Humano',
        sexo: 'Mulher',
        lane: 'Adc',
        build: 'AdCrit',
        regiao: 'Zaun',
        classe: 'Atirador'
    },

    {
        nome: 'Sejuani',
        raça: 'Humano/Glacinata',
        sexo: 'Mulher',
        lane: 'Jungle',
        build: 'Tank',
        regiao: 'Freljord',
        classe: 'Tank'
    },

    {
        nome: 'Ashe',
        raça: 'Humano/Glacinata',
        sexo: 'Mulher',
        lane: 'Adc',
        build: 'AdCrit',
        regiao: 'Freljord',
        classe: 'Atirador'
    },

    {
        nome: 'Jarvan IV',
        raça: 'Humano',
        sexo: 'Homem',
        lane: 'Jungle',
        build: 'Ad',
        regiao: 'Demacia',
        classe: 'Lutador'
    },

    {
        nome: 'Camille',
        raça: 'Humano/ciborgue',
        sexo: 'Mulher',
        lane: 'Top',
        build: 'Ad',
        regiao: 'Piltover',
        classe: 'Lutador'
    },

    {
        nome: 'Renata Glasc',
        raça: 'Humano/Quimtech',
        sexo: 'Mulher',
        lane: 'Sup',
        build: 'ApSup',
        regiao: 'Zaun',
        classe: 'Suporte'
    },

    {
        nome: 'Zilean',
        raça: 'Humano/Mago',
        sexo: 'Homem',
        lane: 'Sup',
        build: 'ApSup',
        regiao: 'Icathia',
        classe: 'Suporte'
    },

    {
        nome: 'Thresh',
        raça: 'Morto-vivo',
        sexo: 'Homem',
        lane: 'Sup',
        build: 'TankSup',
        regiao: 'Ilha das Sombras',
        classe: 'Tank/Sup'
    },

    {
        nome: 'Viego',
        raça: 'Morto-vivo',
        sexo: 'Homem',
        lane: 'Jungle',
        build: 'Ad',
        regiao: 'Ilha das Sombras',
        classe: 'Lutador'
    },

    {
        nome: 'Caitlyn',
        raça: 'Humano',
        sexo: 'Mulher',
        lane: 'Adc',
        build: 'AdCrit',
        regiao: 'Piltover',
        classe: 'Atirador'
    },

    {
        nome: 'Warwick',
        raça: 'Humano/Quimtech',
        sexo: 'Homem',
        lane: 'Jungle',
        build: 'Ad',
        regiao: 'Zaun',
        classe: 'Lutador'
    }
];