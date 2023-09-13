class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
      this.topLeftXPos = topLeftXPos;
      this.topLeftYPos = topLeftYPos;
      this.width = width;
      this.length = length;
    }
    collides(otherRectangle) {
      let thisTopLeftX = this.topLeftXPos;
      let thisTopLeftY = this.topLeftYPos;
      let thisBottomRightX = this.topLeftXPos + this.width;
      let thisBottomRightY = this.topLeftYPos + this.length;
  
      let otherTopLeftX = otherRectangle.topLeftXPos;
      let otherTopLeftY = otherRectangle.topLeftYPos;
      let otherBottomRightX = otherRectangle.topLeftXPos + otherRectangle.width;
      let otherBottomRightY = otherRectangle.topLeftYPos + otherRectangle.length;
  
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
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Generate the first rectangle
  let firstRectangle = new Rectangle(
    getRandomInt(0, 50),
    getRandomInt(0, 50),
    getRandomInt(1, 10),
    getRandomInt(1, 10)
  );
  
  // Generate 10 random rectangles and display only the ones that collide with the first rectangle
  for (let i = 0; i < 50; i++) {
    let x = getRandomInt(0, 50); // Increased canvas size
    let y = getRandomInt(0, 50); // Increased canvas size
    let width = getRandomInt(1, 10); // Adjusted size range
    let length = getRandomInt(1, 10); // Adjusted size range
    let newRectangle = new Rectangle(x, y, width, length);
    
    if (newRectangle.collides(firstRectangle)) {
      console.log(`Rectangle ${i + 1} collides with the first rectangle.`);
    }
  }
  
  