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
	console.log('Player name', name);
	console.log('Player marker', marker);

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
		console.log('Start game initialized...');
		player1 = createPlayer(name1, marker1);
		player2 = createPlayer(name2, marker2);
		gameBoard.render();
		currentPlayer = player1;
		const currentPlayerDisplay = document.querySelector('.current-player');
		currentPlayerDisplay.textContent = player1.name;
	};

	const switchPlayer = () => {
		if (currentPlayer === player1) {
			currentPlayer = player2;
		} else {
			currentPlayer = player1;
		}

		const currentPlayerDisplay = document.querySelector('.current-player');
		currentPlayerDisplay.textContent = currentPlayer.name;
	};

	const makeMove = (cellIndex) => {
		// console.log('Move made');
		// Can't manke a move when cell is not empty
		if (gameBoard.board[cellIndex] !== '') {
			console.log('Already played here!!!');
			return false;
		}

		console.log('cell available, playing here');
		gameBoard.board[cellIndex] = currentPlayer.marker;

		gameBoard.render();

		// Switch player
		switchPlayer();
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

	return {
		startGame,
		makeMove,
	};
})();

// Initialization of modules / usage
const startButton = document.getElementById('start');
startButton.addEventListener('click', () => {
	console.log('Btn clicked...');
	const player1Name = document.getElementById('player1').value;
	const player2Name = document.getElementById('player2').value;

	// Get all tds from table rows
	const cells = document.querySelectorAll('td');
	console.log('cells in usage', cells);

	// Test start game
	game.startGame(player1Name, 'X', player2Name, 'O');

	// Add event listener to each cell / td
	cells.forEach((cell, index) => {
		cell.addEventListener('click', () => {
			// Make a move
			game.makeMove(index);
		});
	});
});

/*
	Functionality still needed 
	A function that can handle the following: 
		- 1. Starting game (Complete)
		- 2. Resetting game 
		- 3. Making a move 
		- 4. Switch a player after player move 
		- 5. Check for the winning conditions 
			- This function is complete
		- 6. check if there is a tie
		- 7. Check if the game is over 

*/
