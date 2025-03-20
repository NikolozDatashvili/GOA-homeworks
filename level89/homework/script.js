userInput = prompt("Enter Text here: ");

function textReverser(text) {
  newText = "";

  for (let i = text.length - 1; i >= 0; i--) {
    newText += text[i];
  }

  return newText;
}

console.log(textReverser(userInput));
