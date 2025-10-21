//<> Codewars 1

function decodeResistorColors(bands) {
  let obj = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    gray: 8,
    white: 9,
  };

  let bandsArr = bands.split(" ");
  let result = "";
  for (let i = 0; i < bandsArr.length; i++) {
    for (let key in obj) {
      if (key == bandsArr[i] && i <= 1) {
        result += obj[key];
      }
      if (key == bandsArr[i] && i == 2) {
        result = parseInt(result) * 10 ** obj[key];
        if (result >= 10 ** 6) {
          result = `${result / 10 ** 6}M ohms, `;
        } else if (result >= 1000 && result < 10 ** 6) {
          result = `${result / 1000}k ohms, `;
        } else {
          result = `${result} ohms, `;
        }
      }
    }
  }
  if (bandsArr.length == 4 && bandsArr[bandsArr.length - 1] == "gold") {
    result += "5%";
  } else if (
    bandsArr.length == 4 &&
    bandsArr[bandsArr.length - 1] == "silver"
  ) {
    result += "10%";
  } else {
    result += "20%";
  }

  return result;
}
