let num1 = 10;
let num2 = 20;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

//destructuring 
[num2, num1] = [num1, num2]

console.log('After swap detructuring: ', num1, num2); // After swap: 20 10
