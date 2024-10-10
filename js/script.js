// js/script.js

const board = document.querySelector('.board-grid');
const winTune = document.getElementById('winTune');
const loseTune = document.getElementById('loseTune');
const drawTune = document.getElementById('drawTune');
let currentPlayer = 'player1';
let aiEnabled = false;
let difficulty = 'easy';
let player1Score = 0;
let player2Score = 0;

// Function to display greeting message
function displayGreeting() {
    const greeting = document.getElementById('greetings');
    greeting.innerHTML = 'Welcome to Takashi: The Samurai Duel Game!';
    setTimeout(() => {
        greeting.innerHTML = '';
    }, 3000); // Hide the greeting after 3 seconds
}

// Function to display messages
function displayMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;
}

// Function to update the scoreboard
function updateScoreboard() {
    document.getElementById('player1-score').textContent = `Player 1: ${player1Score}`;
    document.getElementById('player2-score').textContent = `Player 2: ${player2Score}`;
}

// Create the game board and add event listeners to each cell
Array.from(board.children).forEach(cell => {
    cell.addEventListener('click', () => makeMove(cell));
});

// Function to switch players
function switchPlayer() {
    currentPlayer = currentPlayer === 'player1' ? 'player2' : 'player1';
}

// Function to make a move
function makeMove(cell) {
    if (!cell.textContent) {
        cell.textContent = currentPlayer === 'player1' ? 'X' : 'O';
        cell.classList.add(currentPlayer);

        if (checkWinner(currentPlayer)) {
            displayMessage(`${currentPlayer === 'player1' ? 'Player 1' : aiEnabled ? 'Takashi' : 'Player 2'} wins!`);
            playWinTune();
            if (currentPlayer === 'player1') {
                player1Score++;
            } else {
                player2Score++;
            }
            updateScoreboard();
            setTimeout(resetGame, 3000); // Reset game after 3 seconds
        } else if (isBoardFull()) {
            displayMessage('It\'s a draw!');
            playDrawTune();
            setTimeout(resetGame, 3000); // Reset game after 3 seconds
        } else {
            switchPlayer();
            if (aiEnabled && currentPlayer === 'player2') {
                setTimeout(playAI, 1000); // Add a delay for AI move
            }
        }
    }
}

// Function to check for a winner
function checkWinner(player) {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winningCombinations.some(combination =>
        combination.every(index => board.children[index].classList.contains(player))
    );
}

// Function to check if the board is full
function isBoardFull() {
    return Array.from(board.children).every(cell => cell.textContent);
}

// Function to reset the game
function resetGame() {
    Array.from(board.children).forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('player1', 'player2');
    });
    currentPlayer = 'player1';
    displayMessage('');
}

// Function to toggle AI mode
function toggleAI() {
    aiEnabled = !aiEnabled;
    document.getElementById('toggle-ai-button').textContent = aiEnabled ? 'Play with Human' : 'Play with AI';
}

// Function to set AI difficulty
function setDifficulty() {
    difficulty = document.getElementById('difficulty').value;
}

// Function for AI move
function playAI() {
    if (difficulty === 'easy') {
        playAIRandom();
    } else if (difficulty === 'medium') {
        playAIMedium();
    } else if (difficulty === 'hard') {
        playAIHard();
    } else if (difficulty === 'superhard') {
        playAISuperhard();
    }
}

// AI Move: Easy (Random)
function playAIRandom() {
    const emptyCells = Array.from(board.children).filter(cell => !cell.textContent);
    const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    makeMove(randomCell);
}

// AI Move: Medium
function playAIMedium() {
    const emptyCells = Array.from(board.children).filter(cell => !cell.textContent);
    const corners = [0, 2, 6, 8];
    const center = 4;

    // If AI can win, make winning move
    for (const cell of emptyCells) {
        cell.textContent = 'O';
        cell.classList.add('player2');
        if (checkWinner('player2')) {
            return makeMove(cell);
        }
        cell.textContent = '';
        cell.classList.remove('player2');
    }

    // If player can win, block their winning move
    for (const cell of emptyCells) {
        cell.textContent = 'X';
        cell.classList.add('player1');
        if (checkWinner('player1')) {
            cell.textContent = '';
            cell.classList.remove('player1');
            return makeMove(cell);
        }
        cell.textContent = '';
        cell.classList.remove('player1');
    }

    // Take corners if available
    for (const corner of corners) {
        if (emptyCells.find(cell => parseInt(cell.dataset.index) === corner)) {
            const cornerCell = emptyCells.find(cell => parseInt(cell.dataset.index) === corner);
            return makeMove(cornerCell);
        }
    }

    // Take center if available
    if (emptyCells.find(cell => parseInt(cell.dataset.index) === center)) {
        const centerCell = emptyCells.find(cell => parseInt(cell.dataset.index) === center);
        return makeMove(centerCell);
    }

    // Make a random move
    playAIRandom();
}

// AI Move: Hard
function playAIHard() {
    const emptyCells = Array.from(board.children).filter(cell => !cell.textContent);
    const corners = [0, 2, 6, 8];
    const center = 4;

    // If AI can win, make winning move
    for (const cell of emptyCells) {
        cell.textContent = 'O';
        cell.classList.add('player2');
        if (checkWinner('player2')) {
            return makeMove(cell);
        }
        cell.textContent = '';
        cell.classList.remove('player2');
    }

    // If player can win, block their winning move
    for (const cell of emptyCells) {
        cell.textContent = 'X';
        cell.classList.add('player1');
        if (checkWinner('player1')) {
            cell.textContent = '';
            cell.classList.remove('player1');
            return makeMove(cell);
        }
        cell.textContent = '';
        cell.classList.remove('player1');
    }

    // Take corners if available
    for (const corner of corners) {
        if (emptyCells.find(cell => parseInt(cell.dataset.index) === corner)) {
            const cornerCell = emptyCells.find(cell => parseInt(cell.dataset.index) === corner);
            return makeMove(cornerCell);
        }
    }

    // Take center if available
    if (emptyCells.find(cell => parseInt(cell.dataset.index) === center)) {
        const centerCell = emptyCells.find(cell => parseInt(cell.dataset.index) === center);
        return makeMove(centerCell);
    }

    // Make a random move
    playAIRandom();
}

// AI Move: Superhard
function playAISuperhard() {
    const emptyCells = Array.from(board.children).filter(cell => !cell.textContent);

    // If AI can win, make winning move
    for (const cell of emptyCells) {
        cell.textContent = 'O';
        cell.classList.add('player2');
        if (checkWinner('player2')) {
            return makeMove(cell);
        }
        cell.textContent = '';
        cell.classList.remove('player2');
    }

    // If player can win, block their winning move
    for (const cell of emptyCells) {
        cell.textContent = 'X';
        cell.classList.add('player1');
        if (checkWinner('player1')) {
            cell.textContent = '';
            cell.classList.remove('player1');
            return makeMove(cell);
        }
        cell.textContent = '';
        cell.classList.remove('player1');
    }

    // Make a random move
    playAIRandom();
}

// Function to play the win tune
function playWinTune() {
    winTune.play();
}

// Function to play the draw tune
function playDrawTune() {
    drawTune.play();
}

// Function to submit feedback
function submitFeedback() {
    const researchInterest = document.getElementById('research-interest').value;
    const strategy = document.getElementById('strategy').value;
    const feedback = document.getElementById('feedback').value;

    // Example of processing the feedback
    console.log('Research Interest:', researchInterest);
    console.log('Strategy:', strategy);
    console.log('Feedback:', feedback);

    // Display a message to the user
    document.getElementById('message').innerText = 'Thank you for your feedback!';
}

// Function to hide the rules modal and start the game
function startGame() {
    document.getElementById('rules-modal').style.display = 'none';
}

// Add event listener to the start game button
document.getElementById('start-game-button').addEventListener('click', startGame);

// Display greeting when the game starts
window.onload = displayGreeting;