function roundingToDecimal(number, decimals) {
  return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

function randomColor() {
  const randomColor = [];
  for (let i = 0; i < 3; i++) {
    randomColor.push(Math.floor(Math.random() * (256 - 0) + 0));
  }
  return `rgb(${randomColor})`;
}

export { roundingToDecimal, randomColor };
