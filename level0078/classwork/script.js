function rowLengths(matrix) {
  let lengthes = [];
  for (let i = 0; i < matrix.length; i++) {
    lengthes.push(matrix[i].length);
  }
  return lengthes;
}

const matrix = [
  ["adafa", 94, 3, "afgg"],
  [4, 5, false, 64, 6, "53", 686, 85, 12],
  ["nika", 77, "no", true],
];
console.log(rowLengths(matrix));
