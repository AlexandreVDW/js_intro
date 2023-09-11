function rand10() {
    return Math.floor((Math.random() * 10) + 1);
  }

  alert(`Random number between 1 and 10: `+ rand10());

/*function rand10() {
    // Generate a random number between 0 and 1 (exclusive of 1)
    let randomNumber = Math.random();
    
    // Scale the random number to be between 1 and 10
    let randomInteger = Math.floor(randomNumber * 10) + 1;
    
    return randomInteger;
  }

let result = rand10();
alert(`Random number between 1 and 10: `+ result);
*/