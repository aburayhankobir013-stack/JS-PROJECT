// All DOM ELEMENTS SELECTION
const generatorBtn = document.querySelector(".generator-btn button");
const colorDisplay = document.querySelectorAll(".color-display");
const colorCode = document.querySelectorAll(".color-code");
const copyBtns = document.querySelectorAll(".copy-btn");

generatorBtn.addEventListener("click",displayColor, false);


displayColor();
function displayColor() {
  const colorCodes = colorPalette();
  let index = 0;
  colorCode.forEach(function (colorCodeBox) {
    colorCodeBox.textContent = colorCodes[index];
    colorDisplay[index].style.backgroundColor = `${colorCodes[index]}`;
    index++;
  });
}

function colorCodeGenerator() {
  const hexNumber = "0123456789abcdef";
  let hexColorCode = "#";
  for (let count = 0; count < 6; count++) {
    const index = Math.floor(Math.random() * 16);
    hexColorCode += hexNumber[index];
  }
  return hexColorCode;
}

function colorPalette() {
  const colorCollection = [];
  for (let count = 0; count < 5; count++) {
    colorCollection.push(colorCodeGenerator());
  }
  return colorCollection;
}
