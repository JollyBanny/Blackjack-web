function init() {
  
}

function save() {
  localStorage.setItem(
    "user",
    JSON.stringify({
      name: user.getName(),
      cards: user.getCards(),
      total: user.getTotal(),
    })
  );
  localStorage.setItem(
    "dealer",
    JSON.stringify({
      name: dealer.getName(),
      cards: dealer.getCards(),
      total: dealer.getTotal(),
    })
  );
  localStorage.setItem("deck", JSON.stringify(deck));
}
