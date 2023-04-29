// Factory function for creating players
const createPlayer = (name, symbol) => {
	const getName = () => name;
	const getSymbol = () => symbol;
	return { getName, getSymbol };
};

// Factory function for creating the game board
const createGameBoard = () => {
	let board = ['', '', '', '', '', '', '', '', ''];
	console.log('Board', board);

	const getBoard = () => board;

	const makeMove = (index, symbol) => {
		if (board[index] === '') {
			board[index] = symbol;
			return true;
		} else {
			return false;
		}
	};

	const checkWin = () => {
		const winConditions = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let condition of winConditions) {
			if (
				board[condition[0]] !== '' &&
				board[condition[0]] === board[condition[1]] &&
				board[condition[1]] === board[condition[2]]
			) {
				return true;
			}
		}

		return false;
	};

	const checkTie = () => {
		return !board.includes('');
	};

	const resetBoard = () => {
		board = ['', '', '', '', '', '', '', '', ''];
	};

	return { getBoard, makeMove, checkWin, checkTie, resetBoard };
};

// Factory function for creating the game
const createGame = (player1, player2) => {
	let currentPlayer = player1;
	let gameBoard = createGameBoard();

	const switchPlayer = () => {
		currentPlayer = currentPlayer === player1 ? player2 : player1;
	};

	const makeMove = (index) => {
		if (gameBoard.makeMove(index, currentPlayer.getSymbol())) {
			if (gameBoard.checkWin()) {
				console.log(currentPlayer.getName() + ' wins!');
				gameBoard.resetBoard();
			} else if (gameBoard.checkTie()) {
				console.log('Tie game!');
				gameBoard.resetBoard();
			} else {
				switchPlayer();
			}
		} else {
			console.log('Invalid move, try again.');
		}
	};

	console.log('gameboard', gameBoard.getBoard());

	return { makeMove };
};

// Example usage
const player1 = createPlayer('Player 1', 'X');
const player2 = createPlayer('Player 2', 'O');
const game = createGame(player1, player2);
console.log('game', game);

game.makeMove(0); // Player 1 makes a move
game.makeMove(1); // Player 2 makes a move
game.makeMove(3); // Player 1 makes a move
game.makeMove(4); // Player 2 makes a move
game.makeMove(6); // Player 1 makes a move and wins!
game.makeMove(0); // Board is reset, game starts over
