//// Task 1
function sayHello(name01: string): string {
  return `GIIRRLLL YOU REALLY GOT ME GOING ${name01}`;
}

console.log(sayHello("KINKS"));
//// Task 2
function easyCalc(a: number, b: number): number[] {
  return [a + b, a * b, a - b, a / b];
}
console.log(easyCalc(10, 53));
//// Task 3
function easyMult(a: number, b: number = 2): number {
  return a * b;
}
console.log(easyCalc(10, 53));

//// Task 4

let names: string[] = ["nika", "gio", "lasha"];
console.log(names);
let numbers: number[] = [12, 43, 6578, 6, 132];
for (let i: number = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.log(numbers);
