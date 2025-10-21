//<> Task 1
// TypeScript — ეს არის JavaScript-ის გაფართოება (superset),
// რომელიც ამატებს ტიპიზაციას (type system).
// ამარტივებს კოდში ერორების აღმოჩენას, რადგან კოდში აჩვენებს მათ
//<> Task 2
//// Javascript-ისგან განსხვავებით typescript-ს აქვს ტიპების კონტროლი
//// და ერორების კოდშივე აღმოჩენის უნარი
//<> Task 3

// string  ტექსტური მონაცემი let name: string = "Nika";
// number რიცხვი (მთელი ან ათწილადი) let age: number = 18;
// boolean true or false	let isActive: boolean = true;
// any	შეიძლება იყოს ნებისმიერი ტიპი let value: any = "Hello";
// array ელემენტების სია let nums: number[] = [1, 2, 3];
// tuple ელემენტების სია, განსაზღვრული სიგრძით და ტიპებით let person: [string, number] = ["Nika", 18];

//<> Task 4
// declaration keyword name: type = value
// მაგალითად: let str: string = "Nika"
//<> Task 5
let num1: number = 5;
let num2: number = 13;
console.log(num1 + num2);
//<> Task 6
// let str: string = 10; // 'number'-ის ტიპს ვერ გადავცემთ სტრინგ ტიპს
// error-ს აგდებს რადგან string-ის ტიპში ვუთითებთ რიცხვის ტიპს რაც არასწორია
// რადგან სხვადასხვა მონაცემთა ტიპები არიან ე.ი ტიპურად ერთმანეთს არ უდრიან
//<> Task 7
// ვწერთ ფუნქციის keyword-ს შემდეგ სახელს (): და ვუთითებთ რა ტიპის მონაცემს
// აბრუნებს ეს ფუნქცია
//// მაგალითი:
//// function func1(): number {
////   return 10 + 5;
//// }
//<> Task 8
//// void-ი
//// მაგალითად:
//// function func1(): number {
////   console.log(10 + 5);
//// }
//<> Task 9
function sumFunc(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number
): number {
  return a + b + c + d + e;
}
console.log(sumFunc(12, 423, 5, 32, 1));
