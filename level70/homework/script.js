function matrix(rows, cols) {
  let result = [];

  let counter = 1;

  //<> გადავუყვეთ რიგებს
  for (let i = 0; i < rows; i++) {
    //// რიგების მასივი
    let row = [];
    /// გადავუყვეთ სვეტებს
    for (let j = 0; j < cols; j++) {
      //| დავუმატოთ ახლანდელი counter-ის მნიშვნელობა რიგს
      row.push(counter);
      counter++;
    }
    //\ დავამატოთ რიგი საბოლოო მასივში
    result.push(row);
  }

  return result;
}

console.log(matrix(4, 6));
