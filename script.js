const gameBoard = (() => {
	let board = ['', '', '', '', '', '', '', '', ''];

	const render = () => {
		const table = document.querySelector('table');

		for (let i = 0; i < table.rows.length; i++) {
			for (let j = 0; j < table.rows[i].cells.length; j++) {
				table.rows[i].cells[j].textContent = board[i * 3 + j];
			}
		}
	};

	return {
		render,
		board,
	};
})();

// player factory function
const createPlayer = (name, marker) => {
	return {
		name,
		marker,
	};
};

// Module
const game = (() => {
	let currentPlayer;
	let player1;
	let player2;

	const startGame = (name1, marker1, name2, marker2) => {
		player1 = createPlayer(name1, marker1);
		player2 = createPlayer(name2, marker2);
		gameBoard.render();
		currentPlayer = player1;
		const currentPlayerDisplay = document.querySelector('.current-player');
		currentPlayerDisplay.textContent = `${player1.name} is playing...`;
	};

	const checkWin = () => {
		const winningCombinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < winningCombinations.length; i++) {
			const [a, b, c] = winningCombinations[i];
			if (
				gameBoard.board[a] !== '' &&
				gameBoard.board[a] === gameBoard.board[b] &&
				gameBoard.board[b] === gameBoard.board[c]
			) {
				return true;
			}
		}

		return false;
	};

	const checkTie = () => {
		return gameBoard.board.every((cell) => cell !== '');
	};

	const switchPlayer = () => {
		if (currentPlayer === player1) {
			currentPlayer = player2;
		} else {
			currentPlayer = player1;
		}

		const currentPlayerDisplay = document.querySelector('.current-player');
		currentPlayerDisplay.textContent = `${currentPlayer.name} is playing...`;
	};

	const gameOver = () => {
		const winnerDisplay = document.querySelector('.winner');
		const resetGame = document.querySelector('.reset-game');
		if (checkWin()) {
			winnerDisplay.textContent = `${currentPlayer.name} wins!`;
		} else {
			winnerDisplay.textContent = "It's a tie!";
		}

		resetGame.style.display = 'revert';

		resetGame.addEventListener('click', () => {
			location.reload();
		});
	};

	const makeMove = (cellIndex) => {
		if (gameBoard.board[cellIndex] !== '') {
			return false;
		}
		gameBoard.board[cellIndex] = currentPlayer.marker;

		gameBoard.render();

		if (checkWin() || checkTie()) {
			gameOver();
		} else {
			switchPlayer();
		}
	};

	return {
		startGame,
		makeMove,
	};
})();

// Initialization of modules / usage
const startButton = document.getElementById('start');
startButton.addEventListener('click', () => {
	const player1Name = document.getElementById('player1').value;
	const player2Name = document.getElementById('player2').value;

	const cells = document.querySelectorAll('td');

	game.startGame(player1Name, 'X', player2Name, 'O');

	cells.forEach((cell, index) => {
		cell.addEventListener('click', () => {
			game.makeMove(index);
		});
	});
});
