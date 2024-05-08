// RGB Colors with JS by Mr. V

// Variables to store HTML Elements
let redInEl = document.getElementById("red");
let greenInEl = document.getElementById("green");
let blueInEl = document.getElementById("blue");
let rgbStringOutEl = document.getElementById("rgbstrout");
let displayEl = document.getElementById("display");

// Event listener
redInEl.addEventListener("input", rgbPreview);
greenInEl.addEventListener("input", rgbPreview);
blueInEl.addEventListener("input", rgbPreview);
// Event Function
function rgbPreview() {
  // Input
  let rvalue = +redInEl.value;
  let gvalue = +greenInEl.value;
  let bvalue = +blueInEl.value;
  // Check rvalue
  if (rvalue < 0) {
    rvalue = 0;
    redInEl.value = 0;
  } else if (rvalue > 255) {
    rvalue = 255;
    redInEl.value = 255;
  }
  // Check gvalue
  if (gvalue < 0) {
    gvalue = 0;
    greenInEl.value = 0;
  } else if (gvalue > 255) {
    gvalue = 255;
    greenInEl.value = 255;
  }

  // Process: build rgb string rgb(_,_,_)
  let rgbstring = "rgb(" + rvalue + "," + gvalue + "," + bvalue + ")";

  // Output: display rgb sring and update the color prev
  rgbStringOutEl.innerHTML = rgbstring;
  displayEl.style.background = rgbstring;
}
