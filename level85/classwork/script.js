//<> character concentation
function charConcat(str) {
  let result = "";
  let left = 0;
  let right = str.length - 1;
  let i = 1;

  while (left < right) {
    result += str[left] + str[right] + i;
    left++;
    right--;
    i++;
  }

  return result;
}
