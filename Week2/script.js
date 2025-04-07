
// Task 1
let age = 25;
let isAdult = age >= 18; // true if age is 18 or more
console.log("Is adult:", isAdult);

// Task 2
let x = 10;
let y = 5;

let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

console.log("Addition:", addition);
console.log("Multiplication:", multiplication);
console.log("Modulus:", modulus);

// Task 3
let n = 7; // You can change this value to test other numbers
let isEven = (n % 2 === 0) ? "Even" : "Odd";
console.log(`The number ${n} is ${isEven}`);

// Task 4
let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}
console.log("Array of numbers from 1 to 5:", numbers);

// Task 5
function square(num) {
  return num * num;
}

console.log("Square of 4:", square(4)); // Example usage
