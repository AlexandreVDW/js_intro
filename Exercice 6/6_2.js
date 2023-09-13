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
            return console.log("rectangles are collides"); // Collides
          }
      
          return console.log("rectangles are not collides"); // Doesn't collide
    }
}

        // Example usage:
        //colide :
        
        let rectangle1 = new Rectangle(0, 0, 4, 4);
        let rectangle2 = new Rectangle(2, 2, 4, 4);
        
        //not colide :
        /*
        let rectangle1 = new Rectangle(0, 0, 2, 2); 
        let rectangle2 = new Rectangle(3, 3, 2, 2); 
        */
        console.log(rectangle1.collides(rectangle2));
