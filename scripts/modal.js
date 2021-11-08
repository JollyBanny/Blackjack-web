let modal = document.getElementById("modal");

let modal_wrap = modal.getElementsByClassName("modal-wrap")[0];
let modal_text = modal.getElementsByClassName("modal-text")[0];

let btn_again = document.getElementById("btn-again");

btn_again.addEventListener("click", () => {
  modal.getElementsByClassName("modal-wrap")[0].classList.add("modal-hide");
  clearTable();
  startGame();
});

function verdictDisplay(stat) {
  switch (stat) {
    case "win":
      modal_text.innerHTML = "YOU WIN!";
      break;
    case "lose":
      modal_text.innerHTML = "YOU LOSE!";
      break;
    case "draw":
      modal_text.innerHTML = "DRAW!";
      break;
    default:
      break;
  }
  modal_wrap.classList.remove("modal-hide");
}
