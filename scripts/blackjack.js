function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function generateTable() {
  let none_card = {
    suit: null,
    value: null,
  };
  for (let i = 0; i < 7; ++i) {
    document
      .getElementById("user-table")
      .appendChild(cardConstructor(none_card, "none-card", "none"));
    document
      .getElementById("dealer-table")
      .appendChild(cardConstructor(none_card, "none-card", "none"));
  }
}

function checkTotal() {
  if (user.getTotal() > 21) {
    verdictDisplay("lose");
    endGame();
  }
  else if(user.getTotal() === 21) {
    verdictDisplay("win");
    endGame();
  }
}

function verdict() {
  if (
    (user.getTotal() > dealer.getTotal() && user.getTotal() <= 21) ||
    dealer.getTotal() > 21
  ) {
    verdictDisplay("win");
  } else if (user.getTotal() == dealer.getTotal()) {
    verdictDisplay("draw");
  } else verdictDisplay("lose");
  endGame();
}

function startGame() {
  generateTable();
  shuffle(deck);
  addCard("user", "card", "suit");
  addCard("user", "card", "suit");
  addCard("dealer", "card", "suit");
  btn_take.removeAttribute("disabled", true);
  btn_stop.removeAttribute("disabled", true);
  checkTotal();
}

async function dealerPlay() {
  let dealer_total = dealer.getTotal();
  while (dealer_total < 17) {
    await sleep(1000).then(() => {
      addCard("dealer", "card", "suit");
    });
    dealer_total = dealer.getTotal();
  }
  verdict();
}

function endGame() {
  user.restart();
  dealer.restart();
}
