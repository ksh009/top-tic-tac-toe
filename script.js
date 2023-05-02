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

// Initialization of modules / usage
const startButton = document.getElementById('start');
startButton.addEventListener('click', () => {
	console.log('Btn clicked...');
	const player1Name = document.getElementById('player1').value;
	const player2Name = document.getElementById('player2').value;
	const currentPlayerDisplay = document.querySelector('.current-player');

	currentPlayerDisplay.textContent =
		currentPlayerDisplay.textContent === '' || player1Name
			? player2Name
			: player1Name;
});

/*
	Functionality still needed 
	A function that can handle the following: 
		- 1. Starting game 
		- 2. Resetting game 
		- 3. Making a move 
		- 4. Switch a player after player move 
		- 5. Check for the winning conditions 
			- This function is complete
		- 6. check if there is a tie
		- 7. Check if the game is over 

*/
