function onlyZeroes(num) {
  let numStr = num.toString();
  let ans = Number(numStr[0] + 1);

  for (let i = 1; i < numStr.length; i++) {
    ans += "0";
  }
  return ans;
}

console.log(onlyZeroes(782));
