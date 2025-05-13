function likes(names) {
  //<> თუ არცერთი სახელია მასივში
  if (names.length === 0) {
    return "no one likes this";
    //// თუ ერთი სახელია მასივში
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
    /// თუ ორი სახელია მასივში
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
    //\ თუ სამი სახელია მასივში
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    //| თუ სამზე მეტი სახელია მასივში
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
//<> outputs
console.log(likes(["nika", "luka", "gio", "dato", "mari", "tengo"]));
console.log(likes(["nika", "luka", "gio"]));
console.log(likes(["nika", "luka"]));
console.log(likes(["nika"]));
console.log(likes([]));
