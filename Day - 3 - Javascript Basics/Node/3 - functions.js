// Regular Function Declaration
function regularFunction(a, b) {
  return a + b;
}

// Function Expression
let functionExpression = function (a, b) {
  return a + b;
};

// Arrow Function
let arrowFunction = (a, b) => {
  return a + b;
};

// explain the jhamela
let arrowFunctionShort = (a, b) => a + b;

// Callback Function
function performOperation(a, b, c, callback) {
  return callback(a, b);
}

// Define a callback function
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

console.log(performOperation(5, 3, (a, b) => a * b));

// Function calls
console.log("Regular Function:", regularFunction(2, 3));
console.log("Function Expression:", functionExpression(2, 3));
console.log("Arrow Function:", arrowFunction(2, 3));
console.log("Callback Function:", performOperation(2, 3, add));
