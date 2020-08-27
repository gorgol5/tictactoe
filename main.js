let control = {};

// const module = (() => {
//   const add = (a, b) => a + b;

//   return {
//     add,
//   };
// })();

// const factory = (name, level) => {
//     let health = level * 2;
//     const getLevel = () => level;
//     const getName  = () => name;
//     const die = () => {
//       // uh oh
//     };
//     const damage = x => {
//       health -= x;
//       if (health <= 0) {
//         die();
//       }
//     };
//     const attack = enemy => {
//       if (level < enemy.getLevel()) {
//         damage(1);
//         console.log(`${enemy.getName()} has damaged ${name}`);
//       }
//     };
//     return {attack, damage, getLevel, getName}
//   };

const Gameboard = (() => {
  let arr = ["", "0", "x", "0", "x", "0", "x", "0", "x"];
  return {
    arr,
  };
})();

for (let i = 0; i < 9; i++) {
  const wrapper = document.querySelector(".wrapper");
  const div = document.createElement("DIV");
  div.classList.add("gameboard-div");
  div.innerHTML = Gameboard.arr[i];
  wrapper.appendChild(div);
}
const players = () => {
  let turn = 0;
  const playerOneMove = function () {
    const divs = document.querySelectorAll(".gameboard-div");
    divs.forEach((div) => {
      div.addEventListener("click", () => {
        Gameboard.arr[0] = "x";
        // dodać innerHTML
        // console.log("xxx");
      });
    });
  };
  return { playerOneMove };
};
players.playerOneMove;
