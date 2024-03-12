// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them

const udemy = "udemy";

const letters = [...udemy];
console.log(letters);

const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];

const newStudent = "arnold";

let student = [boys, girls, newStudent];

console.log(student);
student = [...boys, ...girls, newStudent];

console.log(student);

// reference
let newStudents = student;

newStudents[0] = "tim";
console.log("new students:", newStudents);
console.log("old students:", student);

// copy
newStudents = [...student];
newStudents[0] = "tim";
console.log(newStudents);
console.log(student);

// ES2018 - ES8

const person = { name: "john", job: "developer" };
const newPerson = { ...person, city: "chicago", name: "peter" };
console.log(newPerson);
