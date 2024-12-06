// function getMatrix(number) {

//   //// მთავარი სია
//     let result = []
//     //| გადავუყვეთ სიის რიგებს
//      for (let i = 0; i < number; i++) {
//       //| რიგების სია
//       let row = [];
//       //\ გადავუყვებით რიგში მოთავსებულ ელემენტებს 
//       for (let j = 0; j < number; j++) {
//         //<> თუ სვეტის და რიგის ინდექსები ტოლია
//        //<> სიაში დაემატება 1
//         if (i === j) {
//           row.push(1);
//           //<> სხვა შემთხვევაში დაემატება 0 
//         } else {
//           row.push(0);
//         }
//       }
//       //// მთავარ სიაში დაემატება რიგები
//       result.push(row);
//     }
  
//     return result;
// } 


//<> exercise N2 
//<> ა)true  ბ)false გ)true




  // let num = prompt("Enter number of N")
  // let array = [];
  // for (let i = 0; i <num ; i++){
  //   let input = prompt("Enter Numbers: ")
  //   array.push(Number(input))
  // }




let n = prompt("შეიყვანეთ N:");


let array = [];


for (let i = 0; i < n; i++) {
    let num = prompt("შეიყვანეთ რიცხვი:");
    array.push(Number(num));  
}


console.log(array);
