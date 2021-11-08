function clearTable() {
  let id = ["user", "dealer"];
  for (let i = 0; i < 2; ++i) {
    document.getElementById(`${id[i]}-cards`).innerHTML = "";
    document.getElementById(`${id[i]}-table`).innerHTML = "";
  }
}

let btn_take = document.getElementById("btn-take");
let btn_stop = document.getElementById("btn-stop");

btn_take.addEventListener("click", () => {
  addCard("user", "card", "suit");
  checkTotal();
  save();
});

btn_stop.addEventListener("click", () => {
  btn_take.setAttribute("disabled", true);
  btn_stop.setAttribute("disabled", true);
  dealerPlay();
});

startGame();
