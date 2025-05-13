function sortUniques(arr) {
  let uniques = [];
  /// გადავუყვეთ array-ის ელემენტებს
  for (let i = 0; i < arr.length; i++) {
    //// ჩავთვალოთ რომ default-ად ელემენტი უნიკალურია
    let isUnique = true;
    //<> შევამოწმოთ თუ არსებობს ახლანდელი ელემენტის ნაირი ელემენტი
    for (let j = 0; j < arr.length; j++) {
      //\ თუ i ელემენტის ინდექსი და j ელემენტის ინდექსი არ ემთხვევა
      //| და თუ ელემენტები ემთხვევა მაშინ არაა უნიკალური
      if (arr[i] === arr[j] && i !== j) {
        isUnique = false;
        break;
      }
    }
    //// თუ უნიკალურია დავამატებთ ახალ სიაში

    if (isUnique) {
      uniques.push(arr[i]);
    }
  }
  return uniques;
}

console.log(`Uniques list: ${sortUniques([12, 3, 12, " 21", " hello"])}`);
