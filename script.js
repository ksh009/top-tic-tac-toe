const gameBoard = (() => {
	// private variable to represent the gameboard array
	let board = ['X', 'O', 'O', 'X', 'O', 'O', 'X', 'X', 'O'];

	// public function to render the gameboard to the DOM
	const render = () => {
		// select the table element in the DOM
		const table = document.querySelector('table');
		console.log('table', table);
		console.log('table.rows', table.rows);

		// loop through each cell of the table and fill it with the corresponding value from the gameboard array
		for (let i = 0; i < table.rows.length; i++) {
			for (let j = 0; j < table.rows[i].cells.length; j++) {
				table.rows[i].cells[j].textContent = board[i * 3 + j];
			}
		}

		console.log('table', table);
	};

	// public API
	return {
		render,
	};
})();

gameBoard.board = ['X', 'O', 'O', 'X', 'X', 'O', 'X', 'X', 'O'];
gameBoard.render();

// player factory function
const createPlayer = (name, marker) => {
	console.log('Player name', name);
	console.log('Player marker', marker);

	return {
		name,
		marker,
	};
};

// Use function in bigger function later
/*
	Check winning conditions
*/
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

/* OLD CODE
// Game board and squares
const newGamebtn = document.getElementById('newGameBtn');
const gameBtnText = document.querySelector('.game-btn-text');
const board = document.querySelector('.board');
const squares = document.querySelectorAll('.square');

// Current player
let currentPlayer = 'X';

// Event listener for each square
squares.forEach((square) => {
	square.addEventListener('click', () => {
		if (square.textContent === '') {
			square.classList.add(currentPlayer);
			square.textContent = currentPlayer;

			currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		}
	});
});
*/
