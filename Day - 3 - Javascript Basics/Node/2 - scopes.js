// Declaring variables using var

// oldest way to declare variables, it is function scoped,
// not block scoped, hoisted to the top of the function
function varExample() {
  var x = 10;
  var y;
  if (true) {
     y = 20;
  }
  console.log("Var example:");
  console.log(x); // 10
  console.log(y); // 20
}
varExample();

// Declaring variables using let, it is block scoped, not hoisted
function letExample() {
  let x = 10;
  if (true) {
    let y = 20;
    console.log("Let example:");
    console.log(x); // 10
    console.log(y); // 20
  }
  // console.log(x); 
  // console.log(y); // Error: y is not defined outside the block
}
letExample();

// Declaring variables using const
// const is block scoped and cannot be reassigned
// but the properties of the object can be changed

function constExample() {
  const x = 10;
  // x = 20; // TypeError: Assignment to constant variable.
  console.log("Const example:");
  console.log(x); // 10
}
constExample();
