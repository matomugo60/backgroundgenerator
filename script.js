const button = document.querySelector(".btn");
const hexText = document.querySelector("#hexCode");
const nameText = document.querySelector("#colorName");

// Limited known color map (CSS-style names)
const namedColors = {
  "#FF0000": "Red",
  "#00FF00": "Lime",
  "#0000FF": "Blue",
  "#000000": "Black",
  "#FFFFFF": "White",
  "#FFFF00": "Yellow",
  "#FFA500": "Orange",
  "#800080": "Purple",
  "#FFC0CB": "Pink",
  "#008080": "Teal"
};

const hexChars = "0123456789ABCDEF";

// Generate random hex color
function getRandomHex() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexChars.length);
    color += hexChars[index];
  }

  return color;
}

// Find closest named color (simple match only)
function getColorName(hex) {
  const upperHex = hex.toUpperCase();

  if (namedColors[upperHex]) {
    return namedColors[upperHex];
  }

  return "Unknown Shade";
}

button.addEventListener("click", () => {
  const randomColor = getRandomHex();

  document.body.style.backgroundColor = randomColor;

  hexText.textContent = randomColor;
  nameText.textContent = getColorName(randomColor);
});