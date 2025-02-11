function sumOfNumber2(num) {
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = (num - (num % 10)) / 10;
  }

  return sum;
}
