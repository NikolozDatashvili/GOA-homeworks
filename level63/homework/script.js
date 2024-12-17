// let choices = ["1.Scissors", "2.Paper", "3.Rock"];
// let playAgain = "yes"; //<> ცვლადი while loop-ის საკონტროლებლად

// //<> ქულები
// let player1Score = 0;
// let player2Score = 0;
// ////  თამაში გაგრძელდება იქამდე სანამ input იქნება yes-ს ან y-ს
// while (playAgain.toLowerCase() === "yes" || playAgain.toLowerCase() === "y") {
//   console.log("Choices:", choices);

//   let player1 = parseInt(prompt("Player1 choice: "));
//   let player2 = parseInt(prompt("Player2 choice: "));
//   //* ფრის შემთხვევები
//   if (player1 === player2) {
//     console.log("It is a Draw");
//   } else if (
//     //* პირველი მოთამაშის გამარჯვების შემთხვევები
//     (player1 === 1 && player2 === 2) ||
//     (player1 === 2 && player2 === 3) ||
//     (player1 === 3 && player2 === 1)
//   ) {
//     console.log("Player 2 Wins");
//     player2Score++; //// მეორე მოთამაშის ქულა
//   } else if (
//     //* მეორე მოთამაშის გამარჯვების შემთხვევები
//     (player2 === 1 && player1 === 2) ||
//     (player2 === 2 && player1 === 3) ||
//     (player2 === 3 && player1 === 1)
//   ) {
//     console.log("Player 1 Wins");
//     player1Score++; //// პირველი მოთამაშის ქულა
//   } else {
//     console.log("Invalid input");
//   }

//   //<> გამოიტანს ქულებს ყოველი რაუნდის შემდეგ
//   console.log(
//     "Scores: Player1 = " + player1Score + " | Player2 = " + player2Score
//   );

//   playAgain = prompt("Do you want to play again? (yes or no): ");
// }

// console.log(
//   "Final Scores: Player1 = " + player1Score + " | Player2 = " + player2Score
// );
// console.log("Thanks for playing!");

//<> exercise N2

function playerAbs(p1, p2) {
  let strength1 = 1 * p1[0]; //// პირველი მოთამაშის ძალა
  let speed1 = 2 * p1[1]; //// სიჩქარე
  let iq1 = (strength1 + speed1) * (p1[2] / 10); //// ინტელექტი
  let score1 = strength1 + speed1 + iq1; //// სულ ქულა
  let strength2 = 1 * p2[0]; //! მეორე მოთამაშის ძალა
  let speed2 = 2 * p2[1]; //! სიჩქარე
  let iq2 = (strength2 + speed2) * (p2[2] / 10); //! ინტელექტი
  let score2 = strength2 + speed2 + iq2; //! სულ ქულა

  /// პირველის მოგება
  if (score1 > score2) {
    console.log("Player1 Wins");
    ///| მეორის მოგება
  } else if (score2 > score1) {
    console.log("Player2 Wins");
    //\ ფრე
  } else {
    console.log("It's a draw");
  }
  //// სულ ორივეს ქულების გამოტანა
  console.log(`Player1 score: ${score1}`);
  console.log(`Player2 score: ${score2}`);
}

playerAbs([35, 30, 14], [55, 40, 10]);
