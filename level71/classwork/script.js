function func(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    let col = [];
    for (let j = 0; j < arr.length; j++) {
      col.push(arr[j][i]);
    }
    console.log(col);
  }
}
func([
  [12, 3, 51, 12, 3],
  [13, 5, 26, 65, 31],
]);
