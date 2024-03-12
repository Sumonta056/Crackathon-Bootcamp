// Javascript Nuggets - Promises

// async await
// consume/use promises

// Pending => Rejected | FulFilled

const value = 2;

let p = new Promise((resolve, reject) => {});
console.log(p);

p = new Promise((resolve, reject) => {
  resolve();
});
console.log(p);

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3);
  console.log(random);
  if (random === value) {
    resolve("you guessed correctly");
  } else {
    reject("wrong number");
  }
});

console.log(promise);

promise.then((data) => console.log(data)).catch((err) => console.log(err));
