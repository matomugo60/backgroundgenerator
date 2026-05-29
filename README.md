# Random Background Generator

A simple web application that generates a random Hex color and applies it as the background color of the page.

This project focuses on JavaScript fundamentals such as DOM manipulation, loops, functions, random number generation, and dynamically updating CSS styles.

---

## Features

* Generate random Hex color codes
* Change the page background dynamically
* Display the current Hex color value on screen
* Smooth background color transition effect

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)

---

## Project Structure

```plaintext id="v6pf0y"
project-folder/
│
├── index.html
├── style.css
└── script.js
```

---

## How It Works

The application:

1. Generates a random 6-digit Hex color code
2. Updates the background color of the webpage
3. Displays the generated Hex code on screen

Example generated color:

```plaintext id="0w3qgo"
#A125F4
```

---

## JavaScript Concepts Practiced

### DOM Manipulation

Using `document.querySelector()` to select HTML elements.

```javascript id="n7hjlwm"
document.querySelector(".btn")
```

---

### Random Number Generation

Using `Math.random()` and `Math.floor()` to generate random indexes.

```javascript id="1o0uvc"
Math.floor(Math.random() * hexCharacters.length)
```

---

### Loops

Using a `for` loop to build the Hex string one character at a time.

```javascript id="jkxvsh"
for (let i = 0; i < 6; i++)
```

---

### Dynamic CSS Updates

Changing styles directly with JavaScript.

```javascript id="kvhznf"
document.body.style.backgroundColor = randomColor;
```

---

## Installation & Usage

1. Clone the repository:

```bash id="evyy1x"
git clone https://github.com/your-username/random-background-generator.git
```

2. Navigate into the project folder:

```bash id="ufdl0z"
cd random-background-generator
```

3. Open `index.html` in your browser.

No frameworks. No dependencies. Just raw JavaScript and questionable amounts of color generation.

---

## Future Improvements

Potential upgrades include:

* Copy color code button
* Gradient background generator
* Dark/light text auto-adjustment
* Color history tracker
* Favorite color saving with Local Storage
* Automatic color cycling mode

---

## Author

Martin Mugo

---
