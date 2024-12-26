function arr2D(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] % 2 === 0) {
        newArr.push(arr[i][j]);
      }
    }
  }
  return newArr;
}

console.log(
  arr2D([
    [10, 23, 14],
    [44, 53, 67],
    [72, 84, 29],
  ])
);
