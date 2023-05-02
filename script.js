const gameBoard = (() => {
	let board = ['', '', '', '', '', '', '', '', ''];

	const render = () => {
		const table = document.querySelector('table');

		for (let i = 0; i < table.rows.length; i++) {
			for (let j = 0; j < table.rows[i].cells.length; j++) {
				table.rows[i].cells[j].textContent = board[i * 3 + j];
			}
		}

		console.log('table', table);
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
