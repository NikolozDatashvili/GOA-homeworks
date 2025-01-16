//// array sort (ascending, descending, none)

function isSortedAndHow(array) {
  let ascending = true;
  let descending = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      ascending = false;
    } else if (array[i] > array[i - 1]) {
      descending = false;
    }
  }

  if (ascending) {
    return "yes, ascending";
  } else if (descending) {
    return "yes, descending";
  } else {
    return "no";
  }
}
console.log(isSortedAndHow([1, 2, 43, 63, 765]));

/// sort with sorting array
function sort(initialArray, sortingArray) {
  /// ახალი მასივი დალაგებული ელემენტებისთვის

  let sortedArray = new Array(initialArray.length);

  //// გადავუყვეთ sortingArray-ის ელემენტებს

  for (let i = 0; i < sortingArray.length; i++) {
    //<> ჩავსვათ ელემენტი initialArray[i]-დან `sortingArray[i]`-ის პოზიციაზე

    sortedArray[sortingArray[i]] = initialArray[i];
  }

  return sortedArray;
}
