//creating a target button and targeting icon container
const toggle = document.querySelector("#dark");

// targeting container
const calculator = document.querySelector(".container");
// targeting input screen
const cal_screen = document.querySelector('input[name="display"]');
// targeting button container
const btn = document.querySelector(".buttons");

//when user click light mode will be change into a dark mode

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
document.body.style.backgroundColor='white';
  if (this.classList.toggle("bi-brightness-high-fill")) {
    calculator.style.backgroundColor = "white";
    calculator.style.border = " 3px solid white";
    calculator.style.boxShadow =
      "7px 7px 7px 5px #cbced1, -7px -7px 5px #ffffff";
    //for screen
    cal_screen.style.backgroundColor = "white";
    cal_screen.style.boxShadow =
      "inset 5px 5px 5px 5px #00000020, -5px -5px  3px #ffff";
    cal_screen.style.borderBottom = "2px solid white";
    cal_screen.style.color = "black";

    //for buttons
    btn.style.backgroundColor = "white";

    //for button
    let buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {
      button.style.backgroundColor = "white"; // Reset to original background
      button.style.color = "black"; // Reset text color to original
      button.style.boxShadow = "7px 7px  8px #00000020, -7px -7px 8px #ffff";
      button.style.fontSize = "12px";

      button.addEventListener("mouseover", () => {
        button.style.boxShadow = "inset 7px 7px 7px rgba(0, 0, 0, 0.2)";
        button.style.fontSize = "15px";
      });

      button.addEventListener("mouseout", () => {
        button.style.boxShadow = "7px 7px  8px #00000020, -7px -7px 8px #ffff";
        button.style.fontSize = "12px";
      });
    });
    document.getElementById("del").style.backgroundColor = "mediumspringgreen";
    document.getElementById("ac").style.backgroundColor = "deeppink";
    document.getElementById("equal").style.backgroundColor = "aqua";

    calculator.style.transition = "1s";
  } else {
    document.body.style.backgroundColor='white';
    calculator.style.backgroundColor = "black";
    calculator.style.border = "1px solid black";
    calculator.style.boxShadow = "3px 3px  5px gray, -3px -3px 5px gray";

    //screen
    cal_screen.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    cal_screen.style.boxShadow = "inset 1px 1px 1px 2px black";
    cal_screen.style.borderBottom = "2px solid darkslategrey";
    cal_screen.style.color = "white";

    // buttons
    btn.style.backgroundColor = "black";

    //button
    let buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {
      button.style.backgroundColor = "black"; //1 Set the button color to contrast black
      button.style.color = "white"; // Set text color to white for better visibility
      button.style.boxShadow = " 1px 1px 1px  black ";
      button.style.fontSize = "12px";

      colors();
      button.addEventListener("mouseover", () => {
        button.style.boxShadow = " 2px 2px 2px springgreen, -2px -2px 2px red";
        button.style.fontSize = "15px";
      });

      button.addEventListener("mouseout", () => {
        button.style.boxShadow = " 1px 1px  1px  black";

        button.style.fontSize = "12px";
      });
    });
    calculator.style.transition = "1s";
  }
});

// set color when caclculator will be present in dark mode
function colors() {
  document.getElementById("ac").style.color = "red";
  document.getElementById("fact").style.color = "aqua";
  document.getElementById("openP").style.color = "aqua";
  document.getElementById("closeP").style.color = "aqua";
  document.getElementById("per").style.color = "aqua";
  document.getElementById("del").style.color = "aqua";

  document.getElementById("div").style.color = "deeppink";
  document.getElementById("mul").style.color = "deeppink";
  document.getElementById("plus").style.color = "deeppink";
  document.getElementById("equal").style.color = "deeppink";
}
