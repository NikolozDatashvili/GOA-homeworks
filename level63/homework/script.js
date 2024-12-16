let choices = ["1.Scissors", "2.Paper", "3.Rock"];
let playAgain = "yes"; //<> ცვლადი while loop-ის საკონტროლებლად

//<> ქულები
let player1Score = 0;
let player2Score = 0;
////  თამაში გაგრძელდება იქამდე სანამ input იქნება yes-ს ან y-ს
while (playAgain.toLowerCase() === "yes" || playAgain.toLowerCase() === "y") {
  console.log("Choices:", choices);

  let player1 = parseInt(prompt("Player1 choice: "));
  let player2 = parseInt(prompt("Player2 choice: "));
  //* ფრის შემთხვევები
  if (player1 === player2) {
    console.log("It is a Draw");
  } else if (
    //* პირველი მოთამაშის გამარჯვების შემთხვევები
    (player1 === 1 && player2 === 2) ||
    (player1 === 2 && player2 === 3) ||
    (player1 === 3 && player2 === 1)
  ) {
    console.log("Player 2 Wins");
    player2Score++; //// მეორე მოთამაშის ქულა
  } else if (
    //* მეორე მოთამაშის გამარჯვების შემთხვევები
    (player2 === 1 && player1 === 2) ||
    (player2 === 2 && player1 === 3) ||
    (player2 === 3 && player1 === 1)
  ) {
    console.log("Player 1 Wins");
    player1Score++; //// პირველი მოთამაშის ქულა
  } else {
    console.log("Invalid input");
  }

  //<> გამოიტანს ქულებს ყოველი რაუნდის შემდეგ
  console.log(
    "Scores: Player1 = " + player1Score + " | Player2 = " + player2Score
  );

  playAgain = prompt("Do you want to play again? (yes or no): ");
}

console.log(
  "Final Scores: Player1 = " + player1Score + " | Player2 = " + player2Score
);
console.log("Thanks for playing!");
