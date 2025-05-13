let userInput = prompt("Enter Text here: ");

function textReverser(text) {
  let newText = "";
  let word = "";

  for (let i = 0; i <= text.length; i++) {
    if (i < text.length && text[i] !== " ") {
      word = text[i] + word;
    } else {
      if (newText !== "") {
        newText += " ";
      }
      newText += word;
      word = "";
    }
  }

  return newText;
}

console.log(textReverser(userInput));
