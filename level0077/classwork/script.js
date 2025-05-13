// function points(games) {
//   let score = 0;
//   for (let i = 0; i < games.length; i++) {
//     if (games[i][0] > games[i][2]) {
//       score += 3;
//     } else if (games[i][0] < games[i][2]) {
//       return;
//     } else if (games[i][0] == games[i][2]) {
//       score += 1;
//     }
//   }
//   return score;
// }

// function points(games) {
//   let score = 0;
//   for (let i = 0; i < games.length; i++) {
//     if (games[i][0] > games[i][2]) {
//       score += 3;
//     } else if (games[i][0] == games[i][2]) {
//       score += 1;
//     }
//   }
//   return score;
// }

function printArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArr([14, 435, 45, 31]);
