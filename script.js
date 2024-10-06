//targeting display screen
const display = document.querySelector("#disp");

// set preventdefault user can press only calculator buttons
document.getElementById("disp").addEventListener("keydown", (event) => {
  event.preventDefault();
});

// clear the display
function clearDisplay() {
  display.value = "";
}

document.getElementById("ac").addEventListener("click", clearDisplay);

//targeting all buttons one by one and perform operations
document.getElementById("del").addEventListener("click", () => {
  display.value = display.value.toString().slice(0, -1);
});

// keypad numbers functions ("zero","one","two","three","four","five","six","seven","eight","nine")

const keypad = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
keypad.forEach((id, num) => {
  document.getElementById(id).addEventListener("click", () => {
    display.value += num.toString();
  });
});

//calculate per

document.getElementById("per").addEventListener("click", () => {
  display.value += "%";
});

function getPer(expression) {
  let parts = expression.split("%");
  let num1 = parseFloat(parts[0]);
  let num2 = parseFloat(parts[1]);

  // Calculate percentage
  let result = (num1 / 100) * num2;

  display.value = result.toFixed(2);
}

document.getElementById("mul").addEventListener("click", () => {
  display.value += "*";
});

document.getElementById("minus").addEventListener("click", () => {
  display.value += "-";
});

document.getElementById("plus").addEventListener("click", () => {
  display.value += "+";
});

document.getElementById("dot").addEventListener("click", () => {
  display.value += ".";
});

//targeting equal button to click user and get result
document.getElementById("equal").addEventListener("click", () => {
  let expression = display.value;

  // Check if it contains 'log('
  if (expression.includes("%")) {
    getPer(expression);
  } else if (expression.includes("log(")) {
    getLog(expression);
  } else if (expression.includes("sin(")) {
    getSin(expression);
  } else if (expression.includes("cos(")) {
    getCos(expression);
  } else if (expression.includes("tan(")) {
    getTan(expression);
  } else if (expression.includes("√")) {
    getRoot(expression);
  } else {
    try {
      display.value = eval(expression);
    } catch (error) {
      display.value = "Error";
    }
  }
});

//targeting openP
document.querySelector("#openP").addEventListener("click", () => {
  try {
    display.value += "(";
  } catch {
    display.value = "Error";
  }
});

//targeting closeP
document.querySelector("#closeP").addEventListener("click", () => {
  try {
    display.value += ")";
  } catch {
    display.value = "Error";
  }
});

//calculate factorial
document.querySelector("#fact").addEventListener("click", () => {
  let num = parseInt(display.value);
  // console.log(num);
  if (isNaN(num) || num < 0) {
    display.value = "Error";
    setTimeout(clearDisplay, 1000);
  } else {
    display.value = factorial(num);
  }
});

// factorial function()
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// pi function
function getPi() {
  display.value = "3.1415926536";
}

//calculate exponential
document.getElementById("exp").addEventListener("click", calculateExp);

function calculateExp() {
  display.value += "2.71828";
}

//calculate root
document.getElementById("root").addEventListener("click", () => {
  display.value += "√";
});

// document.getElementById("root").addEventListener("click", getRoot);
function getRoot(expression) {
  let startIndex = expression.indexOf("√") + 1;
  let endIndex = expression.length;
  let number = parseFloat(expression.substring(startIndex, endIndex));

  if (number < 0) {
    display.value = "Error";
    setTimeout(() => {
      clearDisplay();
    }, 1000);
  } else if (isNaN(number)) {
    display.value = "Error";
    setTimeout(clearDisplay, 1000);
  } else {
    display.value = Math.sqrt(number).toFixed(5);
  }
}

// Calculate trigonometric functions (sin, cos, tan)
document.getElementById("sin").addEventListener("click", () => {
  display.value += "sin(";
});

document.getElementById("cos").addEventListener("click", () => {
  display.value += "cos(";
});

document.getElementById("tan").addEventListener("click", () => {
  display.value += "tan(";
});

//sin()
function getSin(expression) {
  let startIndex = expression.indexOf("sin(") + 4;
  let endIndex = expression.indexOf(")");
  let number = parseFloat(expression.substring(startIndex, endIndex));
  if (isNaN(number)) {
    display.value = "Error";
  } else {
    let radianVal = (number * Math.PI) / 180;
    display.value = Math.sin(radianVal).toFixed(5);
  }
}

//cos()
function getCos(expression) {
  let startIndex = expression.indexOf("cos(") + 4;
  let endIndex = expression.indexOf(")");
  let number = parseFloat(expression.substring(startIndex, endIndex));
  if (isNaN(number)) {
    display.value = "Error";
  } else {
    let radianVal = (number * Math.PI) / 180;
    display.value = Math.cos(radianVal).toFixed(5);
  }
}

//tan()
function getTan(expression) {
  let startIndex = expression.indexOf("tan(") + 4;
  let endIndex = expression.indexOf(")");
  let number = parseFloat(expression.substring(startIndex, endIndex));
  if (isNaN(number) || number == 90) {
    display.value = "Error";
  } else {
    let radianVal = (number * Math.PI) / 180;
    display.value = Math.tan(radianVal).toFixed(5);
  }
}

//calculate log()
document.getElementById("log").addEventListener("click", () => {
  display.value += "log(";
});

function getLog(expression) {
  // Extract the number inside log()
  let startIndex = expression.indexOf("log(") + 4;
  let endIndex = expression.indexOf(")");
  let number = parseFloat(expression.substring(startIndex, endIndex));

  // Calculate log10 if the number is valid (greater than 0)
  if (number > 0) {
    let result = Math.log10(number).toFixed(5);
    display.value = result;
  } else {
    display.value = "Error";
  }
}

// calculate x^y
document.getElementById("power").addEventListener("click", () => {
  let y = parseFloat(display.value);

  if (isNaN(y) || y === "") {
    display.value = 0;
    setTimeout(clearDisplay, 500);
  } else {
    display.value = y * y;
  }
});

// Play sound
const playSounds = document.querySelectorAll(".btn");

playSounds.forEach((button) => {
  button.addEventListener("click", () => {
    const sound = new Audio("click1.mp3");
    sound.play();
  });
});

//equal button play sound
const equals = document.querySelector("#equal");
equals.addEventListener("click", () => {
  const sound = new Audio("click2.mp3");
  sound.play();
});

//ac button play sound
const ac = document.querySelector("#ac");
ac.addEventListener("click", () => {
  const sound = new Audio("click3.mp3");
  sound.play();
});
