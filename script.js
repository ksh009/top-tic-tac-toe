// Handle game start modal
// const modal = document.getElementById('newGameModal');
// const newGamebtn = document.getElementById('newGameBtn');
// const modalCloseBtn = document.getElementById('closeChar');

// newGamebtn.onclick = function () {
// 	modal.style.display = 'flex';
// 	modal.style.flexDirection = 'row';
// };

// modalCloseBtn.onclick = function () {
// 	modal.style.display = 'none';
// };

// window.onclick = function (event) {
// 	if (event.target == modal) {
// 		modal.style.display = 'none';
// 	}
// };

// Game board and squares
const board = document.querySelector('.board');
const squares = document.querySelectorAll('.square');

// Current player
let currentPlayer = 'X';

// Event listener for each square
squares.forEach((square) => {
	square.addEventListener('click', () => {
		if (square.textContent === '') {
			square.classList.add(currentPlayer.toLowerCase());
			square.textContent = currentPlayer;

			currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		}
	});
});
