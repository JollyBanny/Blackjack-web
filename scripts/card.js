function create_card(suit, value) {
  return {
    suit: suit,
    value: value,
  };
}

function setSuit(suit, cardElement) {
  let suit_ = cardElement.getElementsByClassName("suit")[0];
  switch (suit) {
    case 1: {
      suit_.classList.add("heart");
      break;
    }
    case 2: {
      suit_.classList.add("spades");
      break;
    }
    case 3: {
      suit_.classList.add("clubs");
      break;
    }
    case 4: {
      suit_.classList.add("diamond");
      break;
    }
    default:
      break;
  }
}

function setName(value, cardElement) {
  let name_ = cardElement.getElementsByClassName("name")[0];
  switch (value) {
    case 1: {
      name_.innerHTML = "A";
      break;
    }
    case 11: {
      name_.innerHTML = "J";
      break;
    }
    case 12: {
      name_.innerHTML = "Q";
      break;
    }
    case 13: {
      name_.innerHTML = "K";
      break;
    }
    default:
      name_.innerHTML = `${value}`;
      break;
  }
}

function cardConstructor(card, type, suit) {
  return create_card_element(
    "div",
    [type],
    [
      create_card_element(
        "div",
        ["info"],
        [
          create_card_element("div", [suit], []),
          create_card_element("div", ["name"], []),
        ]
      ),
    ]
  );
}

function addCard(id, type, suit) {
  let card;
  if (id == "user") {
    user.takeCard(deck);
    card = user.getLastCard();
  } else if (id == "dealer") {
    dealer.takeCard(deck);
    card = dealer.getLastCard();
  }

  let cardElement = cardConstructor(card, type, suit);
  setSuit(card.suit, cardElement);
  setName(card.value, cardElement);
  document.getElementById(`${id}-cards`).appendChild(cardElement);

  document
    .getElementById("user")
    .getElementsByClassName(
      "name-player"
    )[0].innerHTML = `User: ${user.getTotal()}`;
  document
    .getElementById("dealer")
    .getElementsByClassName(
      "name-player"
    )[0].innerHTML = `Dealer: ${dealer.getTotal()}`;

  let table = document.getElementById(`${id}-table`);
  table.children[table.children.length - 1].remove();
}
