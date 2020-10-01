let control = {};

const Gameboard = (() => {
	let arr = [ '', '', '', '', '', '', '', '', '' ];
	return {
		arr
	};
})();

for (let i = 0; i < 9; i++) {
	const wrapper = document.querySelector('.wrapper');
	const div = document.createElement('DIV');
	div.classList.add('gameboard-div');
	div.innerHTML = Gameboard.arr[i];
	div.dataset.place = i;
	wrapper.appendChild(div);
}

const players = (name) => {
	let turn = 1;
	const playerOneMove = () => {
		const divs = document.querySelectorAll('.gameboard-div');
		divs.forEach((div) => {
			div.addEventListener('click', () => {
				const z = div.dataset.place;
				Gameboard.arr[z] = 'x';
				div.innerText = 'x';
			});
		});
	};
	const playerSecondMove = () => {
		const divs = document.querySelectorAll('.gameboard-div');
		divs.forEach((div) => {
			div.addEventListener('click', () => {
				const z = div.dataset.place;
				Gameboard.arr[z] = 'o';
				div.innerText = 'o';
			});
		});
	};
	const endGame = () => {
		const wrapper = document.querySelector('.wrapper');
		wrapper.addEventListener('click', () => {
			var div = document.createElement('div');
			wrapper.appendChild(div);
			div.innerText = 'The winner is';
		});
	};
	const game = () => {
		console.log(turn);
		if (turn < 9) {
			if (turn % 2 == 0) {
				playerOneMove();
				turn += 1;
			} else if (turn % 2 != 0) {
				playerSecondMove();
				turn += 1;
			}
		} else if ((turn = 9)) {
			turn += 1;
			endGame();
			console.log('xxx');
		}
	};
	return { name, game, playerOneMove };
};
const player = players();
player.playerOneMove();
const divs = document.querySelectorAll('.gameboard-div');
divs.forEach((div) => {
	div.addEventListener('click', () => {
		player.game();
	});
});
