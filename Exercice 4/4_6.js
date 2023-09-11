function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
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
  let num = getInput("Give me the numbers you want factorial");
  console.log("Factorial of " + num + " is " + factorial(num));