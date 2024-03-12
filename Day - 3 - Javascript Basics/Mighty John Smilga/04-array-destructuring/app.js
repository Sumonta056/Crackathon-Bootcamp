// faster/easier way to access/unpack variables from arrays

const fruits = ["orange", "banana", "lemon"];
const friends = ["john", "peter", "bob", "anna", "kelly"];

// cumbersome way
const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

const [john, peter, bob, anna, kelly, susan] = friends;

console.log(john, peter, bob);
console.log(john, peter, bob, anna, kelly);
console.log(john, peter, bob, anna, kelly, susan);
console.log(john, peter, bob, anna, kelly, susan);
// Swap Variables

// what if I want not in serial

const [john2, , , , kelly2] = friends;

console.log(john2, kelly2);

// Question: How to swap variables using destructuring?

let first = "bob";
let second = "john";

// let temp = second;
// second = first;
// first = temp;

[second, first] = [first, second];

console.log(first, second);
