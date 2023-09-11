let array=[1,4,3,7,9];

let min = array[0];
let max = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
  if (array[i] > max) {
    max = array[i];
  }
}
console.log("min is "+ min);
console.log("max is "+ max);