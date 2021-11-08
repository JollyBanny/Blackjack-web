function User(name_) {
  let name = name_;
  let cards = [];
  let total = 0;

  function takeCard(deck) {
    let card = deck.pop();
    cards.push(card);
    if (card.value === 1 && total < 11) {
      total += 11;
    } else if (card.value > 10) {
      total += 10;
    } else {
      total += card.value;
    }
  }

  function getName() {
    return name;
  }
  function getTotal() {
    return total;
  }

  function getLastCard() {
    return cards[cards.length - 1];
  }

  function getCards() {
    return cards;
  }

  function restart() {
    let card = cards.pop();
    while (card) {
      deck.push(card);
      card = cards.pop();
    }
    total = 0;
  }

  return Object.freeze({
    takeCard,
    getTotal,
    getLastCard,
    getCards,
    getName,
    restart,
  });
}

let user = new User("user");
let dealer = new User("dealer");
