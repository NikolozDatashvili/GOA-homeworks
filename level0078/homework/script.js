function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == target) {
        return `First num: ${numbers[i]}
operation: "+"
Second num: ${numbers[j]}   
their indexes: [${[i, j]}]`;
      } else if (numbers[i] - numbers[j] == target) {
        return `First num: ${numbers[i]}
operation: "-"
Second num: ${numbers[j]}   
their indexes [${[i, j]}]`;
      }
    }
  }
}

console.log(twoSum([12, 14, 4, 3, 2], 1));
