function convert(string) {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    arr.push(Number(i));
  }
  return arr;
}

console.log(
  `from this => "1245093095602" to this => ${convert("1245093095602")}`
);
