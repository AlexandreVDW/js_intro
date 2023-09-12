class Circle {
    constructor(xPos, yPos, radius) {
      this.xPos = xPos;
      this.yPos = yPos;
      this.radius = radius;
    }
    move (xOffset, yOffset){
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
    get surface() {
        return Math.PI * this.radius * this.radius;
    }
}    

// Create a Circle object
let myCircle = new Circle(5, 10, 3);

// Display initial attributes
console.log("Initial Circle Attributes:");
console.log(`Position: (${myCircle.xPos}, ${myCircle.yPos})`);
console.log(`Radius: ${myCircle.radius}`);
console.log(`Surface: ${myCircle.surface}`);

// Move the circle
myCircle.move(2, -4);

// Display updated attributes after moving
console.log("\nUpdated Circle Attributes:");
console.log(`New Position: (${myCircle.xPos}, ${myCircle.yPos})`);
