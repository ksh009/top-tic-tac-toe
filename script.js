const gameBoard = (() => {
	// private variable to represent the gameboard array
	let board = ['X', 'O', '', 'X', '', 'O', '', '', ''];

	// public function to render the gameboard to the DOM
	const render = () => {
		// select the table element in the DOM
		const table = document.querySelector('table');

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

gameBoard.board = ['X', 'O', '', 'X', '', 'O', '', '', ''];
gameBoard.render();

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
