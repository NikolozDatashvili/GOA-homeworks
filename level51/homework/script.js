function myFunc(arr) {
  /// max და min ცვლადებს გავუწერე array-ის ინდექსი 0
  let max = arr[0];
  let min = arr[0];
  /// for ციკლის მეშვეობით გადავუყვებით შემოტანილ მასივს
  for (let i = 1; i < arr.length; i++) {
    /// თუ მასივის კონკრეტულ ინდექსებზე მდგომი რიცხვები
    /// მეტი იქნება max-ზე, max-ს გაუტოლებს იმ ინდექსზე მყოფ
    /// ელემენტს რომელზეც მოთავსებულია ყველაზე დიდი რიცხვი
    if (arr[i] > max) {
      max = arr[i];
    }
    //// min-ის შემთხვევაშიც თითქმის იგივეა უბრალოდ
    //// აქ პატარა რიცხვს ეძებს
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return "MAX: " + max + " " + "MIN: " + min;
}

let numbers = [33, 21, 12, 1, 237];
let result = myFunc(numbers);
console.log(result);
