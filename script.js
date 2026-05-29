// All possible hex characters
const hexCharacters = "0123456789ABCDEF";

// Selecting elements
const button = document.querySelector(".btn");
const colorText = document.querySelector(".color");

// Function to generate random hex color
function getRandomHexColor() {
  let hexColor = "#";

  // Generate 6 random characters
  for (let i = 0; i < 6; i++) {

    // Random number between 0 and 15
    const randomIndex = Math.floor(
      Math.random() * hexCharacters.length
    );

    // Add random character to string
    hexColor += hexCharacters[randomIndex];
  }

  return hexColor;
}

// Button click event
button.addEventListener("click", function () {

  // Generate color
  const randomColor = getRandomHexColor();

  // Change background color
  document.body.style.backgroundColor = randomColor;

  // Update text on screen
  colorText.textContent = randomColor;
});