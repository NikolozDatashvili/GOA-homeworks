//<> exercise N1  (codewars)

/// მუშაობს მაგრა codewars-ში რაღაც ჭირს
function HQ9(code) {
  if (code === "H") {
    return "Hello World!";
  } else if (code === "Q") {
    return code;
  } else if (code === "9") {
    let lyrics = "";
    for (let i = 99; i > 0; i--) {
      lyrics += `${i} bottles of beer on the wall, ${i} bottles of beer.\n`;
      lyrics += `Take one down and pass it around, ${
        i - 1 === 0 ? "no more" : i - 1
      } bottle${i - 1 === 1 ? "" : "s"} of beer on the wall.\n\n`;
    }
    lyrics += `No more bottles of beer on the wall, no more bottles of beer.\n`;
    lyrics += `Go to the store and buy some more, 99 bottles of beer on the wall.`;
    return lyrics;
  }
}

console.log(HQ9("9"));

//<> exercise N2  (codewars)

function likes(names) {
  /// თუ არავის სახელია გადმოცემული
  if (names.length === 0) {
    return "no one likes this";
    /// თუ 1 სახელია გადმოცემული
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
    /// თუ 2 სახელია გადმოცემული
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
    /// თუ 3 სახელია გადმოცემული
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    /// თუ 3ზე მეტი სახელია გადმოცემული
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
