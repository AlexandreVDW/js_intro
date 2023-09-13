class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
      this.topLeftXPos = topLeftXPos;
      this.topLeftYPos = topLeftYPos;
      this.width = width;
      this.length = length;
    }
    collides(otherRectangle) {
      // Calculate the coordinates of the top-left and bottom-right of the base rectangles
      let thisTopLeftX = this.topLeftXPos;
      let thisTopLeftY = this.topLeftYPos;
      let thisBottomRightX = this.topLeftXPos + this.width;
      let thisBottomRightY = this.topLeftYPos + this.length;
  
      // Calculate the coordinates of the other rectangles corners
      let otherTopLeftX = otherRectangle.topLeftXPos;
      let otherTopLeftY = otherRectangle.topLeftYPos;
      let otherBottomRightX = otherRectangle.topLeftXPos + otherRectangle.width;
      let otherBottomRightY = otherRectangle.topLeftYPos + otherRectangle.length;
  
      // Check for collision by comparing the coordinates
      if (
        thisTopLeftX < otherBottomRightX &&
        thisBottomRightX > otherTopLeftX &&
        thisTopLeftY < otherBottomRightY &&
        thisBottomRightY > otherTopLeftY
      ) {
        return true; // Collides
      }
  
      return false; // Doesn't collide
    }
  }
  
  // Function to generate a random integer within a range
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Generate 10 random rectangles and store them in an array
  let rectangles = [];
  for (let i = 0; i < 10; i++) {
    let x = getRandomInt(0, 5); // Adjust the range as needed
    let y = getRandomInt(0, 5); // Adjust the range as needed
    let width = getRandomInt(1, 10); // Adjust the range as needed
    let length = getRandomInt(1, 10); // Adjust the range as needed
    rectangles.push(new Rectangle(x, y, width, length));
  }
  
  // Find colliding rectangles and display them
  let collidingRectangles = [];
  for (let i = 0; i < rectangles.length; i++) {
    for (let j = i + 1; j < rectangles.length; j++) {
      if (rectangles[i].collides(rectangles[j])) {
        collidingRectangles.push([i, j]);
      }
    }
  }
  
  if (collidingRectangles.length > 0) {
    console.log("Colliding Rectangles:");
    for (let [i, j] of collidingRectangles) {
      console.log(`Rectangle ${i} collides with Rectangle ${j}`);
    }
  } else {
    console.log("No colliding rectangles found.");
  }
  