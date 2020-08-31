let control = {};

const Gameboard = (() => {
  let arr = ["", "", "", "", "", "", "", "", ""];
  return {
    arr,
  };
})();

for (let i = 0; i < 9; i++) {
  const wrapper = document.querySelector(".wrapper");
  const div = document.createElement("DIV");
  div.classList.add("gameboard-div");
  div.innerHTML = Gameboard.arr[i];
  div.dataset.place = i;
  wrapper.appendChild(div);
}

const players = (name) => {
  const playerOneMove = () => {
    const divs = document.querySelectorAll(".gameboard-div");
    divs.forEach((div) => {
      div.addEventListener("click", () => {
        z = div.dataset.place;
        Gameboard.arr[z] = "x";
        div.innerText = "x";
      });
    });
  };
  const playerSecondMove = () => {
    const divs = document.querySelectorAll(".gameboard-div");
    divs.forEach((div) => {
      div.addEventListener("click", () => {
        z = div.dataset.place;
        Gameboard.arr[z] = "o";
        div.innerText = "o";
      });
    });
  };
  return { name, playerOneMove, playerSecondMove };
};

const player = players("player");

player.playerOneMove();
player.playerSecondMove();
