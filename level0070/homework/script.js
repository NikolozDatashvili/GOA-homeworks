function matrix(rows, cols) {
  let result = [];

  //<> გადავუყვეთ რიგებს
  for (let i = 0; i < rows; i++) {
    //// რიგების მასივი
    let row = [];
    /// გადავუყვეთ სვეტებს
    for (let j = 0; j < cols; j++) {
      //| დავუმატოთ ახლანდელი counter-ის მნიშვნელობა რიგს
      row.push(i * cols + j);
    }
    //\ დავამატოთ რიგი საბოლოო მასივში
    result.push(row);
  }

  return result;
}

console.log(matrix(34, 1));
