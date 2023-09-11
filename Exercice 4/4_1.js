function calcSurface(length, width) {
    return length * width;
  }

let length = prompt("Enter the length of the rectangle:");
let width = prompt("Enter the width of the rectangle:");

let surfaceArea = calcSurface(length, width);

alert(`The surface area of the rectangle is: `+ surfaceArea);

/* Bonus Perso :*/
/*
function calcSurface(length, width) {
    return length * width;
  }

let length = parseFloat(prompt("Enter the length of the rectangle:"));
let width = parseFloat(prompt("Enter the width of the rectangle:"));

if (isNaN(length) || isNaN(width)) {
  alert("Please enter valid numbers for length and width.");
} else {
  let surfaceArea = calcSurface(length, width);

alert(`The surface area of the rectangle is: ${surfaceArea}`);
}
*/