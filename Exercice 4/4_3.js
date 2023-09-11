function rand10() {
    return Math.floor((Math.random() * 10) + 1);
  }
  
  function multiRand(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
      result.push(rand10());
    }
    return result;
  }

  function generateRandomNumbers() {
    let n = parseInt(prompt("Enter the number of random numbers to generate:"));
  
    if (isNaN(n) || n <= 0) {
      alert("Please enter a valid positive number.");
      return;
    }
  
    let randomNumbers = multiRand(n);
    alert(`Random numbers: ` + randomNumbers.join(", "));
  }
  
  generateRandomNumbers();
