/*
d = √((x2 - x1)² + (y2 - y1)²)
*/
/*
function calcDistance(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    return distance;
  }

  let x1 = parseFloat(prompt("Give me the first coordinates of x"));
  let y1 = parseFloat(prompt("Give me the second coordinates of x"));
  let x2 = parseFloat(prompt("Give me the first coordinates of y"));
  let y2 = parseFloat(prompt("Give me the second coordinates of y"));

  let distance = calcDistance(x1, y1, x2, y2);
console.log(`Distance between A and B: `+ distance);
*/

/* 
Verify if the guy place a number.
*/
function calcDistance(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    return distance;
  }

function getInput(promptMessage) {
  let input;
  while (true) {
    input = parseFloat(prompt(promptMessage));
    if (!isNaN(input)) {
      break;
    }
    alert("You can't read ?, Please enter a valid number.");
  }
  return input;
}

let x1 = getInput("Give me the first coordinates of x");
let y1 = getInput("Give me the second coordinates of x");
let x2 = getInput("Give me the first coordinates of y");
let y2 = getInput("Give me the second coordinates of y");

let distance = calcDistance(x1, y1, x2, y2);
console.log(`Distance between A and B: ` + distance);
