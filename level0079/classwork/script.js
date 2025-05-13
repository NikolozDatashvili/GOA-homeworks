function isFlush(cards) {
  let suit = cards[0][cards[0].length - 1];

  for (let i = 1; i < cards.length; i++) {
    if (cards[i][cards[i].length - 1] !== suit) {
      return false;
    }
  }

  return true;
}
