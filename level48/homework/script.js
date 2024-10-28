/// exercise N1
function myFunc(row, col) {
  /// შევქმენი i და j ცვლადები default მნიშვნელობა (1)
  /// შემდეგ nested for loop-ით გადავუვლი row-ს და col-ს
  /// და დავუმატებ ერთს i-ს და j-ს იქამდე სანამ
  /// row-ს და col-ს გაუტოლდება
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      console.log("row: " + i + " " + "col: " + j);
    }
  }
}

myFunc(4, 2);

// exercise N2

function multiplication() {
  //// მთავარი მასივი (arr)
  let mainArr = [];
  //// for ციკლი რომელიც i-ის უცვლის მნიშვნელობას სანამ 10 არ გახდება
  for (let i = 1; i <= 10; i++) {
    //// შიდა მასივები იმდენი რამდენ მნიშვნელობასაც i მიიღებს ანუ (10-ცალი)
    let arr1 = [];
    //// for ციკლი რომელიც j-ის უცვლის მნიშვნელობას სანამ 10 არ გახდება
    for (let j = 1; j <= 10; j++) {
      //// შიდა მასივებში შეგვაქ i-ს და j-ს ნამრავლი
      arr1.push(i * j);
    }
    //// მთავარ მასივში შეგვაქ შიდა მასივები
    mainArr.push(arr1);
  }
  //// ვაბრუნებთ მთავარ მასივს
  return mainArr;
}

console.log(multiplication());

//<> exercise N3

function higherNum(num) {
  //<> ცარიელი მასივი
  let arr = [];
  //<> for ციკლი რომელიც i-ის უცვლის მნიშვნელობას სანამ num არ გახდება
  for (let i = 1; i <= num; i++) {
    //<> for ციკლი რომელიც j-ის უცვლის მნიშვნელობას სანამ num არ გახდება
    for (let j = 1; j <= num; j++) {
      //<> თუ j>i-ზე მაშინ ცარიელი მასივში იქამდე დაემატება i და j სანამ
      //<> for ციკლებში j და i გაუტოლდება შემოტანილ რიცხვს
      if (j > i) {
        arr.push([i, j]);
      }
    }
  }

  return arr;
}

console.log(higherNum(6));
