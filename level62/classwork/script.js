//<> შექმენით ფუნქცია რომელსაც გადაეცემა ორი მასივი და დააბრუნებს მასივს
//<>მხოლოდ იმ ელემენტებით რომლებიც ამ ორ მასივში არ ემთხვევა

function sortArray(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        //// მსგავსი ელემენტები ახალ მასივში ჩაიწერება
        newArr.push(arr1[i]);
        //// მოინიშნება ელემენტი გამოყენებულად
        arr2[j] = null;
        /// break საჭიროა რადგან იგივე ელემენტის შემთხვევაში ორჯერ არ გამოიტანოს
        break;
      }
    }
  }
  return newArr;
}
console.log(sortArray([12, 34, 5, 2], [1, 34, 5, 5, 3, 23]));

//<> დაწერეთ bubble სორტის ალგორითმი

//// რიცხვების კლების მიხედვით დალაგების ფუნქცია (bubble sort)
function bubbleSort(mainArr) {
  for (let i = 0; i < mainArr.length; i++) {
    for (let j = 0; j < mainArr.length - i - 1; j++) {
      //| თუ ახლანდელი რიცხვი მეტია შემდგომზე გაუცვალოს ადგილები
      if (mainArr[j] > mainArr[j + 1]) {
        //\ დროებითი ცვლადი რომ შეინახოს ახლანდელი რიცხვი
        let temp = mainArr[j];
        //* ადგილები გაცვალოს ისე რომ დიდი რიცხვი მოათავსოს მაღალ ინდექსზე
        mainArr[j] = mainArr[j + 1];
        //<> პატარა რიცხვი მოთავსდება ახლანდელ ინდექსზე
        mainArr[j + 1] = temp;
      }
    }
  }
  console.log(mainArr);
}
let arr = [14, 43, 63, 235, 147];

bubbleSort(arr);
