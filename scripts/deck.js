function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function create_deck() {
  let deck = [];
  for (let i = 1; i < 5; ++i) {
    for (let j = 1; j < 14; ++j) {
      deck.push(create_card(i, j));
    }
  }
  return deck;
}

let deck = create_deck();