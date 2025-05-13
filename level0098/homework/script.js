//<> exercise N1
//// share prices
function sharePrice(invested, changes) {
  for (let i = 0; i < changes.length; i++) {
    invested += (changes[i] / 100) * invested;
  }
  //// ვაქცევთ სტრინგად და ვაბრუნებთ ასეულის სიზუსტით
  return String(invested.toFixed(2));
}

//<> exercise N2
//// Sum of power of 2

// ??????

//<> exercise N3
//// Substring fun
function nthChar(words) {
  let result = "";

  for (let i = 0; i < words.length; i++) {
    //// მერამდენე ინდექზეცაა სიტყვა იმ char-ს დუმატებს result-ს
    result += words[i][i];
  }

  return result;
}

//<> exercise N4
//// Missing number
function missingNo(nums) {
  let arr = nums.sort((a, b) => a - b);
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] != i) {
      return i;
    }
  }
}

//<> exercise N5
//// between extremes

function betweenExtremes(numbers) {
  let maxN = numbers[0];
  let minN = numbers[0];

  for (let num of numbers) {
    if (num > maxN) {
      maxN = num;
    }
    if (num < minN) {
      minN = num;
    }
  }

  return maxN - minN;
}
