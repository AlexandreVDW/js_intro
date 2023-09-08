
let n = parseInt(prompt("Enter a number, n:"));
let sum = 0;

if (!isNaN(n) && n > 0) {
    for (let i = 0; i < n; i++) {
      const num = parseFloat(prompt(`Enter number`));
      if (!isNaN(num)) {
        sum += num;
      } 
    }
}
document.write(`Somme: ${sum}`)

/*solution Pote*/
/*
let n = parseInt(prompt("Enter a number, n:"));
let sum = 0;

if (!isNaN(n) && n > 0) {
    for (let i = 0; i < n; i++) {
      const num = parseFloat(prompt(`Enter number ${i + 1}:`));
  
      if (!isNaN(num)) {
        sum += num;
      } else {
        alert("Invalid input. Please enter a valid number.");
        i--;
      }
    }
  
    alert(`The sum of the ${n} numbers is: ${sum}`);
  } else {
    alert("Invalid input for n. Please enter a positive number.");
  }
*/