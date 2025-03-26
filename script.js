document.addEventListener('DOMContentLoaded', function() {
    const twoPlayersBtn = document.getElementById('twoPlayers');
    const fourPlayersBtn = document.getElementById('fourPlayers');
    const gameInfo = document.getElementById('gameInfo');
    const playerColorsInfo = document.getElementById('playerColorsInfo');
    const startBtn = document.getElementById('startBtn');
    
    // Configurações de cores por número de jogadores
    const colorConfig = {
        2: [
            { name: 'Azul', class: 'blue' },
            { name: 'Verde', class: 'green' }
        ],
        4: [
            { name: 'Azul', class: 'blue' },
            { name: 'Amarelo', class: 'yellow' },
            { name: 'Verde', class: 'green' },
            { name: 'Vermelho', class: 'red' }
        ]
    };

    let gameUrl = ''; // Variável para armazenar o URL do jogo

    // Escolher número de jogadores
    twoPlayersBtn.addEventListener('click', function() {
        startGame(2);
        gameUrl = 'https://gameexposenac.github.io/ludo-2/'; // URL para 2 jogadores
    });

    fourPlayersBtn.addEventListener('click', function() {
        startGame(4);
        gameUrl = 'https://gameexposenac.github.io/ludo-4/'; // URL para 4 jogadores
    });

    // Iniciar o jogo com número de jogadores definido
    function startGame(numPlayers) {
        gameInfo.style.display = 'block';
        
        // Obter configuração de cores para o número de jogadores
        const assignedColors = colorConfig[numPlayers];
        
        // Mostrar informações das cores atribuídas
        playerColorsInfo.innerHTML = `
            <h3>Cores dos Jogadores:</h3>
            ${assignedColors.map((color, index) => `
                <div class="player-color-item">
                    Jogador ${index + 1}: ${color.name}
                    <span class="player-color ${color.class}"></span>
                </div>
            `).join('')}
        `;
        
        startBtn.style.display = 'block';
    }

    // Redirecionar para o URL correspondente ao clicar no botão "Começar Jogo"
    startBtn.addEventListener('click', function() {
        if (gameUrl) {
            window.location.href = gameUrl; // Redireciona para o URL definido
        }
    });
});
