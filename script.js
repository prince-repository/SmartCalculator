//targeting display screen 
const display = document.querySelector("#disp");

// set preventdefault user can press only calculator buttons 
document.getElementById("disp").addEventListener("keydown", (event) => {
  event.preventDefault();
});

// clear the display
function clearDisplay(){
  display.value = "";
}

document.getElementById("ac").addEventListener("click", clearDisplay);

//targeting all buttons one by one and perform operations 
document.getElementById("del").addEventListener("click", () => {
  display.value = display.value.toString().slice(0, -1);
});



// keypad numbers functions ("zero","one","two","three","four","five","six","seven","eight","nine")

const keypad=["zero","one","two","three","four","five","six","seven","eight","nine"];
keypad.forEach((id,num) => {
  document.getElementById(id).addEventListener("click", () => {
   display.value+=num.toString();
  });
});




document.getElementById("per").addEventListener("click", () => {
  display.value += "%";
});

document.getElementById("div").addEventListener("click", () => {
  display.value += "/";
});



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
document.getElementById("equal").addEventListener("click", result);

function result() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
    setTimeout(clearDisplay,500);
  }
}

//targeting openP
document.querySelector("#openP").addEventListener("click", () => {
  try{
    display.value += "(";
  }
 catch{
  display.value='Error';
 
 }

   
  
});

//targeting closeP 
document.querySelector("#closeP").addEventListener("click", () => {
  try{
    display.value += ")";
  }
 catch{
  display.value='Error';
 
 }
});


//calculate factorial 
document.querySelector("#fact").addEventListener("click", () => {

  let num = parseInt(display.value);
  // console.log(num);
  if (isNaN(num) || num < 0) {
    display.value = "Error";
    setTimeout(clearDisplay,1000);
    
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
document.getElementById("root").addEventListener("click", getRoot);
function getRoot() {
  let val = parseFloat(display.value);
  if (val < 0) {
    display.value = "Error";
    setTimeout(()=>{
      clearDisplay();
    },1000);
  } else if (!isNaN(val)) {
    display.value = Math.sqrt(val).toFixed(5);
  } else {
    display.value = "Error";
    setTimeout(clearDisplay,1000);
  }
}


// Calculate trigonometric functions (sin, cos, tan)
["sin", "cos", "tan"].forEach((func) => {
  document.getElementById(func).addEventListener("click", () => {
    let val = parseFloat(display.value);
    if (isNaN(val)) {
      display.value = "Error";
      setTimeout(clearDisplay, 1000);
    } else {
      let radianVal = (val * Math.PI) / 180;
      display.value = Math[func](radianVal);
    }
  });
});


//calculate log
document.getElementById("log").addEventListener("click", () => {
  let val = parseFloat(display.value);
  if (!isNaN(val)) {
    display.value = Math.log10(val).toFixed(5);
  } else {
    display.value = "Error";
    setTimeout(clearDisplay,1000);
  }
});


// calculate x^y
document.getElementById("power").addEventListener("click", () => {
  let x = parseFloat(display.value);

  if (!isNaN(x)) {
    display.value = x * x;
  } else {
    display.value = "Error";
    setTimeout(clearDisplay,1000);
  }
});


// Play sound
const playSounds = document.querySelectorAll('.btn');

playSounds.forEach((button) => {
  button.addEventListener('click', () => {
    const sound = new Audio('click1.mp3');
    sound.play();
  });
});

//equal button play sound 
const equals=document.querySelector('#equal');
equals.addEventListener('click',()=>{
  const sound = new Audio('click2.mp3');
  sound.play();
});

//ac button play sound 
const ac=document.querySelector('#ac');
ac.addEventListener('click',()=>{
  const sound = new Audio('click3.mp3');
  sound.play();
});




